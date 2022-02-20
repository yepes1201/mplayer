import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/auth/AuthContext";
import { UserPlaylists } from "./UserPlaylists";

export const Sidebar = () => {
  const { user, setUser, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser({});
    setIsLoggedIn(false);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__container flex-column">
        <div>
          <div className="sidebar__user flex-row">
            <h2>{user.name}</h2>
            <div className="sidebar__menu-btn circle-btn bg-dark-light">
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className="sidebar__nav mt-4">
            <ul>
              <Link className="color-white-grey" to="/">
                <li>
                  <i className="fas fa-home mr-2"></i> Home
                </li>
              </Link>
              <Link className="color-white-grey" to="/favorites">
                <li>
                  <i className="fas fa-heart mr-2"></i> Favorites
                </li>
              </Link>
              <Link className="color-white-grey" to="/songs">
                <li>
                  <i className="fas fa-music mr-2"></i> Manage Songs
                </li>
              </Link>
              <Link className="color-white-grey" to="/about">
                <li>
                  <i className="fas fa-info-circle mr-2"></i> About
                </li>
              </Link>
              <Link className="color-white-grey" to="/settings">
                <li>
                  <i className="fas fa-cog mr-2"></i> Settings
                </li>
              </Link>
            </ul>
          </div>
          <button onClick={handleLogout} className="btn btn-logout mt-2">
            Log out
          </button>
        </div>
        <hr className="mt-4" />
        <div className="mt-4">
          <button className="btn btn-playlist">
            <i className="fas fa-plus mr-4"></i>
            <p>Create Playlist</p>
          </button>
        </div>
        <UserPlaylists />
      </div>
    </div>
  );
};

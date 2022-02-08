import React from "react";
import { Link } from "react-router-dom";
import { UserPlaylists } from "./UserPlaylists";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container flex-column">
        <div>
          <div className="sidebar__user flex-row">
            <h2>Daniel Yepes</h2>
            <div className="sidebar__menu-btn circle-btn bg-dark-light">
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className="sidebar__nav mt-4">
            <ul>
              <li>
                <Link className="color-white-grey" to="/">
                  <i className="fas fa-home mr-2"></i> Home
                </Link>
              </li>
              <li>
                <Link className="color-white-grey" to="/favorites">
                  <i className="fas fa-heart mr-2"></i> Favorites
                </Link>
              </li>
              <li>
                <Link className="color-white-grey" to="/songs">
                  <i className="fas fa-music mr-2"></i> Manage Songs
                </Link>
              </li>
              <li>
                <Link className="color-white-grey" to="/favorites">
                  <i className="fas fa-info-circle mr-2"></i> About
                </Link>
              </li>
              <li>
                <Link className="color-white-grey" to="/favorites">
                  <i className="fas fa-cog mr-2"></i> Settings
                </Link>
              </li>
            </ul>
          </div>
          <button className="btn btn-logout mt-2">Log out</button>
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

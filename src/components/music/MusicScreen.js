import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { Sidebar } from "./sidebar/Sidebar";
import { Navbar } from "./navbar/Navbar";
import { FooterPlayer } from "./footer-player/FooterPlayer";
import { AuthContext } from "../../context/auth/AuthContext";

export const MusicScreen = () => {
  const { user } = useContext(AuthContext);

  if (!user.uid) {
    return <Navigate to="/auth/login" replace />;
  }
  return (
    <div className="musicscreen">
      <Sidebar />
      <Navbar />
      <div className="musicscreen__render">
        <Outlet />
      </div>
      <FooterPlayer />
    </div>
  );
};

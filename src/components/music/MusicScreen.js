import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import { Sidebar } from "./sidebar/Sidebar";
import { Navbar } from "./navbar/Navbar";
import { FooterPlayer } from "./footer-player/FooterPlayer";

export const MusicScreen = () => {
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

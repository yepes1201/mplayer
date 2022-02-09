import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import { MusicScreen } from "../components/music/MusicScreen";
import { Home } from "../components/music/home/Home";
import { Favorites } from "../components/music/favorites/Favorites";
import { ManageSongs } from "../components/music/songs/ManageSongs";
import { About } from "../components/music/about/About";
import { Settings } from "../components/music/settings/Settings";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { RecoverPassword } from "../components/auth/RecoverPassword";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MusicScreen />}>
        <Route index element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/songs" element={<ManageSongs />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="/auth" element={<PublicRoute />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="recover-password" element={<RecoverPassword />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

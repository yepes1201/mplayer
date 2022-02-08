import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { Favorites } from "../components/music/favorites/Favorites";
import { Home } from "../components/music/home/Home";

import { MusicScreen } from "../components/music/MusicScreen";
import { ManageSongs } from "../components/music/songs/ManageSongs";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MusicScreen />}>
        <Route index element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/songs" element={<ManageSongs />} />
      </Route>
      {/* <Route path="/login" element={<Login />} */}
      {/* <Route path="/register" element={<Register />} */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

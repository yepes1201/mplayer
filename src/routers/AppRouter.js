import React, { useState, useEffect, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { AuthContext } from "../context/auth/AuthContext";

import { LoadingWheel } from "../components/LoadingWheel";
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
  const { setUser, setIsLoggedIn } = useContext(AuthContext);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const local = localStorage.getItem("token");
    const token = JSON.parse(local !== "undefined" ? local : null);
    if (token) {
      fetch("http://localhost:8080/api/auth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-token": token,
        },
      })
        .then((res) => res.json())
        .then(({ user }) => {
          if (user) {
            setIsLoggedIn(true);
            setUser(user);
          } else {
            setUser({});
            setIsLoggedIn(false);
          }
          setChecking(false);
        })
        .catch((err) => {
          console.log(err);
          setChecking(false);
        });
    } else {
      setChecking(false);
    }
  }, [setIsLoggedIn, setUser]);

  if (checking) {
    return <LoadingWheel checking={true} />;
  }

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
        <Route index element={<Navigate to="/auth/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="recover-password" element={<RecoverPassword />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

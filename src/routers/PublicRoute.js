import React, { useContext } from "react";

import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";

export const PublicRoute = () => {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

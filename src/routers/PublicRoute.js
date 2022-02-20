import React, { useContext } from "react";

import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";

export const PublicRoute = () => {
  const { user } = useContext(AuthContext);

  if (user.uid) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

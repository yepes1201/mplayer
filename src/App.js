import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context/auth/AuthContext";
import { AppRouter } from "./routers/AppRouter";

import "./styles/styles.css";

export const App = () => {
  const [user, setUser] = useState({});
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, setUser }}>
        <AppRouter />
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

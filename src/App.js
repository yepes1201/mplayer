import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { NotificationModal } from "./components/NotificationModal";
import { AuthContext } from "./context/auth/AuthContext";
import { UIContext } from "./context/ui/UIContext";
import { AppRouter } from "./routers/AppRouter";

import "./styles/styles.css";

const uiDefaultState = {
  active: false,
  msg: "",
  type: {},
};

export const App = () => {
  const [user, setUser] = useState({});
  const [ui, setUi] = useState(uiDefaultState);

  return (
    <BrowserRouter>
      <UIContext.Provider value={{ ui, setUi, uiDefaultState }}>
        <AuthContext.Provider value={{ user, setUser }}>
          <NotificationModal
            ui={ui}
            uiDefaultState={uiDefaultState}
            msg={ui.msg}
            color={ui.type.color}
            icon={ui.type.icon}
          />
          <AppRouter />
        </AuthContext.Provider>
      </UIContext.Provider>
    </BrowserRouter>
  );
};

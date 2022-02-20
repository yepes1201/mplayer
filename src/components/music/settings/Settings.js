import React, { useContext } from "react";

import { useForm } from "../../../hooks/useForm";
import { AuthContext } from "../../../context/auth/AuthContext";

import { icons } from "../../../icons/icons";
import { SettingsForm } from "./SettingsForm";

export const Settings = () => {
  const { user } = useContext(AuthContext);
  const { form, handleForm } = useForm({
    userName: user.name,
    userEmail: user.email,
    userPassword: "",
  });

  return (
    <div className="settings container center">
      <div className="settings__header mb-4">
        <div className="settings__profile">{icons.userIcon}</div>
        <h2>{user.name}</h2>
      </div>
      <div>
        <SettingsForm form={form} handleForm={handleForm} />
        <div className="settings__buttons">
          <button className="btn bg-primary">Save</button>
        </div>
      </div>
    </div>
  );
};

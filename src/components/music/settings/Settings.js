import React from "react";

import { useForm } from "../../../hooks/useForm";

import { icons } from "../../../icons/icons";
import { SettingsForm } from "./SettingsForm";

export const Settings = () => {
  const { form, handleForm } = useForm({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  return (
    <div className="settings container center">
      <div className="settings__header mb-4">
        <div className="settings__profile">{icons.userIcon}</div>
        <h2>Daniel Yepes</h2>
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

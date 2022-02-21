import React, { useContext, useEffect, useState } from "react";
import validator from "validator";

import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { UIContext } from "../../context/ui/UIContext";
import { notificationTypes } from "../../types/notification";
import { sendEmail } from "../../helpers/api";

export const RecoverPassword = () => {
  const { ui, setUi, uiDefaultState } = useContext(UIContext);
  const { form, handleForm } = useForm({ email: "" });
  const [formError, setFormError] = useState({ state: false, msg: "" });

  const { email } = form;

  const handleRecoverPassword = async () => {
    setUi(uiDefaultState);
    if (validator.isEmail(email)) {
      setFormError({ state: false, msg: "" });
      try {
        const { ok, msg } = await sendEmail(form);
        if (ok) {
          setUi({ notification: true, msg, type: notificationTypes.success });
        } else {
          setUi({ notification: true, msg, type: notificationTypes.error });
        }
      } catch ({ msg }) {
        setUi({ notification: true, msg, type: notificationTypes.error });
      }
    } else {
      setFormError({ state: true, msg: "Please provide a valid email." });
    }
  };

  useEffect(() => {
    return () => {
      setUi(uiDefaultState);
    };
  }, [setUi, uiDefaultState]);

  return (
    <div className="auth">
      {ui.notification && (
        <div className="notification">
          <div
            style={{ backgroundColor: ui.type.color }}
            className="notification-bar"
          ></div>
          <p>{ui.msg}</p>
          {ui.type.icon}
        </div>
      )}
      <div>
        <h2 className="auth__title">Recover Password</h2>
        <div className="auth__container">
          {formError.state && (
            <div className="form-error">
              <p>{formError.msg}</p>
            </div>
          )}
          <input
            style={{
              border: formError.state && "1px solid rgba(255, 0, 0, 0.3)",
            }}
            onChange={handleForm}
            value={email}
            name="email"
            type="email"
            placeholder="Email"
            className="form-input mb-2"
          />
          <button
            onClick={handleRecoverPassword}
            style={{ width: "100%" }}
            className="btn bg-primary mt-2 mb-4"
          >
            Recover Password
          </button>
          <Link className="auth__link" to="/auth/login">
            Already have an account?
          </Link>
          <br />
          <Link className="auth__link" to="/auth/register">
            Don't have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import validator from "validator";

import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const RecoverPassword = () => {
  const { form, handleForm } = useForm({ email: "" });
  const [formError, setFormError] = useState({ state: false, msg: "" });

  const handleRecoverPassword = () => {
    if (validator.isEmail(form.email)) {
      setFormError({
        state: false,
        msg: "",
      });

      // TODO: fetch reset email
      console.log("fetching...");
    } else {
      setFormError({
        state: true,
        msg: "Please provide a valid email.",
      });
    }
  };

  return (
    <div className="auth">
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
            value={form.email}
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

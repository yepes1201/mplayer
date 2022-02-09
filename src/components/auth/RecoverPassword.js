import React from "react";

import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const RecoverPassword = () => {
  const { form, handleForm } = useForm({ email: "" });

  return (
    <div className="auth">
      <div>
        {/* <h1>booser</h1> */}
        <h2 className="auth__title">Recover Password</h2>
        <div className="auth__container">
          <input
            onChange={handleForm}
            value={form.email}
            name="email"
            type="email"
            placeholder="Email"
            className="form-input mb-2"
          />
          <button
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

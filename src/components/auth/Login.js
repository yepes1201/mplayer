import React from "react";

import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const Login = () => {
  const { form, handleForm } = useForm({
    email: "",
    password: "",
  });
  return (
    <div className="auth">
      <div>
        {/* <h1>booser</h1> */}
        <h2 className="auth__title">Log in</h2>
        <div className="auth__container">
          <input
            onChange={handleForm}
            value={form.email}
            name="email"
            type="email"
            placeholder="Email"
            className="form-input mb-2"
          />
          <input
            onChange={handleForm}
            value={form.password}
            name="password"
            type="password"
            placeholder="Password"
            className="form-input mb-4"
          />
          <button
            style={{ width: "100%" }}
            className="btn bg-primary mt-2 mb-4"
          >
            Log in
          </button>
          <Link className="auth__link" to="/auth/register">
            Don't have an account?
          </Link>
          <br />
          <Link className="auth__link" to="/auth/recover-password">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
};

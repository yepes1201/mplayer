import React from "react";

import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const Register = () => {
  const { form, handleForm } = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  return (
    <div className="auth">
      <div>
        {/* <h1>booser</h1> */}
        <h2 className="auth__title">Register</h2>
        <div className="auth__container">
          <input
            onChange={handleForm}
            value={form.name}
            name="name"
            type="text"
            placeholder="Name"
            className="form-input mb-2"
          />
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
            className="form-input mb-2"
          />
          <input
            onChange={handleForm}
            value={form.password2}
            name="password2"
            type="password"
            placeholder="Confirm Password"
            className="form-input mb-4"
          />
          <button
            style={{ width: "100%" }}
            className="btn bg-primary mt-2 mb-4"
          >
            Register
          </button>
          <Link className="auth__link" to="/auth/login">
            Already have an account?
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

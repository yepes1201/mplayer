import React from "react";
import { Link } from "react-router-dom";

import { RegisterForm } from "./RegisterForm";

export const Register = () => {
  return (
    <div className="auth">
      <div>
        {/* <h1>booser</h1> */}
        <h2 className="auth__title">Register</h2>
        <div className="auth__container">
          <RegisterForm />
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

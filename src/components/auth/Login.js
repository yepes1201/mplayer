import React from "react";
import { Link } from "react-router-dom";

import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <div className="auth">
      <div>
        <h2 className="auth__title">Log in</h2>
        <div className="auth__container">
          <LoginForm />
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

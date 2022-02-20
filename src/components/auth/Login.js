import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthContext";
import { useForm } from "../../hooks/useForm";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const { setIsLoggedIn, setUser } = useContext(AuthContext);
  const { form, handleForm } = useForm({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    setLoading(true);
    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(({ user, token }) => {
        localStorage.setItem("token", JSON.stringify(token));
        setUser(user);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="auth">
      <div>
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
            disabled={loading}
            onClick={handleLogin}
            style={{ width: "100%", cursor: loading && "no-drop" }}
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

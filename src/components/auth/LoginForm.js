import React, { useContext, useState } from "react";
import validator from "validator";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../context/auth/AuthContext";

export const LoginForm = () => {
  const [formError, setFormError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(AuthContext);
  const { form, handleForm } = useForm({
    email: "",
    password: "",
  });

  const isValid = () => {
    if (!validator.isEmail(form.email)) {
      return false;
    }
    if (validator.isEmpty(form.password)) {
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    if (isValid()) {
      setFormError(false);
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
          if (user && token) {
            localStorage.setItem("token", JSON.stringify(token));
            setUser(user);
          } else {
            setFormError(true);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      setFormError(true);
    }
  };

  return (
    <>
      {formError && (
        <div className="form-error">
          <p>Invalid email or password. Please check fields.</p>
        </div>
      )}
      <input
        style={{ border: formError && "1px solid rgba(255, 0, 0, 0.3)" }}
        onChange={handleForm}
        value={form.email}
        name="email"
        type="email"
        placeholder="Email"
        className="form-input mb-2"
      />
      <input
        style={{ border: formError && "1px solid rgba(255, 0, 0, 0.3)" }}
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
    </>
  );
};

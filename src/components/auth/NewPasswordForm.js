import React, { useState, useContext } from "react";
import validator from "validator";
import { AuthContext } from "../../context/auth/AuthContext";

import { useForm } from "../../hooks/useForm";

export const NewPasswordForm = ({ token, userId, setModalError }) => {
  const [formError, setFormError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(AuthContext);
  const { form, handleForm } = useForm({
    password: "",
    password2: "",
  });
  const { password, password2 } = form;

  const isValid = () => {
    if (
      !validator.isStrongPassword(password) ||
      !validator.equals(password, password2)
    ) {
      setFormError(true);
      return false;
    }
    return true;
  };

  const handlePasswordReset = () => {
    setLoading(true);
    if (isValid()) {
      fetch("http://localhost:8080/api/auth/confirm-resetpassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, userId, token }),
      })
        .then((res) => res.json())
        .then(({ ok, msg, user, loginToken }) => {
          if (ok) {
            localStorage.setItem("token", JSON.stringify(loginToken));
            setUser(user);
          } else {
            setModalError({
              state: true,
              msg,
            });
          }
          setLoading(false);
        })
        .catch(({ msg }) => {
          setModalError({
            msg,
          });
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      {formError && (
        <div className="form-error">
          <p>
            Password must have at least 6 characters, lowercase, uppercase and a
            special character.
          </p>
        </div>
      )}
      <input
        style={{ border: formError && "1px solid rgba(255, 0, 0, 0.3)" }}
        onChange={handleForm}
        value={form.email}
        name="password"
        type="password"
        placeholder="Password"
        className="form-input mb-2"
      />
      <input
        style={{ border: formError && "1px solid rgba(255, 0, 0, 0.3)" }}
        onChange={handleForm}
        value={form.password2}
        name="password2"
        type="password"
        placeholder="Confirm Password"
        className="form-input mb-4"
      />
      <button
        disabled={loading}
        onClick={handlePasswordReset}
        style={{ width: "100%", cursor: loading && "no-drop" }}
        className="btn bg-primary mt-2 mb-4"
      >
        Change Password
      </button>
    </>
  );
};

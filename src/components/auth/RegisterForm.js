import React, { useContext, useState } from "react";
import validator from "validator";
import { AuthContext } from "../../context/auth/AuthContext";
import { useForm } from "../../hooks/useForm";

export const RegisterForm = () => {
  const { setUser } = useContext(AuthContext);
  const [formError, setFormError] = useState({ state: false, msg: "" });
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { form, handleForm } = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = form;

  const isValid = () => {
    if (validator.isEmpty(name)) {
      setFormError({ state: true, msg: "Name can't be empty." });
      setNameError(true);
      return false;
    }
    setNameError(false);
    if (!validator.isEmail(email)) {
      setFormError({ state: true, msg: "Please provide a valid Email." });
      setEmailError(true);
      return false;
    }
    setEmailError(false);
    if (!validator.isStrongPassword(password) || password !== password2) {
      setFormError({
        state: true,
        msg: "Password must have atleast 6 characters, uppercase and lowercase letters and special character.",
      });
      setPasswordError(true);
      return false;
    }
    setPasswordError(false);
    return true;
  };

  const handleRegister = () => {
    if (isValid()) {
      setFormError(false);
      fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then(({ user, token }) => {
          if (user && token) {
            localStorage.setItem("token", JSON.stringify(token));
            setUser(user);
          }
        })
        .catch((err) => {
          console.log(err);
          setFormError(true);
        });
    }
  };
  return (
    <>
      {formError.state && (
        <div className="form-error">
          <p>{formError.msg}</p>
        </div>
      )}
      <input
        style={{ border: nameError && "1px solid rgba(255, 0, 0, 0.3)" }}
        onChange={handleForm}
        value={form.name}
        name="name"
        type="text"
        placeholder="Name"
        className="form-input mb-2"
      />
      <input
        style={{ border: emailError && "1px solid rgba(255, 0, 0, 0.3)" }}
        onChange={handleForm}
        value={form.email}
        name="email"
        type="email"
        placeholder="Email"
        className="form-input mb-2"
      />
      <input
        style={{ border: passwordError && "1px solid rgba(255, 0, 0, 0.3)" }}
        onChange={handleForm}
        value={form.password}
        name="password"
        type="password"
        placeholder="Password"
        className="form-input mb-2"
      />
      <input
        style={{ border: passwordError && "1px solid rgba(255, 0, 0, 0.3)" }}
        onChange={handleForm}
        value={form.password2}
        name="password2"
        type="password"
        placeholder="Confirm Password"
        className="form-input mb-4"
      />
      <button
        onClick={handleRegister}
        style={{ width: "100%" }}
        className="btn bg-primary mt-2 mb-4"
      >
        Register
      </button>
    </>
  );
};

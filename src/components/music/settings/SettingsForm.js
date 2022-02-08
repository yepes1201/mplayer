import React from "react";

export const SettingsForm = ({ handleForm, form }) => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="userName" className="form-label">
          Name
        </label>
        <input
          onChange={handleForm}
          value={form.userName}
          className="form-input"
          id="userName"
          type="text"
          name="userName"
          placeholder="User name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="userEmail" className="form-label">
          Email
        </label>
        <input
          onChange={handleForm}
          value={form.userEmail}
          className="form-input"
          id="userEmail"
          type="text"
          name="userEmail"
          placeholder="mail@mail.com"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="userPassword" className="form-label">
          Password
        </label>
        <input
          onChange={handleForm}
          value={form.userPassword}
          className="form-input"
          id="userPassword"
          type="password"
          name="userPassword"
          placeholder="Password"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="userImage" className="form-label">
          Profile Image
        </label>
        <input
          className="form-input input-file"
          id="userImage"
          type="file"
          name="userImage"
          placeholder="Koiwazurai..."
        />
      </div>
    </>
  );
};

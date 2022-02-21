import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { notificationTypes } from "../../types/notification";
import { NewPasswordForm } from "./NewPasswordForm";

export const NewPassword = () => {
  const [searchParams] = useSearchParams();
  const [modalError, setModalError] = useState({});
  const token = searchParams.get("token");
  const userId = searchParams.get("id");

  return (
    <div className="auth">
      {modalError.state && (
        <div className="notification">
          <div
            style={{
              backgroundColor:
                modalError.state && notificationTypes.error.color,
            }}
            className="notification-bar"
          ></div>
          <p>{modalError.msg}</p>
          {notificationTypes.error.icon}
        </div>
      )}
      <div>
        <h2 className="auth__title">Reset Password</h2>
        <div className="auth__container">
          <NewPasswordForm
            token={token}
            userId={userId}
            setModalError={setModalError}
          />
        </div>
      </div>
    </div>
  );
};

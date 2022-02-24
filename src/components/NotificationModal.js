import React, { useEffect, useRef } from "react";

export const NotificationModal = ({ ui, msg, color, icon }) => {
  const modalRef = useRef();

  const timeoutModal = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        modalRef.current.classList.add("animate__fadeOutUp");
      }, 5000);
      resolve(true);
    });
  };

  useEffect(() => {
    if (ui.active) {
      modalRef.current.style.display = "flex";
      timeoutModal().then(() => {
        modalRef.current.classList.remove("animate__fadeOutUp");
      });
    }
  }, [ui]);

  return (
    <div
      ref={modalRef}
      className="notification animate__animated animate__fadeInDown"
    >
      <div
        style={{ backgroundColor: color }}
        className="notification-bar"
      ></div>
      <p>{msg}</p>
      {icon}
    </div>
  );
};

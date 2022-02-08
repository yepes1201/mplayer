import React from "react";
import { useLocation } from "react-router-dom";
import { paths } from "../../../helpers/path";

export const Navbar = () => {
  const { pathname } = useLocation();
  const title = paths[pathname];
  return (
    <div className="navbar color-white-grey">
      <div className=" navbar__header container center flex-row">
        <h2>{title}</h2>
        <div className="navbar__menu-btn circle-btn bg-dark">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

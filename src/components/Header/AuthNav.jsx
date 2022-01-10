import React from "react";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" activeClassName="active">
        Register
      </NavLink>
      <NavLink to="/login" activeClassName="active" className="login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;

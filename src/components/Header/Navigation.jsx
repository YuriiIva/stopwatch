import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" activeClassName="active" exact className="home">
        Home
      </NavLink>
      <NavLink to="/contacts" activeClassName="active">
        PhoneBook
      </NavLink>
    </nav>
  );
};

export default Navigation;

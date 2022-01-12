import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/authSelectors";

const Navigation = () => {
  const isloginIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" activeClassName="active" exact className="home">
        Home
      </NavLink>
      {isloginIn && (
        <NavLink to="/contacts" activeClassName="active">
          PhoneBook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;

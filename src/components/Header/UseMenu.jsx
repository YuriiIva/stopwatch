import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperation } from "redux/auth";
import authSelectors from "redux/auth/authSelectors";

const UseMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div>
      <p>Welcom, {name}</p>
      <button type="button" onClick={() => dispatch(authOperation.logOut())}>
        LogOut
      </button>
    </div>
  );
};

export default UseMenu;

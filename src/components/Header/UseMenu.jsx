import { toast } from "react-toastify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperation } from "redux/auth";
import authSelectors from "redux/auth/authSelectors";

const UseMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    console.log(`isLoggedIn`, isLoggedIn);
    if (!isLoggedIn) return;
    toast.success("You did this");
  }, [isLoggedIn]);

  return (
    <div>
      <p>Welcome, {name} ✌🏻 </p>
      <button type="button" onClick={() => dispatch(authOperation.logOut())}>
        LogOut
      </button>
    </div>
  );
};

export default UseMenu;

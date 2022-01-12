import { useDispatch } from "react-redux";
// import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import Navigation from "components/Header/Navigation";
// import UseMenu from "components/Header/UseMenu";
// import LoaderB from "components/common/Loader/loader";

import { authOperation } from "redux/auth";

import Routes from "components/routes/Routes";

// import Register from "components/Register/Register";
// import Home from "components/Home/Home";
// import PhoneBook from "components/PhoneBook/PhoneBook";
// import AuthNav from "components/Header/AuthNav";

// import authSelectors from "../../redux/auth/authSelectors";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const { getContacts, deleteContacts } = contactsOperations;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperation.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes />
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
};

export default App;

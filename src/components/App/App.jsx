import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { authOperation } from "redux/auth";

import Routes from "components/routes/Routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

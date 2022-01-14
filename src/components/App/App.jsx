import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { authOperation } from "redux/auth";

import LoaderB from "components/common/Loader/loader";

import Routes from "components/routes/Routes";
import Income from "components/Income/Income";
import Costs from "components/Costs/Costs";
import HeaderCostsIncome from "components/HeaderCostsIncome/HeaderCostsIncome";

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

      <Suspense fallback={<LoaderB />}>
        <HeaderCostsIncome />
        <Switch>
          <Route exact path="/costs">
            <Costs />
          </Route>
          <Route exact path="/income">
            <Income />
          </Route>
        </Switch>
      </Suspense>

      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
};

export default App;

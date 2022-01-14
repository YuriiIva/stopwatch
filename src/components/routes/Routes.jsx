import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import RequireAuthRoute from "./RequireAuthRoute";
import RequireNotAuthRoute from "./RequireNotAuthRoute";

import Navigation from "components/Header/Navigation";
import UseMenu from "components/Header/UseMenu";
import LoaderB from "components/common/Loader/loader";
import Register from "components/Register/Register";
import Home from "components/Home/Home";
import PhoneBook from "components/PhoneBook/PhoneBook";
import AuthNav from "components/Header/AuthNav";
import Login from "components/Login/Login";
import NotFound from "components/common/NotFound/NotFound";

import authSelectors from "../../redux/auth/authSelectors";

const Routes = () => {
  const isLoadingUser = useSelector(authSelectors.isLoadingUser);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (isLoadingUser) {
    return <LoaderB />;
  }

  return (
    <div>
      <header className="App-header">
        <Navigation />

        {isLoggedIn ? <UseMenu /> : <AuthNav />}
      </header>

      <Switch>
        {/* pablic */}
        <Route exact path="/" render={() => <Home />} />

        {/* auth */}

        <Route
          path="/contacts"
          render={() => (
            <RequireAuthRoute redirectTo="/login">
              <PhoneBook />
            </RequireAuthRoute>
          )}
        />

        {/* No auth */}

        <Route
          path="/register"
          render={() => (
            <RequireNotAuthRoute redirectTo="/">
              <Register />
            </RequireNotAuthRoute>
          )}
        />

        <Route
          path="/login"
          render={() => (
            <RequireNotAuthRoute redirectTo="/">
              <Login />
            </RequireNotAuthRoute>
          )}
        />

        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  );
};

export default Routes;

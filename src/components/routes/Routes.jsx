import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

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
          render={() => (isLoggedIn ? <PhoneBook /> : <Redirect to="/login" />)}
        />

        {/* No auth */}

        <Route
          path="/register"
          render={() => (!isLoggedIn ? <Register /> : <Redirect to="/" />)}
        />

        <Route
          path="/login"
          render={() => (!isLoggedIn ? <Login /> : <Redirect to="/" />)}
        />

        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  );
};

export default Routes;

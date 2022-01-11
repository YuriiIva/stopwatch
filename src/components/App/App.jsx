// import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Navigation from "components/Header/Navigation";
import UseMenu from "components/Header/UseMenu";

import Login from "components/Login/Login";
import Register from "components/Register/Register";
import Home from "components/Home/Home";
import PhoneBook from "components/PhoneBook/PhoneBook";
import AuthNav from "components/Header/AuthNav";
import { useSelector, useDispatch } from "react-redux";
import authSelectors from "../../redux/auth/authSelectors";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const { getContacts, deleteContacts } = contactsOperations;

const App = () => {
  const isloginIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(`isloginIn`, isloginIn);

  return (
    <>
      <header className="App-header">
        <Navigation />
        {isloginIn ? <UseMenu /> : <AuthNav />}
      </header>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contacts">
          <PhoneBook />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
};

export default App;

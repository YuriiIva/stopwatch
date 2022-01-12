import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authOperation } from "redux/auth";
import s from "./Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector((state) => state.auth.error);

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        return setEmail(e.target.value);
      case "password":
        return setPassword(e.target.value);
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperation.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  const isBtnDisabled = !email || !password;

  return (
    <div>
      <form action="" className={s.form} onSubmit={handleSubmit}>
        <label htmlFor="">
          email
          <input
            type="text"
            name="email"
            value={email}
            required
            placeholder="email"
            onChange={handleChange}
            className={s.input}
          />
        </label>
        <label htmlFor="">
          password
          <input
            type="text"
            name="password"
            value={password}
            required
            placeholder="password "
            onChange={handleChange}
            className={s.input}
          />
        </label>
        <button type="submit" className={s.btn} disabled={isBtnDisabled}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

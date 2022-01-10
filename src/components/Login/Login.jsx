import React from "react";
import { useState } from "react";
import s from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  };

  return (
    <div>
      <form action="" className={s.form}>
        <label htmlFor="">
          email
          <input
            type="text"
            name="email"
            value={email}
            required
            placeholder="email"
            required
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
            required
            onChange={handleChange}
            className={s.input}
          />
        </label>
        <button type="submit" onSubmit={handleSubmit} className={s.btn}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

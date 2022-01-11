import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { authOperation } from "redux/auth";

import s from "./Register.module.css";

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperation.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form action="" className={s.form} onSubmit={handleSubmit}>
        <label htmlFor="">
          name
          <input
            type="text"
            name="name"
            value={name}
            required
            placeholder="name"
            onChange={handleChange}
            className={s.input}
          />
        </label>
        <label htmlFor="">
          email
          <input
            type="email"
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
            type="password"
            name="password"
            value={password}
            required
            placeholder="password "
            required
            onChange={handleChange}
            className={s.input}
          />
        </label>
        <button type="submit" className={s.btn}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

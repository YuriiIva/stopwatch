import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
// axios.defaults.baseURL = process.env.REACT_APP_API_URL;

/* register */

const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);

    return data;
  } catch (error) {}
});

/* login */

const logIn = createAsyncThunk("auth/logIn", async (credentials, thunkApi) => {
  try {
    const { data } = await axios.post("/users/login", credentials);

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue("Something wrong (");
  }
});

const logOut = createAsyncThunk("auth/logOut", async () => {
  try {
    await axios.post("/users/logout");
  } catch (error) {}
});

export { register, logIn, logOut };

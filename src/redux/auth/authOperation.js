import axios from "axios";
import { toast } from "react-toastify";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
// axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

/* register */

const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something wrong (");
    }
  }
);

/* login */

const logIn = createAsyncThunk("auth/logIn", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Something wrong (");
  }
});

const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue("Something wrong :(");
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (!persistedToken) {
      toast("You do not authorization");
      return thunkAPI.rejectWithValue("Something wrong :(");
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");

      return data;
    } catch (error) {
      token.unset();
    }
  }
);

export { register, logIn, logOut, fetchCurrentUser };

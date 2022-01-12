import { createSlice } from "@reduxjs/toolkit";
import { logIn, register, logOut, fetchCurrentUser } from "./authOperation";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
  isLoadingUser: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      ///////register/////////

      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;

        state.isLoading = false;
      })

      /////login//////

      .addCase(logIn.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;

        state.isLoading = false;
      })

      //////logout/////

      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoggedIn = false;
        state.isLoading = false;
      })

      /////refresh///////

      .addCase(fetchCurrentUser.pending, (state) => {
        state.isLoggedIn = false;
        state.error = null;
        state.isLoadingUser = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = { ...action.payload };
        state.isLoggedIn = true;

        state.isLoadingUser = false;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoadingUser = false;
        state.token = null;
      });
  },
});

export default authSlice.reducer;

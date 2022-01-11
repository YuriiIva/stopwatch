import { createSlice } from "@reduxjs/toolkit";
import { logIn, register, logOut } from "./authOperation";
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
  isLoadingContact: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers:
    // {
    //   [register.fulfilled](state, action) {
    //     state.user = action.payload.user;
    //     state.token = action.payload.token;
    //     state.isLoggedIn = true;
    //   },
    // },
    (builder) => {
      builder
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

          state.isLoading = false;
        });
    },
});

export default authSlice.reducer;

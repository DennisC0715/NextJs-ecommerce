import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginHandler: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
      state.isLoggedIn = true;
    },
    logoutHandler: (state) => {
      localStorage.clear();
      state.token = null;
      state.isLoggedIn = false;
    },
    setIsLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { loginHandler, logoutHandler, setIsLoggedIn } = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

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
      localStorage.removeItem("token");
      state.isLoggedIn = false;
    },
    setIsLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    getTokenFromLocal: (state) => {
      localStorage.getItem("token");
    },
  },
});

export const { loginHandler, logoutHandler, setIsLoggedIn, getTokenFromLocal } =
  authSlice.actions;
export default authSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishListSlice";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import modalReducer from "./slices/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
    user: userReducer,
    modal: modalReducer,
  },
});

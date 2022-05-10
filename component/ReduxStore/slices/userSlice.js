import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  city: "",
  provice: "",
  postalcode: "",
  cart: [],
  wishlist: [],
  orderHistory: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    clearUserInfo: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.address = "";
      state.city = "";
      state.provice = "";
      state.postalcode = "";
      state.cart = [];
      state.wishlist = [];
      state.orderHistory = [];
    },
    addUserInfo: (state, action) => {
      const userInfo = action.payload;
      state.firstName = userInfo.firstName;
      state.lastName = userInfo.lastName;
      state.email = userInfo.email;
      state.address = userInfo.address;
      state.city = userInfo.city;
      state.provice = userInfo.provice;
      state.postalcode = userInfo.postalcode;
      state.cart = userInfo.cart;
      state.wishlist = userInfo.wishlistt;
      state.orderHistory = userInfo.orderHistory;
      // state.initialUserState = action.payload;
    },
    mergeUserCart: (state, action) => {
      const cart = action.payload.mergedCart;
      const wishlist = action.payload.mergedWishList;
      state.cart = cart;
      state.wishlist = wishlist;
    },
  },
});

export const { clearUserInfo, addUserInfo, mergeUserCart } = userSlice.actions;
export default userSlice.reducer;

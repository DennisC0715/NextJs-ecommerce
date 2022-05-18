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
      console.log(userInfo.cart);
    },
    mergeUserCart: (state, action) => {
      const webCart = action.payload;
      const userCart = state.cart;
      const mergeCart = [...new Set([...webCart, ...userCart])];
      state.cart = mergeCart;
    },
    mergeUserWishlist: (state, action) => {
      const webWishlist = action.payload;
      const userWishlist = state.cart;
      const mergeWishlist = [...new Set([...webWishlist, ...userWishlist])];
      state.wishlist = mergeWishlist;
    },
  },
});

export const { clearUserInfo, addUserInfo, mergeUserCart, mergeUserWishlist } =
  userSlice.actions;
export default userSlice.reducer;

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
      // const newCart = [...new Set([...webCart, ...userCart])];
      // state.cart = newCart;

      // let mergedCart = [];
      // for (let i = 0; i < newCart.length; i++) {
      //   const newCartItemId = newCart[i].id;
      //   mergedCart = newCart.filter((item) => item.id === newCartItemId);
      // }
      // const quantity = mergedCart.map((item) => item.quantity);
      // let totalQuantity = 0;
      // for (let i = 0; i < state.cartItems.length; i++) {
      //   totalQuantity += quantity[i];
      // }

      for (let i = 0; i < userCart.length; i++) {
        const newItem = userCart[i];
        const existingItemIndex = webCart.findIndex(
          (item) => item.id === newItem.id
        );
        const existingItem = webCart[existingItemIndex];
        let updatedItems;
        if (!existingItem) {
          updatedItems = webCart.concat(userCart[i]);
          webCart = updatedItems;
        } else {
          const number = existingItem.quantity;
          const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity + number,
          };
          updatedItems = [...webCart];
          updatedItems[existingItemIndex] = updatedItem;
        }
      }
      state.cart = webCart;
      console.log(state.cart);
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

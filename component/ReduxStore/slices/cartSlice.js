import { createSlice } from "@reduxjs/toolkit";

const cartInitalState = {
  cartItems: [],
  cartItemNumber: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitalState,
  reducers: {
    cartAddItem: (state, action) => {
      state.totalPrice =
        state.totalPrice + action.payload.price * action.payload.quantity;

      const newItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === newItem.id
      );
      const existingItem = state.cartItems[existingItemIndex];
      state.cartItemNumber++;
      let updatedItems;
      if (!existingItem) {
        updatedItems = state.cartItems.concat(action.payload);
        state.cartItems = updatedItems;
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity++,
        };
        updatedItems = [...state.cartItems];
        updatedItems[existingItemIndex] = updatedItem;
      }
      console.log(state.cartItems);
      console.log(state.cartItemNumber);
      console.log(state.totalPrice);
    },
    cartRemoveItemQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      state.cartItemNumber--;
      state.totalPrice = state.totalPrice - item.price;
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
    },
    cartRemoveOneItem: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      state.cartItemNumber = state.cartItemNumber - item.quantity;
      state.totalPrice = state.totalPrice - item.quantity * item.price;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.cartItemNumber = 0;
    },
    mergeCarts: (state, action) => {
      state.cartItems = action.payload;
      state.cartItemNumber = state.cartItems.length;
      const prices = state.cartItems.map((item) => item.price);
      let allPrice = 0;
      for (let i = 0; i < state.cartItems.length; i++) {
        allPrice += prices[i];
      }
      state.totalPrice = allPrice;
    },
  },
});

export const {
  cartAddItem,
  cartRemoveItemQuantity,
  cartRemoveOneItem,
  clearCart,
  mergeCarts,
} = cartSlice.actions;
export default cartSlice.reducer;

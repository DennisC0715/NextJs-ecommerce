import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  showLogoutModal: false,
  showCartModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    popLogoutModal: (state) => {
      state.showLogoutModal = true;
    },
    hideLogoutModal: (state) => {
      state.showLogoutModal = false;
    },
    popCartModal: (state) => {
      state.showCartModal = true;
    },
    hideCartModal: (state) => {
      state.showCartModal = false;
    },
  },
});

export const { popLogoutModal, hideLogoutModal, popCartModal, hideCartModal } =
  modalSlice.actions;
export default modalSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  showModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    popLogoutModal: (state) => {
      state.showModal = true;
    },
    hideLogoutModal: (state) => {
      state.showModal = false;
    },
  },
});

export const { popLogoutModal, hideLogoutModal } = modalSlice.actions;
export default modalSlice.reducer;

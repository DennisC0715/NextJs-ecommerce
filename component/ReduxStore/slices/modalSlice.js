import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  showModal: false,
  isModelShowed: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    popLogoutModal: (state) => {
      state.showModal = true;
      state.isModelShowed = true;
    },
    hideLogoutModal: (state) => {
      state.showModal = false;
      state.isModelShowed = false;
    },
  },
});

export const { popLogoutModal, hideLogoutModal } = modalSlice.actions;
export default modalSlice.reducer;

/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  isModalAddToCart: false,
  isPopupOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,

  reducers: {
    setModal: (state, { payload }) => {
      state.isOpenModal = payload;
    },

    isModalAddToCartAction: (state) => {
      state.isModalAddToCart = !state.isModalAddToCart;
    },

    isPopupOpenAction: (state) => {
      state.isPopupOpen = !state.isPopupOpen;
    },
  },
});

export const { isModalAddToCartAction, setModal, isPopupOpenAction } =
  modalSlice.actions;

export default modalSlice.reducer;

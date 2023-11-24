/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  isModalAddToCart: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,

  reducers: {
    setModal: (state, { payload }) => {
      state.isOpenModal = payload;
    },

    isModalAddToCartAction: (state) => {
        state.isModalAddToCart = !state.isModalAddToCart
    },

  },
});

export const {  
  isModalAddToCart: isModalAddToCartAction,
  setModal } = modalSlice.actions;

export default modalSlice.reducer;

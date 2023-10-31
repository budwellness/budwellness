/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    setCart: (state, { payload }) => {
      state.cart = payload;
    },
    addItemToCart: (state, { payload }) => {
      state.cart.push(payload);
    },
    removeItemFromCart: (state, { payload }) => {
      const index = state.cart.findIndex((item) => item._id === payload._id);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
  },
});

export const {
  setCart: setCartAction,
  addItemToCart: addItemToCartAction,
  removeItemFromCart: removeItemFromCartAction,
} = cartSlice.actions;
export default cartSlice.reducer;

/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  localCart: [],
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    setCart: (state, { payload }) => {
      state.cart = payload;
    },
    addItemToCart: (state, { payload }) => {
      state.cart = payload;
    },
    removeItemFromCart: (state, { payload }) => {
      const index = state.cart.findIndex(
        (item) => item.product._id === payload
      );
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    increaseCartItemQuantity: (state, { payload }) => {
      const index = state.cart.findIndex(
        (item) => item.product._id === payload
      );
      if (index !== -1) {
        state.cart[index].cartQuantity = state.cart[index].cartQuantity + 1;
      }
    },
    decreaseCartItemQuantity: (state, { payload }) => {
      const index = state.cart.findIndex(
        (item) => item.product._id === payload
      );
      if (index !== -1 && state.cart[index].cartQuantity >= 1) {
        state.cart[index].cartQuantity = state.cart[index].cartQuantity - 1;
      }
    },
  },
});

export const {
  setCart: setCartAction,
  addItemToCart: addItemToCartAction,
  removeItemFromCart: removeItemFromCartAction,
  increaseCartItemQuantity: increaseCartItemQuantityAction,
  decreaseCartItemQuantity: decreaseCartItemQuantityAction,
} = cartSlice.actions;
export default cartSlice.reducer;

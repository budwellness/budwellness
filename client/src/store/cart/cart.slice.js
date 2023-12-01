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
    setLocalCart: (state, { payload }) => {
      state.localCart = payload;
    },
    setCart: (state, { payload }) => {
      state.cart = payload;
    },
    addItemToLocalCart: (state, { payload }) => {
      state.localCart.push(payload);
    },
    addItemToCart: (state, { payload }) => {
      state.cart = payload;
    },
    removeItemFromLocalCart: (state, { payload }) => {
      const index = state.localCart.findIndex(
        (item) => item.product.itemNo === payload
      );
      if (index !== -1) {
        state.localCart.splice(index, 1);
      }
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
  setLocalCart: setLocalCartAction,
  addItemToCart: addItemToCartAction,
  addItemToLocalCart: addItemToLocalCartAction,
  removeItemFromCart: removeItemFromCartAction,
  removeItemFromLocalCart: removeItemFromLocalCartAction,
  increaseCartItemQuantity: increaseCartItemQuantityAction,
  decreaseCartItemQuantity: decreaseCartItemQuantityAction,
} = cartSlice.actions;
export default cartSlice.reducer;

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
    clearLocalCart: (state) => {
      state.localCart = [];
    },
    increaseCartItemQuantity: (state, { payload }) => {
      const index = state.cart.findIndex(
        (item) => item.product._id === payload
      );
      if (index !== -1) {
        state.cart[index].cartQuantity = state.cart[index].cartQuantity + 1;
      }
    },
    increaseLocalCartItemQuantity: (state, { payload }) => {
      const index = state.localCart.findIndex(
        (item) => item.product._id === payload
      );
      if (index !== -1) {
        state.localCart[index].cartQuantity =
          state.localCart[index].cartQuantity + 1;
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
    decreaseLocalCartItemQuantity: (state, { payload }) => {
      const index = state.localCart.findIndex(
        (item) => item.product._id === payload
      );
      if (index !== -1 && state.localCart[index].cartQuantity >= 1) {
        state.localCart[index].cartQuantity =
          state.localCart[index].cartQuantity - 1;
      }
    },
    mergeLocalWithServerCart: (state, { payload }) => {
      state.cart = [...state.cart, ...payload];
    },
  },
});

export const {
  setCart: setCartAction,
  setLocalCart: setLocalCartAction,
  addItemToCart: addItemToCartAction,
  clearLocalCart: clearLocalCartAction,
  addItemToLocalCart: addItemToLocalCartAction,
  removeItemFromCart: removeItemFromCartAction,
  removeItemFromLocalCart: removeItemFromLocalCartAction,
  increaseCartItemQuantity: increaseCartItemQuantityAction,
  increaseLocalCartItemQuantity: increaseLocalCartItemQuantityAction,
  decreaseCartItemQuantity: decreaseCartItemQuantityAction,
  decreaseLocalCartItemQuantity: decreaseLocalCartItemQuantityAction,
  mergeLocalWithServerCart: mergeLocalWithServerCartAction,
} = cartSlice.actions;
export default cartSlice.reducer;

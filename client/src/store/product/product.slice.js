/* eslint-disable */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedProduct: null,
  // isUserLogin,
  // token,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { selectProduct } = productsSlice.actions;
export default productsSlice.reducer;

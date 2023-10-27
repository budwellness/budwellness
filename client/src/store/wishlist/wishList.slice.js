/* eslint-disable */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishList: [],
};

const wishListSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setWishList: (state, { payload }) => {
      state.wishList = [...payload];
    },
    addItemToWishList: (state) => state,
    removeItemFromWishList: (state) => state,
  },
});

export const {} = wishListSlice.actions;
export default wishListSlice.reducer;

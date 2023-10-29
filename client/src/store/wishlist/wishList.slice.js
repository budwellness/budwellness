/* eslint-disable */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishList: [],
};

const wishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    setWishList: (state, { payload }) => {
      console.log('inc PAYLOAD', payload);
      state.wishList = [...payload];
      console.log('initState inside Slice', initialState.wishList);
    },
    addItemToWishList: (state) => state,
    removeItemFromWishList: (state) => state,
  },
});

export const { setWishList: setWishlistAction } = wishListSlice.actions;
export default wishListSlice.reducer;

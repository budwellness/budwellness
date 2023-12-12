/* eslint no-param-reassign:
["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishList: [],
};

const wishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    // toggleWishlist: (state, { payload: product }) => {
    //   const isExist = state.wishList.some((p) => p.id === product.id);

    //   if (isExist) {
    //     const index = state.wishList.findIndex(
    //       (item) => item.id === product.id
    //     );
    //     if (index !== -1) {
    //       state.wishList.splice(index, 1);
    //     }
    //   } else {
    //     state.wishList.push(product);
    //   }
    // },
    setWishList: (state, { payload }) => {
      // нужна, логика что бы не добавлять дубликаты
      state.wishList = payload;
    },
    // updateLocalWishList: (state, { payload }) => {
    //   state.wishList = [...payload];
    // },
    addItemToWishList: (state, { payload }) => {
      state.wishList.push(payload);
    },
    removeItemFromWishList: (state, { payload }) => {
      const index = state.wishList.findIndex(
        (item) => item._id === payload._id,
      );
      if (index !== -1) {
        state.wishList.splice(index, 1);
      }
    },
  },
});

export const {
  setWishList: setWishlistAction,
  toggleWishlist: toggleWishlistAction,
  addItemToWishList: addItemToWishListAction,
  removeItemFromWishList: removeItemFromWishListAction,
} = wishListSlice.actions;
export default wishListSlice.reducer;

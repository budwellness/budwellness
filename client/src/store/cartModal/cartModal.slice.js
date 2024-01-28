/* eslint no-param-reassign:
["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCartModal: false,
};

const cartModalSlice = createSlice({
  name: 'cartModal',
  initialState,

  reducers: {
    setCartModal: (state, { payload }) => {
      state.isCartModal = payload;
    },
  },
});

export const { setCartModal } = cartModalSlice.actions;

export default cartModalSlice.reducer;

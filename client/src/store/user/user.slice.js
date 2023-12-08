/* eslint-disable */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUserLogin: null,
  token: null,
  detailInfo: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.token = payload;
      state.isUserLogin = true;
    },
    logoutUser: (state) => {
      state.token = null;
      state.isUserLogin = false;
    },
    setCustomerData: (state, { payload }) => {
      state.detailInfo = payload;
    },
  },
});

export const {
  loginUser: userLoginUserAction,
  logoutUser: userLogoutUserAction,
  setCustomerData: setCustomerDataAction,
} = userSlice.actions;
export default userSlice.reducer;

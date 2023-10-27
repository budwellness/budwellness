/* eslint-disable */

import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('token');
const isUserLogin = !!token;

const initialState = {
  isUserLogin,
  token,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.token = payload.token;
      state.isUserLogin = true;
    },
    logoutUser: (state) => {
      state.token = null;
      state.isUserLogin = false;
    },
  },
});

export const {
  loginUser: userLoginUserAction,
  logoutUser: userLogutUserAction,
} = userSlice.actions;
export default userSlice.reducer;

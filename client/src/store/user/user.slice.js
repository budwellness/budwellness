/* eslint-disable */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUserLogin: null,
  token: null,
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

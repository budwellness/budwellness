/* eslint-disable */

import { createSlice } from '@reduxjs/toolkit';

const log = console.log;
const token = localStorage.getItem('token');
log('Захожу проверяю есть ли токен...');
const isUserLogin = !!token;
if (token) {
  log('Токен есть, кладу в стейт...');
} else {
  log('Токена нету, нужно залогиниться... ', 'isUserLogin: ', isUserLogin);
  log('isUserLogin: ', isUserLogin);
}

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

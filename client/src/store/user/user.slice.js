/* eslint-disable */

import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('token');

const isUserLogin = !!token;

const initialState = isUserLogin;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleLogin: (state) => {
      state = !state;
    },
  },
});

export const {} = cartSlice;

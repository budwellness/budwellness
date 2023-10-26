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
    setToken: (state, { payload: { token } }) => {
      state.token = token;
    },
    toggleUserLogin: (state) => {},
  },
});

export const {
  setToken: userSetTokenAction,
  toggleUserLogin: userToggleUserLogin,
} = userSlice.actions;
export default userSlice.reducer;

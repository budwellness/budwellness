/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,

  reducers: {
    setModal: (state, { payload }) => {
      state.isOpenModal = payload;
    },
  },
});

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;

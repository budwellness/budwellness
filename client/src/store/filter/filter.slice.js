/* eslint-disable */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterQueryString: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilterQuertyString: (state, { payload }) => {
      state.filterQueryString = payload;
    },
  },
});

export const { updateFilterQuertyString: updateFilterQuertyStringAction } =
  filterSlice.actions;
export default filterSlice.reducer;

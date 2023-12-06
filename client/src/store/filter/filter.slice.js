/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  queryString: {
    sorting: 'Default sorting',
    filter: '',
  },
};

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,

  reducers: {
    setSortingParam: (state, { payload }) => {
      state.queryString.sorting = payload;
    },
    setSearchParam: (state, { payload }) => {
      state.queryString.filter = payload;
    },
  },
});

export const {
  setSortingParam: setSortingParamAction,
  setSearchParam: setSearchParamAction,
} = filterSlice.actions;

export default filterSlice.reducer;

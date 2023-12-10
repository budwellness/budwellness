/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const buildQueryString = (queryStringObj) => {
  // Логика построения строки запроса из объекта queryStringObj
  const filterStringArr = [];
  for (const [key, value] of Object.entries(queryStringObj)) {
    if (value === '') {
      continue;
    }
    filterStringArr.push(`${value}`);
  }
  return filterStringArr.join('&');
  // Например, используя Object.entries() или другие методы
  // и объединяя их в строку запроса
};

const initialState = {
  queryChunks: {
    filter: '',
    perPage: 'perPage=3',
    startPage: 'startPage=1',
    sorting: '',
  },
  pagination: {
    totalProducts: null,
    productsPerPage: 3,
    startPage: 1,
  },
  queryString: 'perPage=3&startPage=1',
  filterTags: {
    categories: '',
    plantType: '',
    thc: '',
    cbd: '',
    minPrice: '',
    maxPrice: '',
  },
};

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,

  reducers: {
    setSortingParam: (state, { payload }) => {
      state.queryChunks.sorting = payload;
      state.queryString = buildQueryString(state.queryChunks);
    },
    setSearchParam: (state, { payload }) => {
      state.queryChunks.filter = payload;
      state.queryString = buildQueryString(state.queryChunks);
    },
    setStartPage: (state, { payload }) => {
      state.queryChunks.startPage = `startPage=${payload}`;
      state.queryString = buildQueryString(state.queryChunks);
    },
    setStartPage: (state, { payload }) => {
      state.pagination.startPage = payload;
      state.queryChunks.startPage = `startPage=${payload}`;
      state.queryString = buildQueryString(state.queryChunks);
    },
    resetStartPage: (state) => {
      state.queryChunks.startPage = 'startPage=1';
      state.queryString = buildQueryString(state.queryChunks);
    },
    setTotalProducts: (state, { payload }) => {
      state.pagination.totalProducts = payload;
    },
    addFilterTag: (state, { payload }) => {
      /* ------------------------------------- */
      // filterTags: {
      //   categories: '',
      //   plantType: '',
      //   thc: '',
      //   cbd: '',
      //   minPrice: '',
      //   maxPrice: '',
      // }
      /* ------------------------------------- */
      // приходит пэйлоад типа { [key]: value }
      /* ------------------------------------- */
      const key = Object.keys(payload)[0]; // Получаем ключ из payload
      const value = payload[key]; // Получаем значение из payload

      state.filterTags = {
        ...state.filterTags,
        key: value, // Используем квадратные скобки для динамического ключа
      };

      // console.log('state', { ...state.filterTags });
      // console.log('payload', { ...payload });
      // state.filterTags = { ...state.filterTags, ...payload };
      // const isExist = state.filterTags.some((p) => p === payload);
      // if (!isExist) {
      //   state.filterTags.push(payload);
      // }
    },
  },
});

export const {
  setSortingParam: setSortingParamAction,
  setSearchParam: setSearchParamAction,
  setStartPage: setStartPageAction,
  setTotalProducts: setTotalProductsAction,
  addFilterTag: addFilterTagAction,
} = filterSlice.actions;

export default filterSlice.reducer;

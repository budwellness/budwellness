import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { localJsonApi } from './serverResponse/fetchLocalJson';
import { danitApiProducts } from './serverResponse/danitApi.products';

const rootReducer = combineReducers({
  [localJsonApi.reducerPath]: localJsonApi.reducer,
  [danitApiProducts.reducerPath]: danitApiProducts.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(danitApiProducts.middleware)
    .concat(localJsonApi.middleware),
});

export default store;

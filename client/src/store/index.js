import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { localJsonApi } from './serverResponse/fetchLocalJson';

const rootReducer = combineReducers({
  [localJsonApi.reducerPath]: localJsonApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localJsonApi.middleware),
});

export default store;

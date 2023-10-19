import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { localJsonApi } from './serverResponse/fetchLocalJson'



const rootReducer = combineReducers({
  [localJsonApi.reducerPath]: localJsonApi.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localJsonApi.middleware)
})

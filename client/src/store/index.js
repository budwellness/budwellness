import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { localJsonApi } from './serverResponse/fetchLocalJson';
import { danitApiProducts } from './serverResponse/danitApi.products';
import { danitApiAuth } from './serverResponse/danitApi.auth';
import { danitApiWishlist } from './serverResponse/danitApi.wishlist';
import userReducer from './user/user.slice';
import wishlistReducer from './wishlist/wishList.slice';

const rootReducer = combineReducers({
  user: userReducer,
  wishlist: wishlistReducer,
  [danitApiAuth.reducerPath]: danitApiAuth.reducer,
  [danitApiWishlist.reducerPath]: danitApiWishlist.reducer,
  [localJsonApi.reducerPath]: localJsonApi.reducer,
  [danitApiProducts.reducerPath]: danitApiProducts.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(danitApiProducts.middleware)
    .concat(danitApiAuth.middleware)
    .concat(danitApiWishlist.middleware)
    .concat(localJsonApi.middleware),
});

export default store;

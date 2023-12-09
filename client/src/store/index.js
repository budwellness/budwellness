import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { localJsonApi } from './serverResponse/fetchLocalJson';
import { danitApiProducts } from './serverResponse/danitApi.products';
import { danitApiAuth } from './serverResponse/danitApi.auth';
import { danitApiWishlist } from './serverResponse/danitApi.wishlist';
import { danitApiCart } from './serverResponse/danitApi.cart';
import userReducer from './user/user.slice';
import wishlistReducer from './wishlist/wishList.slice';
import cartReducer from './cart/cart.slice';
import modalReducer from './modal/modal.slice';
import cartModalSlice from './cartModal/cartModal.slice';
import productsReducer from './product/product.slice';
import filterReducer from './filter/filter.slice';

const rootReducer = combineReducers({
  user: userReducer,
  wishlist: wishlistReducer,
  cart: cartReducer,
  modal: modalReducer,
  cartModal: cartModalSlice,
  products: productsReducer,
  filter: filterReducer,
  [danitApiCart.reducerPath]: danitApiCart.reducer,
  [danitApiAuth.reducerPath]: danitApiAuth.reducer,
  [danitApiWishlist.reducerPath]: danitApiWishlist.reducer,
  [localJsonApi.reducerPath]: localJsonApi.reducer,
  [danitApiProducts.reducerPath]: danitApiProducts.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(danitApiCart.middleware)
    .concat(danitApiProducts.middleware)
    .concat(danitApiAuth.middleware)
    .concat(danitApiWishlist.middleware)
    .concat(localJsonApi.middleware),
});

export default store;

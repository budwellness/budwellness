import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { localJsonApi } from './serverResponse/fetchLocalJson';
import { danitApiProducts } from './serverResponse/danitApi.products';
import { danitApiAuth } from './serverResponse/danitApi.auth';
import { danitApiWishlist } from './serverResponse/danitApi.wishlist';
import { danitApiCart } from './serverResponse/danitApi.cart';
import { danitApiCustomer } from './serverResponse/danitApi.customer';
import { danitApiOrders } from './serverResponse/danitApi.orders';
import { danitApiGlobalConfig } from './serverResponse/danitApi.globalConfig';
import { danitApiComments } from './serverResponse/danitApi.comments';
import userReducer from './user/user.slice';
import wishlistReducer from './wishlist/wishList.slice';
import cartReducer from './cart/cart.slice';
import modalReducer from './modal/modal.slice';
import cartModalReducer from './cartModal/cartModal.slice';
import productsReducer from './product/product.slice';
import filterReducer from './filter/filter.slice';
import commentsReducer from './comments/comments.slice';

const rootReducer = combineReducers({
  user: userReducer,
  wishlist: wishlistReducer,
  cart: cartReducer,
  modal: modalReducer,
  cartModal: cartModalReducer,
  products: productsReducer,
  filter: filterReducer,
  comments: commentsReducer,
  [danitApiCart.reducerPath]: danitApiCart.reducer,
  [danitApiAuth.reducerPath]: danitApiAuth.reducer,
  [danitApiWishlist.reducerPath]: danitApiWishlist.reducer,
  [localJsonApi.reducerPath]: localJsonApi.reducer,
  [danitApiProducts.reducerPath]: danitApiProducts.reducer,
  [danitApiCustomer.reducerPath]: danitApiCustomer.reducer,
  [danitApiOrders.reducerPath]: danitApiOrders.reducer,
  [danitApiGlobalConfig.reducerPath]: danitApiGlobalConfig.reducer,
  [danitApiComments.reducerPath]: danitApiComments.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(danitApiCart.middleware)
    .concat(danitApiProducts.middleware)
    .concat(danitApiAuth.middleware)
    .concat(danitApiWishlist.middleware)
    .concat(danitApiCustomer.middleware)
    .concat(danitApiOrders.middleware)
    .concat(danitApiGlobalConfig.middleware)
    .concat(danitApiComments.middleware)
    .concat(localJsonApi.middleware),
});

export default store;

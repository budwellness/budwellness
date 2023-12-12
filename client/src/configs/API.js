// BASE URL:
export const API_URL = 'http://localhost:4000/api';

// LOGIN API's:
export const API_LOGIN = '/customers/login';
export const API_REGISTRATION_USER = '/customers';
export const API_EDIT_USER = '/customers';

// PRODUCT API's:
export const API_ADD_PRODUCT = '/products';
export const API_GET_ALL_PRODUCTS = '/products';
export const API_GET_ONE_PRODUCT = '/products';
export const API_GET_FILTERED_PRODUCTS = '/products/filter/?';
export const API_SEARCH_PRODUCTS = '/products/search';

// SLIDE API's:
export const API_GET_SLIDES = `${API_URL}/slides`;

// WISHLIST API's:
export const API_GET_WISHLIST = '/wishlist';
export const API_CREATE_WISHLIST = '/wishlist';
export const API_ADD_TO_WISHLIST = '/wishlist/';
export const API_REMOVE_FROM_WISHLIST = '/wishlist/';

// CART API's:
export const API_GET_CART = '/cart';
export const API_ADD_TO_CART = '/cart/';
export const API_REMOVE_FROM_CART = '/cart/';
export const API_DEACREASE_PRODUCT_QUANTITY = '/cart/product/';
export const API_UPDATE_CART = '/cart';

// ORDERS API's:
export const API_CREATE_ORDER = '/orders';
export const API_GET_ORDERS = '/orders';

// CUSTOMER API's:
export const API_GET_CUSTOMER = '/customers/customer';

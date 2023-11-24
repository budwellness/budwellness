/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

// COMPONENT IMPORTS:
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ShopPage/ProductsPage';
import WishlistPage from './pages/WishlistPage/WishlistPage';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import CartPage from './pages/CartPage/CartPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import TestForBackPage from './pages/TestForBackPage/TestForBackPage';
import CartModal from './components/CartModal/CartModal';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// USER IMPORTS:
import { useLoginUserMutation } from './store/serverResponse/danitApi.auth';

import {
  userLoginUserAction,
  userLogutUserAction,
} from './store/user/user.slice';

// WISHLIST IMPORTS:
import { setWishlistAction } from './store/wishlist/wishList.slice';

import { useLazyGetWishlistQuery } from './store/serverResponse/danitApi.wishlist';

// CART IMPORTS:
import { setCartAction } from './store/cart/cart.slice';
import { useLazyGetCartQuery } from './store/serverResponse/danitApi.cart';

// import { useGetAllProductsQuery } from './store/serverResponse/fetchLocalJson';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

import { useGetAllProductsQuery } from './store/serverResponse/danitApi.products';
import ContactPage from './pages/ContactPage/ContactPage';
import isTokenExpired from './helpers/isTokenExpired';
import { loginHandler } from './pages/TestForBackPage/vanilaJsHelpers';
import Modal from "./components/Modal/Modal.jsx";
import LoginForm from "./components/LoginForm/LoginForm.jsx";
import { setModal } from "./store/modal/modal.slice.js";
import Registration from "./pages/RegistrationPage/Registration.jsx";


const { log } = console;

function App() {
  const { data: products, error } = useGetAllProductsQuery();

  /* --------------------------- REDUX STATE: --------------------------- */
  const { isUserLogin } = useSelector((state) => state.user);
  const { isOpenModal } = useSelector((state) => state.modal);

  /* --------------------------- INIT HOOKS: --------------------------- */

  const dispatch = useDispatch();

  /* --------------------------- RTK QUERY CUSTOM HOOKS: --------------------------- */

  // WISHLIST API:
  const [
    getWishlist,
    { data: userWishListData, isSuccess: isSuccessUserWishlistData },
  ] = useLazyGetWishlistQuery();

  const [getCart, { data: userCartData, isSuccess: isSuccessUserCartData }] =
    useLazyGetCartQuery();

  /* --------------------------- COMPONENT LOGIC: --------------------------- */
  const handleModal = () => {
    dispatch(setModal(!isOpenModal));
  };
  const logoutHandler = () => {
    localStorage.removeItem('token');
    dispatch(userLogutUserAction());
  };
  const initUserOnLoad = () => {
    const localStorageToken = localStorage.getItem('token');
    const userLocalCardData = localStorage.getItem('localCard');
    const userLocalWishlistData = localStorage.getItem('localWishlist');
    if (!localStorageToken) {
      // 1. смотрим локал стор, есть ли там уже добавленные продукты
      if (userLocalCardData || userLocalWishlistData)
        2.
    } else {
      if (isTokenExpired(localStorageToken)) {
        log('token expired')
        dispatch(userLogutUserAction())
      } else {
        dispatch(userLoginUserAction(localStorageToken));
        getWishlist(localStorageToken);
        getCart(localStorageToken);
        log('token valid');
      }
    }
  };

  useEffect(() => initUserOnLoad(), []);

  /* ------------------------------------------------ */

  const initUserWishlistOnLoad = () => {
    if (isUserLogin && userWishListData) {
      dispatch(setWishlistAction(userWishListData.products));
    }
  };

  /* ------------------------------------------------ */

  /* ------------------------------------------------ */

  const initUserCardOnLoad = () => {
    if (isUserLogin && userCartData) {
      dispatch(setCartAction(userCartData.products));
    }
  };

  useEffect(() => initUserCardOnLoad(), [isSuccessUserCartData]);

  useEffect(() => initUserWishlistOnLoad(), [isSuccessUserWishlistData]);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
      />
      <ScrollToTop />
      <Header actions={{ getCart, getWishlist }} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/:productSlug" element={<ProductsPage />} />
        <Route path="/product/:productID" element={<SingleProductPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/test" element={<TestForBackPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <CartModal />
      {isOpenModal && (
        isUserLogin
          ? <button type="button" onClick={logoutHandler}>Logout</button>
          : (
            <Modal handleModal={handleModal}>
              <LoginForm actions={{ handleModal, getCart, getWishlist }} />
            </Modal>
          )
      )}
    </>
  );
}

export default App;

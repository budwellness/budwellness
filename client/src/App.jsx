/* eslint-disable */
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import cn from 'classnames';

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

import {
  userLoginUserAction,
  userLogoutUserAction,
  setCustomerDataAction,
} from './store/user/user.slice';

// WISHLIST IMPORTS:
import { setWishlistAction } from './store/wishlist/wishList.slice';
import { isModalAddToCartAction, setModal } from './store/modal/modal.slice';

import { useLazyGetWishlistQuery } from './store/serverResponse/danitApi.wishlist';

// CART IMPORTS:
import { setCartAction, setLocalCartAction } from './store/cart/cart.slice';
import { useLazyGetCartQuery } from './store/serverResponse/danitApi.cart';

// import { useGetAllProductsQuery } from './store/serverResponse/fetchLocalJson';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import ContactPage from './pages/ContactPage/ContactPage';
import isTokenExpired from './helpers/isTokenExpired';
import Modal from './components/Modal/Modal';
import ModalAddToCart from './components/ModalAddToCart/ModalAddToCart';
import LoginForm from './components/LoginForm/LoginForm';
import Registration from './pages/RegistrationPage/Registration';
import OurTeam from './pages/OurTeam/OurTeam';
import useFetchLocalCardProducts from './hooks/useFetchLocalCardProducts';
import Profile from './pages/Profile/Profile';

const { log } = console;

function App() {
  /* --------------------------- REDUX STATE: --------------------------- */
  const { isUserLogin } = useSelector((state) => state.user);
  const { isOpenModal } = useSelector((state) => state.modal);
  const { isModalAddToCart } = useSelector((state) => state.modal);

  /* --------------------------- INIT HOOKS: --------------------------- */

  const dispatch = useDispatch();

  /* --------------------------- RTK QUERY CUSTOM HOOKS: --------------------------- */

  // WISHLIST API:
  const [
    getWishlist,
    { data: userWishListData, isSuccess: isSuccessUserWishlistData },
  ] = useLazyGetWishlistQuery();

  const [getCart, { data: userCartData, isSuccess: isSuccessUserCartData }] = useLazyGetCartQuery();
  const fetchLocalCartProducts = useFetchLocalCardProducts();

  const [
    getCustomerData,
    { data: userCustomerData, isSuccess: isSuccessUserCustomerData },
  ] = useLazyGetCustomerDataQuery();

  /* --------------------------- COMPONENT LOGIC: --------------------------- */
  const handleModal = () => {
    dispatch(setModal(!isOpenModal));
  };
  const handleModalAddToCart = () => {
    dispatch(isModalAddToCartAction(!isModalAddToCart));
  };
  const logoutHandler = () => {
    localStorage.removeItem('token');
    dispatch(userLogoutUserAction());
  };
  const initUserOnLoad = () => {
    const localStorageToken = localStorage.getItem('token');
    const userLocalCartData = localStorage.getItem('localCart') === ''
      ? ''
      : JSON.parse(localStorage.getItem('localCart'));
    if (!localStorageToken) {
      if (userLocalCartData && userLocalCartData.length > 0) {
        const productsItemNo = userLocalCartData.map(
          (product) => product.itemNo,
        );
        const fetchLocalCardProductsHandler = async () => {
          await fetchLocalCartProducts(productsItemNo).then((response) => {
            dispatch(
              setLocalCartAction(
                response.map((product) => {
                  const localCardProductQuantity = userLocalCartData.find(
                    (item) => item.itemNo === product.itemNo,
                  );
                  return {
                    product,
                    cartQuantity: localCardProductQuantity.cartQuantity,
                  };
                }),
              ),
            );
          });
        };
        fetchLocalCardProductsHandler();
      } else {
        localStorage.setItem('localCart', JSON.stringify([]));
      }
    } else {
      if (isTokenExpired(localStorageToken)) {
        log('token expired');
        dispatch(userLogoutUserAction());
      } else {
        dispatch(userLoginUserAction(localStorageToken));
        getWishlist(localStorageToken);
        getCart(localStorageToken);
        getCustomerData(localStorageToken);
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

  const initUserCardOnLoad = () => {
    if (isUserLogin && userCartData) {
      dispatch(
        setCartAction(userCartData.products),
        // setCartAction(
        //   userCartData.products.map((p) => {
        //     log('product', p)
        //     return {
        //       _id: p._id,
        //       product: p.product,
        //       cartQuantity: p.cartQuantity,
        //     }
        //   })
        // )
      );
    }
  };

  const initUserCustomerDataOnLoad = () => {
    if (isUserLogin && userCustomerData) {
      dispatch(setCustomerDataAction(userCustomerData));
    }
  };

  useEffect(() => initUserCardOnLoad(), [isSuccessUserCartData]);

  useEffect(() => initUserWishlistOnLoad(), [isSuccessUserWishlistData]);

  useEffect(() => initUserCustomerDataOnLoad(), [isSuccessUserCustomerData]);

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
        <Route path="/shop" element={<ProductsPage />} />
        <Route path="/product/:productID" element={<SingleProductPage />} />
        <Route path="/wishlist" element={
          <PrivateRoute>
            <WishlistPage />
          </PrivateRoute>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>} >
          <Route index="information" element={<UserInformation />} />
          <Route path="password" element={<ChangePassword />} />
          <Route path="history" element={<OrderHistory />} />
        </Route>
        <Route path="/test" element={<TestForBackPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <CartModal />
      {isOpenModal
        && (isUserLogin ? (
          <button type="button" onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          <Modal handleModal={handleModal}>
            <LoginForm actions={{ handleModal, getCart, getWishlist }} />
          </Modal>
        ))}
      {isModalAddToCart && (
        <Modal
          classNames={cn('add_to_cart__modal')}
          handleModal={handleModalAddToCart}
        >
          <ModalAddToCart handleModalAddToCart={handleModalAddToCart} />
        </Modal>
      )}
    </>
  );
}

export default App;

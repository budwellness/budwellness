/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {ToastContainer} from 'react-toastify';

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

// USER IMPORTS:
import {
    useLoginUserMutation,
} from './store/serverResponse/danitApi.auth';

import {
    userLoginUserAction, userLogutUserAction,
} from './store/user/user.slice';

// WISHLIST IMPORTS:
import {setWishlistAction} from './store/wishlist/wishList.slice';

import {
    useLazyGetWishlistQuery,
} from './store/serverResponse/danitApi.wishlist';

// CART IMPORTS:
import {setCartAction} from './store/cart/cart.slice';
import {
    useLazyGetCartQuery,
} from './store/serverResponse/danitApi.cart';

// import { useGetAllProductsQuery } from './store/serverResponse/fetchLocalJson';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

import {useGetAllProductsQuery} from './store/serverResponse/danitApi.products';
import ContactPage from './pages/ContactPage/ContactPage';


const {log} = console;

function App() {
    const {data: products, error} = useGetAllProductsQuery();
    const [showCartModal, setShowCartModal] = useState(false);

    /* --------------------------- REDUX STATE: --------------------------- */
    const {isUserLogin} = useSelector(
        (state) => state.user,
    );

    /* --------------------------- INIT HOOKS: --------------------------- */

    const dispatch = useDispatch();

    /* --------------------------- RTK QUERY CUSTOM HOOKS: --------------------------- */

    // WISHLIST API:
    const [
        getWishlist,
        {data: userWishListData, isSuccess: isSuccessUserWishlistData},
    ] = useLazyGetWishlistQuery();

    const [
        getCart,
        {
            data: userCartData,
            isSuccess: isSuccessUserCartData,
        },
    ] = useLazyGetCartQuery();

    /* --------------------------- COMPONENT LOGIC: --------------------------- */

    const initUserOnLoad = () => {
        const localStorageToken = localStorage.getItem('token');
        if (!localStorageToken) {
            log('User not logged in');
        } else {
            log('token is present, put it into store...');
            dispatch(userLoginUserAction(localStorageToken));
            getWishlist(localStorageToken);
            getCart(localStorageToken);
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
            <Header actions={{setShowCartModal, getCart, getWishlist}}
            />
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/shop" element={<ProductsPage/>}/>
                <Route path="/product/:productID" element={<SingleProductPage/>}/>
                <Route path="/wishlist" element={<WishlistPage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/test" element={<TestForBackPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
            <Footer/>
            <CartModal
                showCartModal={showCartModal}
                setShowCartModal={setShowCartModal}
            />
            {showCartModal && <div className="overLayCartModal" onClick={() => setShowCartModal(false)}/>}
        </>
    );
}

export default App;

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ShopPage/ProductsPage';
import WishlistPage from './pages/WishlistPage/WishlistPage';

import { useGetAllProductsQuery } from './store/serverResponse/fetchLocalJson';

import './App.scss';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import CartPage from './pages/CartPage/CartPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import TestForBackPage from './pages/TestForBackPage/TestForBackPage';
import Button from './components/Button/Button';
import CartModal from './components/CartModal/CartModal';

function App() {
  const { data, error } = useGetAllProductsQuery();

  const [showCartModal, setShowCartModal] = useState(true);

  // eslint-disable-next-line no-console
  console.log('DATA: ', data);
  // eslint-disable-next-line no-console
  console.log('error: ', error);

  return (
    <>
      <Header setShowCartModal={setShowCartModal} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:productID" element={<SingleProductPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/test" element={<TestForBackPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <Button />
      <CartModal showCartModal={showCartModal} setShowCartModal={setShowCartModal} />
    </>
  );
}

export default App;

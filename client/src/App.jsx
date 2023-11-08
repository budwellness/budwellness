import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ShopPage/ProductsPage';
import WishlistPage from './pages/WishlistPage/WishlistPage';
import { useGetAllProductsQuery } from './store/serverResponse/fetchLocalJson';

import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import CartPage from './pages/CartPage/CartPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import TestForBackPage from './pages/TestForBackPage/TestForBackPage';
import CartModal from './components/CartModal/CartModal';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  const { data: products, error } = useGetAllProductsQuery();
  const [showCartModal, setShowCartModal] = useState(true);

  // console.log('DATA: ', products);

  // console.log('error: ', error);

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
      <Footer products={products} error={error} />
      <CartModal
        showCartModal={showCartModal}
        setShowCartModal={setShowCartModal}
      />
      {showCartModal && <div className="overLayCartModal" onClick={() => setShowCartModal(false)} />}
    </>
  );
}

export default App;

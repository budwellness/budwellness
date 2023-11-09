import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ShopPage/ProductsPage';
import WishlistPage from './pages/WishlistPage/WishlistPage';
import { useGetAllProductsQuery } from './store/serverResponse/fetchLocalJson';

import './App.scss';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import CartPage from './pages/CartPage/CartPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import TestForBackPage from './pages/TestForBackPage/TestForBackPage';
import CartModal from './components/CartModal/CartModal';
import ModalAddToCart from './components/ModalAddToCart/ModalAddToCart';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';

function App() {
  const { data: products, error } = useGetAllProductsQuery();
  const [showCartModal, setShowCartModal] = useState(false);
  const [showModalAddToCart, setShowModalAddToCart] = useState(false);
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
      <Footer
        products={products}
        error={error}
        setShowModalAddToCart={setShowModalAddToCart}
      />
      <CartModal
        showCartModal={showCartModal}
        setShowCartModal={setShowCartModal}
      />
      {showModalAddToCart && (
        <Modal>
          <ModalAddToCart
            // productId={products?.product.id}
            // name={products?.product.name}
            showModalAddToCart={showModalAddToCart}
            setShowModalAddToCart={setShowModalAddToCart}
          />
        </Modal>
      )}
    </>
  );
}

export default App;

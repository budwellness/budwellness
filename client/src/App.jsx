import React from 'react';
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

function App() {
  const { data: products, error } = useGetAllProductsQuery();

  console.log('DATA: ', products);

  console.log('error: ', error);

  const product = data[2];

  // function getRandomProduct() {
  //   const randomIndex = Math.floor(Math.random() * data.length);
  //   return data[randomIndex];
  // }

  // const randomProduct = getRandomProduct();

  // console.log(`Название продукта: ${randomProduct.name}`);
  // console.log(`Цена: ${randomProduct.price}`);
  // console.log(`Описание: ${randomProduct.description}`);

  return (
    <>
      <Header />
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
    </>
  );
}

export default App;

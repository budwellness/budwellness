import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import Header from './components/Header/Header.jsx';

function App() {
  const { data, error } = useGetAllProductsQuery();

  // eslint-disable-next-line no-console
  console.log('DATA: ', data);
  // eslint-disable-next-line no-console
  console.log('error: ', error);

  return (
    <Header />
  );
}

export default App;

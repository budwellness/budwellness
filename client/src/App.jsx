import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel/Carousel';
// import Footer from './components/Footer/Footer';
// import HomePage from './pages/HomePage/HomePage';
// import ProductsPage from './pages/ShopPage/ProductsPage';
// import WishlistPage from './pages/WishlistPage/WishlistPage';
// import PagePreviewHeader from './components/PagePreviewHeader/PagePreviewHeader';

import { useGetAllProductsQuery } from './store/serverResponse/fetchLocalJson';

import './App.scss';
// import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
// import CartPage from './pages/CartPage/CartPage';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
// import TestForBackPage from './pages/TestForBackPage/TestForBackPage';
// import Button from './components/Button/Button';

function App() {
  const { data, error } = useGetAllProductsQuery();

  // eslint-disable-next-line no-console
  console.log('DATA: ', data);
  // eslint-disable-next-line no-console
  console.log('error: ', error);

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:productID" element={<SingleProductPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/test" element={<TestForBackPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <PagePreviewHeader
        title="Shop"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, blanditiis."
      /> */}
      <Carousel />
      {/* <Footer />
      <Button /> */}
    </>
  );
}

export default App;

import React from 'react';
import Categories from '../../components/Categories/Categories';
import Carousel from '../../components/Carousel/Carousel';
import PopularProducts from '../../components/PopularProducts/PopularProducts';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <ScrollToTop />
      <Carousel />
      <Categories />
      <PopularProducts />
    </>
  );
}

export default HomePage;

import React from 'react';
import Categories from '../../components/Categories/Categories';
import Carousel from '../../components/Carousel/Carousel';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <ScrollToTop />
      <Carousel />
      <Categories />
    </>
  );
}

export default HomePage;

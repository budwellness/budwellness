import React from 'react';
import Categories from '../../components/Categories/Categories';
import Carousel from '../../components/Carousel/Carousel';
import PopularProducts from '../../components/PopularProducts/PopularProducts';

function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <Carousel />
      <Categories />
      <PopularProducts />
    </>
  );
}

export default HomePage;

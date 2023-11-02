import React from 'react';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Carousel from '../../components/Carousel/Carousel';
import Categories from '../../components/Categories/Categories';
import PopularProducts from '../../components/PopularProducts/PopularProducts';
import DescriptionWeed from '../../components/DesctiptionWeed/DescriptionWeed';
import Partners from '../../components/Partners/Partners';
import Instagram from '../../components/Instagram/Instagram';

function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <ScrollToTop />
      <Carousel />
      <Categories />
      <PopularProducts />
      <DescriptionWeed />
      <Partners />
      <Instagram />
    </>
  );
}

export default HomePage;

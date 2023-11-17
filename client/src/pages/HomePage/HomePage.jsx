import React from 'react';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Carousel from '../../components/Carousel/Carousel';
import Categories from '../../components/Categories/Categories';
import PopularProducts from '../../components/PopularProducts/PopularProducts';
import DescriptionWeed from '../../components/DesctiptionWeed/DescriptionWeed';
import Partners from '../../components/Partners/Partners';
import Instagram from '../../components/Instagram/Instagram';
import StaticInfo from '../../components/StaticInfo/StaticInfo';
import Info from '../../components/Info/Info';

function HomePage() {
  return (
    <>
      <ScrollToTop />
      <Carousel />
      <Categories />
      <PopularProducts />
      <StaticInfo />
      <Info />
      <DescriptionWeed />
      <Partners />
      <Instagram />
    </>
  );
}

export default HomePage;

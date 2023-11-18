import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Categories from '../../components/Categories/Categories';
import PopularProducts from '../../components/PopularProducts/PopularProducts';
import DescriptionWeed from '../../components/DesctiptionWeed/DescriptionWeed';
import Partners from '../../components/Partners/Partners';
import Instagram from '../../components/Instagram/Instagram';
import StaticInfo from '../../components/StaticInfo/StaticInfo';

function HomePage() {
  return (
    <>
      <Carousel />
      <Categories />
      <PopularProducts />
      <StaticInfo />
      <DescriptionWeed />
      <Partners />
      <Instagram />
    </>
  );
}

export default HomePage;

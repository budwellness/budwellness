import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Categories from '../../components/Categories/Categories';
import Instagram from '../../components/Instagram/Instagram';
import DescriptionWeed from '../../components/DesctiptionWeed/DescriptionWeed';

function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <Carousel />
      <Categories />
      <DescriptionWeed />
      <Instagram />
    </>
  );
}

export default HomePage;

import React from 'react';
// import Carousel from '../../components/Carousel/Carousel';
import Categories from '../../components/Categories/Categories';
import Instagram from '../../components/Instagram/Instagram';
import DescriptionWeed from '../../components/DesctiptionWeed/DescriptionWeed';
import Partners from '../../components/Partners/Partners';

function HomePage() {
  return (
    <>
      <div>HomePage</div>
      {/* <Carousel /> */}
      <Categories />
      <DescriptionWeed />
      <Partners />
      <Instagram />
    </>
  );
}

export default HomePage;

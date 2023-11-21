import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs } from 'swiper/core';
import PropTypes from 'prop-types';
import ArrowPrevIcon from '../UI/ArrowPrevIcon';
import ArrowNextIcon from '../UI/ArrowNextIcon';

import styles from './SingleProductSwiper.module.scss';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation, Thumbs]);

function SingleProductSwiper({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className={styles.wrap}>
      <Swiper
        loop
        touch={false}
        mousewheel={false}
        simulateTouch={false}
        spaceBetween={10}
        navigation={{
          nextEl: '.next-button',
          prevEl: '.prev-button',
        }}
        thumbs={{ swiper: thumbsSwiper }}
        className={styles.myMainSwiper}
      >
        {images.map((image) => (
          <SwiperSlide key={image} className={styles.swiperSlide}>
            <picture>
              <img className={styles.singleImg} src={image} alt="product" />
            </picture>
          </SwiperSlide>
        ))}
        <div className={`${styles.nextBtn} next-button`}>
          <ArrowNextIcon className={styles.arrowNext} />
        </div>
        <div className={`${styles.prevBtn} prev-button`}>
          <ArrowPrevIcon className={styles.arrowPrev} />
        </div>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop
        touch={false}
        mousewheel={false}
        simulateTouch={false}
        spaceBetween={10}
        slidesPerView={2}
        freeMode
        watchSlidesVisibility
        watchSlidesProgress
        className={styles.mySwiper}
      >
        {images.map((image) => (
          <SwiperSlide key={image} className={styles.swiperSlide}>
            <picture>
              <img className={styles.singleImg} src={image} alt="product" />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

SingleProductSwiper.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SingleProductSwiper;

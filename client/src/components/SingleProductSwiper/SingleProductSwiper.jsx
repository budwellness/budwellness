import React, { useState } from 'react';
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
        spaceBetween={10}
        navigation={{
          nextEl: '.next-button',
          prevEl: '.prev-button',
        }}
        thumbs={{ swiper: thumbsSwiper }}
        className={styles.myMainSwiper}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <picture key={image}>
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
        spaceBetween={10}
        slidesPerView={2}
        freeMode
        watchSlidesVisibility
        watchSlidesProgress
        className={styles.mySwiper}
      >
        {images.map((image) => (
          <SwiperSlide key={image} className={styles.swiperSlide}>
            <picture key={image}>
              <img className={styles.singleImg} src={image} alt="product" />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

SingleProductSwiper.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  images: PropTypes.array,
};

SingleProductSwiper.defaultProps = {
  images: [],
};

export default SingleProductSwiper;

import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import styles from './Instagram.module.scss';

function Instagram() {
  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.instaTitle}>Follow Us on Instagram</h2>
        <p className={styles.instaDesc}>
          Accumsan sit amet nulla facilisi morbi tempus. Suscipit tellus mauris
          a diam maecenas sed enim ut sem
        </p>
      </div>
      <div>
        <Swiper
          watchSlidesProgress
          slidesPerView={5}
          loop
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide className={styles.instaSwipe}>
            <a href="https://www.instagram.com/">
              {' '}
              <img
                className={styles.instaImage}
                src="./public/images/instaOne.webp"
                alt="oil"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.instaSwipe}>
            <a href="https://www.instagram.com/">
              {' '}
              <img
                className={styles.instaImage}
                src="./public/images/instaTwo.webp"
                alt="oil"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.instaSwipe}>
            <a href="https://www.instagram.com/">
              {' '}
              <img
                className={styles.instaImage}
                src="./public/images/instaThree.webp"
                alt="oil"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.instaSwipe}>
            <a href="https://www.instagram.com/">
              {' '}
              <img
                className={styles.instaImage}
                src="./public/images/instaFour.webp"
                alt="oil"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.instaSwipe}>
            <a href="https://www.instagram.com/">
              {' '}
              <img
                className={styles.instaImage}
                src="./public/images/instaFive.webp"
                alt="oil"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.instaSwipe}>
            <a href="https://www.instagram.com/">
              {' '}
              <img
                className={styles.instaImage}
                src="./public/images/instaOne.webp"
                alt="oil"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.instaSwipe}>
            <a href="https://www.instagram.com/">
              {' '}
              <img
                className={styles.instaImage}
                src="./public/images/instaTwo.webp"
                alt="oil"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.instaSwipe}>
            <a href="https://www.instagram.com/">
              {' '}
              <img
                className={styles.instaImage}
                src="./public/images/instaThree.webp"
                alt="oil"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.instaSwipe}>
            <a href="https://www.instagram.com/">
              {' '}
              <img
                className={styles.instaImage}
                src="./public/images/instaFour.webp"
                alt="oil"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.instaSwipe}>
            <a href="https://www.instagram.com/">
              {' '}
              <img
                className={styles.instaImage}
                src="./public/images/instaFive.webp"
                alt="oil"
              />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default Instagram;

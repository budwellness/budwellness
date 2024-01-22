import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper/core';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import styles from './Instagram.module.scss';

SwiperCore.use([Autoplay]);

function Instagram() {
  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.instaTitle}>Follow Us on Instagram</h2>
        <p className={styles.instaDesc}>
          Follow us on Instagram for the latest updates, behind-the-scenes
          glimpses, and exclusive content.
        </p>
      </div>
      <div>
        <Swiper
          watchSlidesProgress
          slidesPerView={5}
          loop
          className="mySwiper"
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          watchOverflow={false}
          speed={1500}
          effect="slide"
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
                src="./images/instaOne.webp"
                alt="instagram"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.instaSwipe}>
            <a href="https://www.instagram.com/">
              {' '}
              <img
                className={styles.instaImage}
                src="./images/instaTwo.webp"
                alt="instagram"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.instaSwipe}>
            <a href="https://www.instagram.com/">
              {' '}
              <img
                className={styles.instaImage}
                src="./images/instaThree.webp"
                alt="instagram"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.instaSwipe}>
            <a href="https://www.instagram.com/">
              {' '}
              <img
                className={styles.instaImage}
                src="./images/instaFour.webp"
                alt="instagram"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.instaSwipe}>
            <a href="https://www.instagram.com/">
              {' '}
              <img
                className={styles.instaImage}
                src="./images/instaFive.webp"
                alt="instagram"
              />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default Instagram;

import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import cN from 'classnames';
import { useGetAllProductsQuery } from '../../../store/serverResponse/fetchLocalJson';
import CartIcon from '../../UI/CartIcon';
import FavoriteIcon from '../../UI/FavoriteIcon';
import EyeIcon from '../../UI/EyeIcon';
import RatingStars from '../../RatingStars/RatingStars';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import styles from './PopularSwiper.module.scss';

SwiperCore.use([Pagination, Autoplay]);

export default function PopularSwiper() {
  const { data: productsData } = useGetAllProductsQuery();

  const popularCards = productsData
    ?.slice()
    ?.sort(({ rate: rateA }, { rate: rateB }) => rateB - rateA)
    ?.slice(0, 6)
    ?.map((productItem) => (
      <SwiperSlide key={productItem.itemNo} className={styles.slide}>
        <div className={styles.wpapper}>
          <div className={styles.media}>
            {productItem.previousPrice !== productItem.currentPrice && (
              <span className={styles.mediaSale}>Sale</span>
            )}
            <div className={styles.mediaOverlay}>
              <ul className={styles.actionList}>
                <li className={styles.listItem}>
                  <button
                    type="button"
                    className={styles.actionLink}
                    onClick={() => {}}
                  >
                    <CartIcon className={styles.styleIcon} />
                  </button>
                </li>
                <li className={styles.listItem}>
                  <button
                    type="button"
                    className={styles.actionLink}
                    onClick={() => {}}
                  >
                    <FavoriteIcon className={styles.styleIcon} />
                  </button>
                </li>
                <li className={styles.listItem}>
                  <button
                    type="button"
                    className={styles.actionLink}
                    onClick={() => {}}
                  >
                    <EyeIcon className={styles.styleIcon} />
                  </button>
                </li>
              </ul>
            </div>
            <picture>
              <img
                className={styles.mediaImg}
                src={productItem.imageUrls[0]}
                alt={productItem.name}
              />
            </picture>
          </div>
          <div className={styles.main}>
            <RatingStars rate={productItem.rate} />
            <Link
              className={styles.mainTitle}
              to={`/product/${productItem.itemNo}`}
            >
              {productItem.name}
            </Link>
            <div className={styles.mainPrice}>
              {productItem.previousPrice !== productItem.currentPrice && (
                <span className={cN(styles.price, styles.priceOld)}>
                  $
                  {productItem.previousPrice.toFixed(2)}
                </span>
              )}
              <span className={styles.price}>
                $
                {productItem.currentPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ));

  return (
    <Swiper
      className={styles.mySwiper}
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        clickable: true,
        bulletClass: styles.bullet,
        bulletActiveClass: styles.bulletActive,
        el: '.myPagination',
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop
      watchOverflow={false}
      speed={1000}
      effect="slide"
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
    >
      {popularCards}
      <div
        className="myPagination"
        style={{ marginTop: '40px', textAlign: 'center' }}
      />
    </Swiper>
  );
}

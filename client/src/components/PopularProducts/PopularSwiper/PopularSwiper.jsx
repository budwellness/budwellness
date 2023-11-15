import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import { useDispatch, useSelector } from 'react-redux';


// COMPONENT IMPORTS:

import PopularSwiperSlide from '../PopularSwiperSlide/PopularSwiperSlide';

// PRODUCT IMPORTS:
import { useGetFilteredProductsQuery } from '../../../store/serverResponse/danitApi.products';

// WISHLIST IMPORTS:
import {
  useAddProductToWishlistMutation,
  useRemoveFromWishlistMutation,
} from '../../../store/serverResponse/danitApi.wishlist';

// CART IMPORTS:
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import styles from './PopularSwiper.module.scss';
import useToggleCart from '../../../hooks/useToggleCart';
import useToggleWishlist from '../../../hooks/useToggleWishlist';

SwiperCore.use([Pagination, Autoplay]);

const { log } = console;

export default function PopularSwiper() {
  /* --------------------------- COMPONENT STATE: --------------------------- */
  const [popularCards, setPopularCards] = useState(null);

  /* --------------------------- INIT HOOKS: --------------------------- */
  const toggleCartHandler = useToggleCart();
  const toggleWishlistHandler = useToggleWishlist();

  /* --------------------------- RTK QUERY CUSTOM HOOKS: --------------------------- */
  // PRODUCT API:
  const mockFilterQueryString = '?sort=-rate&perPage=6&startPage=1';
  const {
    data: filteredProductsData,
    isLoading: isLoadingFilteredProductsData,
    isSuccess: isSuccessFilteredProductsData,
  } = useGetFilteredProductsQuery(mockFilterQueryString);

  /* --------------------------- COMPONENT HANDLERS: --------------------------- */


  /* --------------------------- COMPONENT LOGIC: --------------------------- */


  useEffect(() => {
    if (isSuccessFilteredProductsData) {
      setPopularCards(
        filteredProductsData.products
          ?.map((productItem) => (
            <SwiperSlide key={productItem.itemNo} className={styles.slide}>
              <PopularSwiperSlide
                products={productItem}
                actions={
                  {
                    toggleCartHandler,
                    toggleWishlistHandler
                  }
                }
              />
            </SwiperSlide>
          )),
      );
    }
  }, [isSuccessFilteredProductsData, filteredProductsData]);

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
      {isLoadingFilteredProductsData ? <p>Loading...</p> : popularCards}
      <div
        className="myPagination"
        style={{ marginTop: '40px', textAlign: 'center' }}
      />
    </Swiper>
  );
}

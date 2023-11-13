import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import { useDispatch, useSelector } from 'react-redux';
import cN from 'classnames';

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
import { useAddToCartMutation, useRemoveFromCartMutation } from '../../../store/serverResponse/danitApi.cart';
import useRemoveFromCart from '../../../hooks/useRemoveFromCart';
import { addItemToCartAction, removeItemFromCartAction } from '../../../store/cart/cart.slice';
import { toast } from 'react-toastify';

SwiperCore.use([Pagination, Autoplay]);

const { log } = console;

export default function PopularSwiper() {
  /* --------------------------- COMPONENT STATE: --------------------------- */
  const [popularCards, setPopularCards] = useState(null);

  /* --------------------------- INIT HOOKS: --------------------------- */
  const dispatch = useDispatch();


  /* --------------------------- REDUX STATE: --------------------------- */
  const { token: tokenReduxStore } = useSelector((state) => state.user);
  const { wishList: wishlistStoreData } = useSelector((state) => state.wishlist);
  const { cart: cartStoreData } = useSelector((state) => state.cart);

  /* --------------------------- RTK QUERY CUSTOM HOOKS: --------------------------- */
  // PRODUCT API:
  const mockFilterQueryString = '?sort=-rate&perPage=6&startPage=1';
  const {
    data: filteredProductsData,
    isLoading: isLoadingFilteredProductsData,
    isSuccess: isSuccessFilteredProductsData,
  } = useGetFilteredProductsQuery(mockFilterQueryString);

  // WISHLIST API:
  const [removeProductFromWishlist] = useRemoveFromWishlistMutation();
  const [addProductToWishlist] = useAddProductToWishlistMutation();
  // CART API:
  const [addProductToCart] = useAddToCartMutation();
  const [removeProductFromCart] = useRemoveFromCartMutation();

  /* --------------------------- COMPONENT HANDLERS: --------------------------- */
  const toggleCartHandler = (productId, token) => {
    const isExist = cartStoreData.some((p) => p.product._id === productId);

    if (isExist) {
      try {
        removeProductFromCart({ productId, token });
        dispatch(removeItemFromCartAction(productId));
        toast.warn('Product was removed from cart!');
      } catch (error) {
        log(error);
        toast.error('Something went wrong...');
      }
    } else {
      try {
        addProductToCart({ productId, token })
          .unwrap()
          .then((response) => {
            dispatch(addItemToCartAction(response.products));
            toast.success('Product was added to cart!');
          });
      } catch (error) {
        log(error);
        toast.error('Something went wrong...');
      }
    }
  };
  /* --------------------------- COMPONENT LOGIC: --------------------------- */


  useEffect(() => {
    if (isSuccessFilteredProductsData) {
      setPopularCards(
        filteredProductsData.products
          ?.map((productItem) => (
            <SwiperSlide key={productItem.itemNo} className={styles.slide}>
              <PopularSwiperSlide products={productItem} />
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

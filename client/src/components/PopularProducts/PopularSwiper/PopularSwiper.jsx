import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import { useDispatch, useSelector } from 'react-redux';
import cN from 'classnames';

// COMPONENT IMPORTS:
import { useGetAllProductsQuery } from '../../../store/serverResponse/fetchLocalJson';
import CartIcon from '../../UI/CartIcon';
import FavouriteIcon from '../../UI/FavouriteIcon';
import EyeIcon from '../../UI/EyeIcon';
import RatingStars from '../../RatingStars/RatingStars';

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

SwiperCore.use([Pagination, Autoplay]);

export default function PopularSwiper() {
  /* --------------------------- COMPONENT STATE: --------------------------- */
  const [popularCards, setPopularCards] = useState(null);

  /* --------------------------- INIT HOOKS: --------------------------- */
  const dispatch = useDispatch();

  /* --------------------------- REDUX STATE: --------------------------- */
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
  /* --------------------------- COMPONENT LOGIC: --------------------------- */

  useEffect(() => {
    if (isSuccessFilteredProductsData) {
      setPopularCards(
        filteredProductsData.products
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
                          onClick={() => { }}
                        >
                          <CartIcon className={styles.styleIcon} />
                        </button>
                      </li>
                      <li className={styles.listItem}>
                        <button
                          type="button"
                          className={styles.actionLink}
                          onClick={() => { }}
                        >
                          <FavouriteIcon className={styles.styleIcon} />
                        </button>
                      </li>
                      <li className={styles.listItem}>
                        <button
                          type="button"
                          className={styles.actionLink}
                          onClick={() => { }}
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
          )),
      );
    }
  }, [isSuccessFilteredProductsData]);

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

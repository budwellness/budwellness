import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cN from 'classnames';
import { toast } from 'react-toastify';
// COMPONENT IMPORTS:
import { useSelector } from 'react-redux';
import CartIcon from '../../UI/CartIcon';
import FavouriteIcon from '../../UI/FavouriteIcon';
import EyeIcon from '../../UI/EyeIcon';
import RatingStars from '../../RatingStars/RatingStars';
import wishlistButtonStateHandler from '../../../helpers/wishlistButtonStateHandler';
import cartButtonStateHandler from '../../../helpers/cartButtonStateHandler';
import styles from './PopularSwiperSlide.module.scss';

function PopularSwiperSlide(props) {
  /* --------------------------- INIT PROPS: --------------------------- */
  const {
    products: productItem,
    actions: { toggleCartHandler, toggleWishlistHandler, toggleLocalCartHandler },
    handleModalAddToCart,
  } = props;

  /* --------------------------- COMPONENT STATE: --------------------------- */
  const [isExistInWishlist, setIsExistInWishlist] = useState(false);
  const [isExistInCart, setIsExistInCart] = useState(false);

  /* --------------------------- REDUX STATE: --------------------------- */
  const { cart: cartStoreData, localCart: localCartStoreData } = useSelector((state) => state.cart);
  const { isUserLogin, token: tokenReduxStore } = useSelector(
    (state) => state.user,
  );
  const { wishList: wishlistStoreData } = useSelector(
    (state) => state.wishlist,
  );

  /* --------------------------- COMPONENT HANDLERS: --------------------------- */
  const toggleWishlistWithLoginHandler = () => {
    if (isUserLogin) {
      toggleWishlistHandler(productItem, tokenReduxStore, wishlistStoreData);
    } else {
      toast.error('Please login first!');
    }
  };

  const toggleCartWithLoginHandler = () => {
    toggleCartHandler(productItem, tokenReduxStore, cartStoreData);
  };
  const toggleCartWithoutLoginHandler = () => {
    toggleLocalCartHandler(productItem);
  };

  useEffect(
    () => wishlistButtonStateHandler(
      isUserLogin,
      wishlistStoreData,
      isExistInWishlist,
      setIsExistInWishlist,
      productItem._id,
    ),
    [wishlistStoreData, isUserLogin],
  );

  useEffect(
    () => cartButtonStateHandler(
      isUserLogin,
      isExistInCart,
      setIsExistInCart,
      productItem._id,
      cartStoreData,
      localCartStoreData,
    ),
    [cartStoreData, isUserLogin, localCartStoreData],
  );

  return (
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
                className={cN({
                  [styles.actionLink]: !isExistInCart,
                  [styles.actionLink_active]: isExistInCart,
                })}
                onClick={
                  () => (isUserLogin
                    ? toggleCartWithLoginHandler()
                    : toggleCartWithoutLoginHandler())
                }
              >
                <CartIcon className={styles.styleIcon} />
              </button>
            </li>
            <li className={styles.listItem}>
              <button
                type="button"
                className={cN({
                  [styles.actionLink]: !isExistInWishlist,
                  [styles.actionLink_active]: isExistInWishlist,
                })}
                onClick={() => toggleWishlistWithLoginHandler()}
              >
                <FavouriteIcon className={styles.styleIcon} />
              </button>
            </li>
            <li className={styles.listItem}>
              <button
                type="button"
                className={styles.actionLink}
                onClick={handleModalAddToCart}
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
  );
}

PopularSwiperSlide.propTypes = {
  // eslint-disable-next-line react/require-default-props
  products: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    imageUrls: PropTypes.arrayOf(PropTypes.string),
    previousPrice: PropTypes.number.isRequired,
    currentPrice: PropTypes.number.isRequired,
    name: PropTypes.string,
    itemNo: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
  }),
  actions: PropTypes.shape({
    toggleCartHandler: PropTypes.func,
    toggleWishlistHandler: PropTypes.func,
    toggleLocalCartHandler: PropTypes.func,
  }),
  handleModalAddToCart: PropTypes.func,
};

PopularSwiperSlide.defaultProps = {
  actions: {
    toggleCartHandler: () => { },
    toggleWishlistHandler: () => { },
    toggleLocalCartHandler: () => { },
  },
  handleModalAddToCart: () => { },
};

export default PopularSwiperSlide;

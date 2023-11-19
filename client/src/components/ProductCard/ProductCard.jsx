/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useSelector } from 'react-redux';
// COMPONENT IMPORTS:
import Button from '../Button/Button';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import RatingStars from '../RatingStars/RatingStars';
import FavouriteIcon from '../UI/FavouriteIcon';
import EyeIcon from '../UI/EyeIcon';

import getThcCategory from '../../helpers/getThcCategory';
import getCbdCategory from '../../helpers/getCbdCategory';
import wishlistButtonStateHandler from '../../helpers/wishlistButtonStateHandler';
import cartButtonStateHandler from '../../helpers/cartButtonStateHandler';

import styles from './ProductCard.module.scss';

const { log } = console;

function ProductCard(props) {
  /* --------------------------- INIT PROPS: --------------------------- */
  const {
    actions: {
      toggleWishlistHandler,
      toggleCartHandler,
    },
    product,
  } = props;

  const {
    imageUrls,
    previousPrice,
    currentPrice,
    rate,
    itemNo,
    thc,
    cbd,
    name,
    classNames,
  } = product;

  /* --------------------------- COMPONENT STATE: --------------------------- */
  const [isExistInWishlist, setIsExistInWishlist] = useState(false);
  const [isExistInCart, setIsExistInCart] = useState(false);

  /* --------------------------- REDUX STATE: --------------------------- */
  const { isUserLogin, token: tokenReduxStore } = useSelector((state) => state.user);
  const { wishList: wishlistStoreData } = useSelector((state) => state.wishlist);
  const { cart: cartStoreData } = useSelector((state) => state.cart);

  /* --------------------------- COMPONENT HANDLERS: --------------------------- */

  // WISHLIST:
  const toggleWishlistWithLoginHandler = () => {
    if (isUserLogin) {
      toggleWishlistHandler(product, tokenReduxStore, wishlistStoreData);
    } else {
      log('Please login first');
    }
  };

  // CART:

  const toggleCartWithLoginHandler = () => {
    if (isUserLogin) {
      toggleCartHandler(product._id, tokenReduxStore, cartStoreData);
    } else {
      log('Please login first');
    }
  };

  /* --------------------------- COMPONENT LOGIC: --------------------------- */

  useEffect(
    () => wishlistButtonStateHandler(
      isUserLogin,
      wishlistStoreData,
      isExistInWishlist,
      setIsExistInWishlist,
      product._id,
    ),
    [wishlistStoreData, isUserLogin],
  );

  useEffect(
    () => cartButtonStateHandler(
      isUserLogin,
      cartStoreData,
      isExistInCart,
      setIsExistInCart,
      product._id,
    ),
    [cartStoreData, isUserLogin],
  );

  return (
    <div className={cn(styles.productCard, styles[classNames])}>
      <div className={styles.productCard__media}>
        <Link
          to={`/product/${itemNo}`}
          className={styles.productCard__img_link}
        >
          <div className={styles.productCard__img_wrapper}>
            <img
              className={styles.productCard__img}
              src={imageUrls[0]}
              alt={name}
            />
          </div>
        </Link>
        {previousPrice !== currentPrice && (
          <span className={styles.productCard__saleLabel}>Sale</span>
        )}
        <div className={styles.productCard__overlay}>
          <div className={styles.productCard__action}>
            <ButtonIcon
              className={styles.btn__viewSingleProduct}
              onClick={() => {
                // setShowModalAddToCart();
              }}
            >
              <EyeIcon className={styles.eyeIcon} />
            </ButtonIcon>
            <ButtonIcon
              className={cn({
                [styles.btn__addToFavorites]: !isExistInWishlist,
                [styles.btn__addToFavorites_active]: isExistInWishlist,
              })}
              onClick={toggleWishlistWithLoginHandler}
            >
              <FavouriteIcon className={styles.favoriteIcon} />
            </ButtonIcon>
          </div>
        </div>
      </div>
      <div className={styles.productCard__main}>
        <RatingStars rate={rate} />
        <Link
          to={`/product/${itemNo}`}
          className={styles.productCard__title_link}
        >
          <h3 className={styles.productCard__title}>{name}</h3>
        </Link>
        <ul className={styles.productCard__propertys}>
          <li className={styles.productCard__propertys_item}>
            <span>THC</span>
            {` ${getThcCategory(thc)}`}
          </li>
          <li className={styles.productCard__propertys_item}>
            <span>CBD</span>
            {` ${getCbdCategory(cbd)}`}
          </li>
        </ul>
        <div className={styles.productCard__prices_wrapper}>
          {previousPrice !== currentPrice && (
            <span className={styles.productCard__previous_price}>
              {`$${previousPrice.toFixed(2)}`}
            </span>
          )}
          <span className={styles.productCard__current_price}>
            {`$${currentPrice.toFixed(2)}`}
          </span>
        </div>
        <Button
          className={cn({
            whiteBtn: !isExistInCart,
            whiteBtn_active: isExistInCart,
          })}
          text={isExistInCart ? 'Remove from cart' : 'Add to cart'}
          onClick={toggleCartWithLoginHandler}
        />
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  // eslint-disable-next-line react/require-default-props
  product: PropTypes.shape({
    imageUrls: PropTypes.arrayOf(PropTypes.string),
    thc: PropTypes.number.isRequired,
    cbd: PropTypes.number.isRequired,
    itemNo: PropTypes.string.isRequired,
    previousPrice: PropTypes.number.isRequired,
    currentPrice: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    name: PropTypes.string,
    classNames: PropTypes.string,
  }),
  // eslint-disable-next-line react/require-default-props
  actions: PropTypes.shape({
    toggleWishlistHandler: PropTypes.func,
    toggleCartHandler: PropTypes.func,
    // setShowModalAddToCart: PropTypes.func,
  }),
};

export default ProductCard;

/* eslint-disable react-hooks/exhaustive-deps */
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

import getThcCategory from '../../helpers/functionGetThcCategory';
import getCbdCategory from '../../helpers/functionGetCbdCategory';
import styles from './ProductCard.module.scss';

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
  const [isExistInWishlist, setIsExistInWishlist] = useState(null);
  const [isExistInCart, setIsExistInCart] = useState(null);

  /* --------------------------- REDUX STATE: --------------------------- */
  const { isUserLogin, token: tokenReduxStore } = useSelector((state) => state.user);
  const { wishList: wishlistStoreData } = useSelector((state) => state.wishlist);
  const { cart: cartStoreData } = useSelector(state => state.cart);

  /* --------------------------- COMPONENT HANDLERS: --------------------------- */

  // WISHLIST:
  const toggleWishlistWithLoginHandler = () => {
    if (isUserLogin) {
      toggleWishlistHandler(product, tokenReduxStore);
    } else {
      console.log('Please login first');
    }
  };

  /* ------------------------------------------------ */
  const wishlistButtonStateHandler = (
    globalUserState,
    globalUserDataState,
    localButtonState,
    localButtonStateSetter,
  ) => {
    if (globalUserState) {
      if (globalUserDataState.length > 0) {
        localButtonStateSetter(
          globalUserDataState.some((p) => p._id === product._id)
        );
      } else if (localButtonState) {
        localButtonStateSetter(!localButtonState);
      }
    } else {
      localButtonStateSetter(false);
    }
  };
  /* ------------------------------------------------ */


  /* --------------------------- COMPONENT LOGIC: --------------------------- */

  useEffect(
    () => wishlistButtonStateHandler(
      isUserLogin,
      wishlistStoreData,
      isExistInWishlist,
      setIsExistInWishlist,
    ),
    [wishlistStoreData, isUserLogin],
  );

  return (

    <div className={cn(styles.productCard, styles[classNames])}>
      <div className={styles.productCard__media}>
        <Link
          to={`/product/${itemNo}`}
          className={styles.productCard__media__productLink}
        >
          <div className={styles.productCard__media__productLink__imageWrapper}>
            <img
              className={
                styles.productCard__media__productLink__imageWrapper__image
              }
              src={imageUrls[0]}
              alt={name}
            />
          </div>
        </Link>
        {previousPrice !== currentPrice && (
          <span className={styles.productCard__media__saleLabel}>
            Sale
          </span>
        )}
        <div className={styles.productCard__media__overlay}>
          <div className={styles.productCard__media__overlay__action}>
            <ButtonIcon
              className={styles.buttonViewSingleProduct}
              onClick={() => { }}
            >
              <EyeIcon className={styles.eyeIcon} />
            </ButtonIcon>
            <ButtonIcon
              className={cn({
                [styles.buttonAddFavorites]: !isExistInWishlist,
                [styles.buttonAddFavorites_active]: isExistInWishlist,
              })}
              onClick={toggleWishlistWithLoginHandler}
            >
              <FavouriteIcon className={styles.favoriteIcon} />
            </ButtonIcon>
          </div>
        </div>
      </div>
      <div className={styles.productCard__main}>
        <RatingStars
          classNames={styles.productCard__main__rating}
          rate={rate}
        />
        <Link
          to={`/product/${itemNo}`}
          className={styles.productCard__main__titleLink}
        >
          {name}
        </Link>
        <div className={styles.productCard__main__property}>
          <div className={styles.productCard__main__property_thc}>
            <span>THC</span>
            {' '}
            {getThcCategory(thc)}
          </div>
          <div className={styles.productCard__main__property_cbd}>
            <span>CBD</span>
            {' '}
            {getCbdCategory(cbd)}
          </div>
        </div>
        <div className={styles.productCard__main__productPrices}>
          {previousPrice !== currentPrice && (
            <span
              className={styles.productCard__main__productPrices__previousPrice}
            >
              $
              {previousPrice.toFixed(2)}
            </span>
          )}
          <span
            className={styles.productCard__main__productPrices__currentPrice}
          >
            $
            {currentPrice.toFixed(2)}
          </span>
        </div>
        <Button className="whiteBtn" text="Add to cart" onClick={() => { }} />
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
  }),
};

export default ProductCard;

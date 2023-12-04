/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
// COMPONENT IMPORTS:
import Modal from '../Modal/Modal';
import ModalAddToCart from '../ModalAddToCart/ModalAddToCart';
import Button from '../Button/Button';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import RatingStars from '../RatingStars/RatingStars';
import FavouriteIcon from '../UI/FavouriteIcon';
import EyeIcon from '../UI/EyeIcon';

import getThcCategory from '../../helpers/getThcCategory';
import getCbdCategory from '../../helpers/getCbdCategory';
import wishlistButtonStateHandler from '../../helpers/wishlistButtonStateHandler';
import cartButtonStateHandler from '../../helpers/cartButtonStateHandler';
import { isModalAddToCartAction } from '../../store/modal/modal.slice';
import styles from './ProductCard.module.scss';

const { log } = console;

function ProductCard(props) {
  /* --------------------------- INIT PROPS: --------------------------- */
  const {
    actions: {
      toggleWishlistHandler,
      toggleCartHandler,
      toggleLocalCartHandler,
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

  /* --------------------------- INIT HOOKS: --------------------------- */

  const dispatch = useDispatch();

  /* --------------------------- REDUX STATE: --------------------------- */
  const { isUserLogin, token: tokenReduxStore } = useSelector(
    (state) => state.user,
  );
  const { wishList: wishlistStoreData } = useSelector(
    (state) => state.wishlist,
  );
  const { cart: cartStoreData, localCart: localCartStoreData } = useSelector((state) => state.cart);
  const { isModalAddToCart } = useSelector((state) => state.modal);

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
    toggleCartHandler(product, tokenReduxStore, cartStoreData);
  };
  const toggleCartWithoutLoginHandler = () => {
    toggleLocalCartHandler(product);
  };

  // MODAL:

  const handleModal = () => {
    dispatch(isModalAddToCartAction(!isModalAddToCart));
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
      isExistInCart,
      setIsExistInCart,
      product._id,
      cartStoreData,
      localCartStoreData,
    ),
    [cartStoreData, isUserLogin, localCartStoreData],
  );

  return (
    <div className={cn(styles.product_card, styles[classNames])}>
      <div className={styles.product_card__media}>
        <Link
          to={`/product/${itemNo}`}
          className={styles.product_card__img_link}
        >
          <picture className={styles.product_card__img_wrapper}>
            <img
              className={styles.product_card__img}
              src={imageUrls[0]}
              alt={name}
            />
          </picture>
        </Link>
        {previousPrice !== currentPrice && (
          <span className={styles.product_card__sale_label}>Sale</span>
        )}
        <div className={styles.product_card__overlay}>
          <div className={styles.product_card__action}>
            <ButtonIcon
              classNames={cn({
                [styles.btn__single_product_preview]: !isModalAddToCart,
                [styles.btn__single_product_preview_active]: isModalAddToCart,
              })}
              onClick={handleModal}
            >
              <EyeIcon className={styles.eye_icon} />
            </ButtonIcon>
            <ButtonIcon
              classNames={cn({
                [styles.btn__add_to_favorites]: !isExistInWishlist,
                [styles.btn__add_to_favorites_active]: isExistInWishlist,
              })}
              onClick={toggleWishlistWithLoginHandler}
            >
              <FavouriteIcon className={styles.favorite_icon} />
            </ButtonIcon>
          </div>
        </div>
      </div>
      <div className={styles.product_card__main}>
        <RatingStars rate={rate} />
        <Link
          to={`/product/${itemNo}`}
          className={styles.product_card__title_link}
        >
          <h3 className={styles.product_card__title}>{name}</h3>
        </Link>
        <ul className={styles.product_card__properties}>
          <li className={styles.product_card__properties_item}>
            <span>THC</span>
            {` ${getThcCategory(thc)}`}
          </li>
          <li className={styles.product_card__properties_item}>
            <span>CBD</span>
            {` ${getCbdCategory(cbd)}`}
          </li>
        </ul>
        <div className={styles.product_card__prices_wrapper}>
          {previousPrice !== currentPrice && (
            <span className={styles.product_card__previous_price}>
              {`$${previousPrice.toFixed(2)}`}
            </span>
          )}
          <span className={styles.product_card__current_price}>
            {`$${currentPrice.toFixed(2)}`}
          </span>
        </div>
        <Button
          className={cn({
            whiteBtn: !isExistInCart,
            whiteBtn_active: isExistInCart,
          })}
          text={isExistInCart ? 'Remove from cart' : 'Add to cart'}
          onClick={
            () => (isUserLogin
              ? toggleCartWithLoginHandler()
              : toggleCartWithoutLoginHandler())
          }
        />
      </div>
      {isModalAddToCart && (
        <Modal
          classNames={cn('add_to_cart__modal')}
          handleModal={handleModal}
        >
          <ModalAddToCart
            product={product}

          />
        </Modal>
      )}
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

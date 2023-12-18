import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
// CART IMPORTS:
import useToggleCart from '../../hooks/useToggleCart';
import useToggleWishlist from '../../hooks/useToggleWishlist';
import wishlistButtonStateHandler from '../../helpers/wishlistButtonStateHandler';
import cartButtonStateHandler from '../../helpers/cartButtonStateHandler';
// COMPONENT IMPORTS:
import SingleProductSwiper from '../SingleProductSwiper/SingleProductSwiper';
import Button from '../Button/Button';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import RatingStars from '../RatingStars/RatingStars';
import FavouriteIcon from '../UI/FavouriteIcon';
import LinkUnderline from '../LinkUnderline/LinkUnderline';
import styles from './ModalAddToCart.module.scss';

function ModalAddToCart(props) {
  const { handleModalAddToCart } = props;
  const [isExistInWishlist, setIsExistInWishlist] = useState(false);
  const [isExistInCart, setIsExistInCart] = useState(false);

  const {
    toggleCart: toggleCartHandler,
    toggleLocalCart: toggleLocalCartHandler,
  } = useToggleCart();

  const toggleWishlistHandler = useToggleWishlist();

  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct,
  );
  const { cart: cartStoreData, localCart: localCartStoreData } = useSelector(
    (state) => state.cart,
  );
  const { isUserLogin, token: tokenReduxStore } = useSelector(
    (state) => state.user,
  );
  const { wishList: wishlistStoreData } = useSelector(
    (state) => state.wishlist,
  );

  const toggleWishlistWithLoginHandler = () => {
    if (isUserLogin) {
      toggleWishlistHandler(
        selectedProduct,
        tokenReduxStore,
        wishlistStoreData,
      );
    } else {
      toast.error('Please login first!');
    }
  };

  const toggleCartWithLoginHandler = () => {
    toggleCartHandler(selectedProduct, tokenReduxStore, cartStoreData);
  };
  const toggleCartWithoutLoginHandler = () => {
    toggleLocalCartHandler(selectedProduct, localCartStoreData);
  };

  useEffect(
    () => wishlistButtonStateHandler(
      isUserLogin,
      wishlistStoreData,
      isExistInWishlist,
      setIsExistInWishlist,
      selectedProduct._id,
    ),
    [wishlistStoreData, isUserLogin],
  );

  useEffect(
    () => cartButtonStateHandler(
      isUserLogin,
      isExistInCart,
      setIsExistInCart,
      selectedProduct._id,
      cartStoreData,
      localCartStoreData,
    ),
    [cartStoreData, isUserLogin, localCartStoreData],
  );

  return (
    <div className={styles.modal_add_to_cart__container}>
      {selectedProduct && (
        <>
          <div className={styles.slider__wrapper}>
            <SingleProductSwiper images={selectedProduct.imageUrls} />
          </div>
          <div className={styles.about__info_wrapper}>
            <h2 className={styles.about__title}>{selectedProduct.name}</h2>
            <div className={styles.about__rate_wrapper}>
              <RatingStars rate={selectedProduct.rate} />
              <p className={styles.about__rate_text}>
                {`(${selectedProduct.reviews.length} customer reviews)`}
              </p>
            </div>
            <p className={styles.about__descr_short}>
              {selectedProduct.description.short}
            </p>
            <div className={styles.about__action_wrapper}>
              <p className={styles.about__current_price}>
                {`$${selectedProduct.currentPrice.toFixed(2)}`}
              </p>
              <Button
                type="button"
                className={cn({
                  orangeBtn: !isExistInCart,
                  whiteBtn_active: isExistInCart,
                })}
                text={isExistInCart ? 'Remove from cart' : 'Add to cart'}
                onClick={() => (isUserLogin
                  ? toggleCartWithLoginHandler()
                  : toggleCartWithoutLoginHandler())}
              />
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
            <LinkUnderline
              to={`/product/${selectedProduct.itemNo}`}
              onClick={handleModalAddToCart}
            >
              View Details
            </LinkUnderline>
          </div>
        </>
      )}
    </div>
  );
}

export default ModalAddToCart;

ModalAddToCart.propTypes = {
  handleModalAddToCart: PropTypes.func,
};

ModalAddToCart.defaultProps = {
  handleModalAddToCart: () => {},
};

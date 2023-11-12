import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import SingleProductSwiper from '../SingleProductSwiper/SingleProductSwiper';
import Button from '../Button/Button';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import RatingStars from '../RatingStars/RatingStars';
import FavouriteIcon from '../UI/FavouriteIcon';
import styles from './ModalAddToCart.module.scss';

function ModalAddToCart({
  // showModalAddToCart,
  // setShowModalAddToCart,
  classNames,
  product,
}) {
  const {
    name,
    rate,
    reviews,
    description,
    currentPrice,
  } = product;
  return (
    <div className={cn(styles.modalAddToCart__container, styles[classNames])}>
      <div className={styles.aboutProduct__main}>
        <div className={styles.slider__wrapper}>
          <SingleProductSwiper />
        </div>
        <div className={styles.aboutProduct__info_wrapper}>
          <h2 className={styles.aboutProduct__title}>{name}</h2>
          <div className={styles.aboutProduct__rate_wrapper}>
            <RatingStars rate={rate} />
            <div className={styles.aboutProduct__rate_text}>
              {reviews.length}
              customer reviews
            </div>
          </div>
          <div className={styles.aboutProduct__descr_short}>
            {description.short}
          </div>
          <div className={styles.aboutProduct__action_wrapper}>
            <div className={styles.aboutProduct__current_price}>
              {currentPrice}
            </div>
            <Button className="btnOrange" />
            <ButtonIcon
              // className={cn({
              //   [styles.btn__addToFavorites]: !isExistInWishlist,
              //   [styles.btn__addToFavorites_active]: isExistInWishlist,
              // })}
              // onClick={toggleWishlistWithLoginHandler}
            // eslint-disable-next-line react/jsx-closing-bracket-location
            >
              <FavouriteIcon className={styles.favoriteIcon} />
            </ButtonIcon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAddToCart;

ModalAddToCart.propTypes = {
  //   products: PropTypes.array,
  // showModalAddToCart: PropTypes.bool.isRequired,
  // setShowModalAddToCart: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/require-default-props, react/no-typos
  product: PropTypes.obj,
  // itemNo: PropTypes.number.isRequired,
  // previousPrice: PropTypes.number.isRequired,
  // currentPrice: PropTypes.number.isRequired,
  // rate: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  classNames: PropTypes.isRequired,
  // closeButton: PropTypes.func,
  // closeModal: PropTypes.bool,
  // handleOutsideClick: PropTypes.func,
  // handleToggleFavoritesModal: PropTypes.func,
  // handleAddToCart: PropTypes.func,
  // header: PropTypes.object,
  // text: PropTypes.any,
  // totalPrice: PropTypes.number,
};

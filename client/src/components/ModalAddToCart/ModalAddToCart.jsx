import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import SingleProductSwiper from '../SingleProductSwiper/SingleProductSwiper';
import Button from '../Button/Button';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import RatingStars from '../RatingStars/RatingStars';
import FavouriteIcon from '../UI/FavouriteIcon';
import LinkUnderline from '../LinkUnderline/LinkUnderline';
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
      <div className={styles.slider__wrapper}>
        <SingleProductSwiper />
      </div>
      <div className={styles.aboutProduct__info_wrapper}>
        <h2 className={styles.aboutProduct__title}>{name}</h2>
        <div className={styles.aboutProduct__rate_wrapper}>
          <RatingStars rate={rate} />
          <p className={styles.aboutProduct__rate_text}>
            {`${reviews.length} customer reviews`}
          </p>
        </div>
        <p className={styles.aboutProduct__descr_short}>
          {description.short}
        </p>
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
        <LinkUnderline to="/products">View Details</LinkUnderline>
      </div>
    </div>
  );
}

export default ModalAddToCart;

ModalAddToCart.propTypes = {
  // eslint-disable-next-line react/require-default-props, react/no-typos
  product: PropTypes.obj,
  // itemNo: PropTypes.number.isRequired,
  // previousPrice: PropTypes.number.isRequired,
  // currentPrice: PropTypes.number.isRequired,
  // rate: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  classNames: PropTypes.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
// import cn from 'classnames';
import SingleProductSwiper from '../SingleProductSwiper/SingleProductSwiper';
import Button from '../Button/Button';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import RatingStars from '../RatingStars/RatingStars';
import FavouriteIcon from '../UI/FavouriteIcon';
import LinkUnderline from '../LinkUnderline/LinkUnderline';
import styles from './ModalAddToCart.module.scss';

function ModalAddToCart({
  // actions: {
  //   toggleCartWithLoginHandler,
  //   toggleWishlistWithLoginHandler,
  // },
  product,
}) {
  // console.log(product);
  const {
    itemNo,
    name,
    rate,
    reviews,
    description,
    currentPrice,
  } = product;
  return (
    <div className={styles.modal_add_to_cart__container}>
      <div className={styles.slider__wrapper}>
        <SingleProductSwiper product={product} />
      </div>
      <div className={styles.about__info_wrapper}>
        <h2 className={styles.about__title}>{name}</h2>
        <div className={styles.about__rate_wrapper}>
          <RatingStars rate={rate} />
          <p className={styles.about__rate_text}>
            {`${reviews.length} customer reviews`}
          </p>
        </div>
        <p className={styles.about__descr_short}>{description.short}</p>
        <div className={styles.about__action_wrapper}>
          <p className={styles.about__current_price}>{`$${currentPrice.toFixed(2)}`}</p>
          <Button
            className="orangeBtn"
            text="Add to Cart"
            // onClick={() => toggleCartWithLoginHandler()}
          />
          <ButtonIcon
            classNames={styles.btn__add_to_favorites}
            // classNames={cn({
            //   [styles.btn__add_to_favorites]: !isExistInWishlist,
            //   [styles.btn__add_to_favorites_active]: isExistInWishlist,
            // })}
            // onClick={() => toggleWishlistWithLoginHandler()}
          >
            <FavouriteIcon className={styles.favorite_icon} />
          </ButtonIcon>
        </div>
        <LinkUnderline to={`/product/${itemNo}`}>View Details</LinkUnderline>
      </div>
    </div>
  );
}

export default ModalAddToCart;

ModalAddToCart.propTypes = {
  // eslint-disable-next-line react/require-default-props
  product: PropTypes.shape({
    imageUrls: PropTypes.arrayOf(PropTypes.string),
    reviews: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.arrayOf(PropTypes.string),
    itemNo: PropTypes.number.isRequired,
    currentPrice: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    name: PropTypes.string,
  }),
  // eslint-disable-next-line react/require-default-props
  actions: PropTypes.shape({
    toggleCartWithLoginHandler: PropTypes.func,
    toggleWishlistWithLoginHandler: PropTypes.func,
  }),
};

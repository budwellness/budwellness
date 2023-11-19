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
    itemNo,
    name,
    rate,
    reviews,
    description,
    currentPrice,
  } = product;
  return (
    <div className={cn(styles.modal_AddToCart__container, styles[classNames])}>
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
          <Button className="orangeBtn" text="Add to Cart" />
          <ButtonIcon 
            classNames="btn__addToFavorites"
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
        <LinkUnderline
          // style={}
          to={`/product/${itemNo}`}
        >
          View Details
        </LinkUnderline>
      </div>
    </div>
  );
}

export default ModalAddToCart;

ModalAddToCart.propTypes = {
  // eslint-disable-next-line react/require-default-props, react/no-typos
  product: PropTypes.obj,
  itemNo: PropTypes.number.isRequired,
  // previousPrice: PropTypes.number.isRequired,
  // currentPrice: PropTypes.number.isRequired,
  // rate: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  classNames: PropTypes.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import SingleProductSwiper from '../SingleProductSwiper/SingleProductSwiper';
import Button from '../Button/Button';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import RatingStars from '../RatingStars/RatingStars';
import FavouriteIcon from '../UI/FavouriteIcon';
import LinkUnderline from '../LinkUnderline/LinkUnderline';
import styles from './ModalAddToCart.module.scss';

const { log } = console;

function ModalAddToCart(props) {
  const {
  //   actions: { toggleCartWithLoginHandler, toggleWishlistWithLoginHandler },
    handleModalAddToCart,
  } = props;

  const selectedProduct = useSelector((state) => state.products.selectedProduct);

  log(selectedProduct);
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
              <Button className="orangeBtn" text="Add to Cart" />
              <ButtonIcon classNames={styles.btn__add_to_favorites}>
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

  actions: PropTypes.shape({
    toggleCartWithLoginHandler: PropTypes.func,
    toggleWishlistWithLoginHandler: PropTypes.func,
  }),
  handleModalAddToCart: PropTypes.func,
};

ModalAddToCart.defaultProps = {
  actions: {
    toggleCartHandler: () => { },
    toggleWishlistHandler: () => { },
  },
  handleModalAddToCart: () => { },
};

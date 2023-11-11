import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import SingleProductSwiper from '../SingleProductSwiper/SingleProductSwiper';
import styles from './ModalAddToCart.module.scss';

function ModalAddToCart({
  showModalAddToCart,
  // setShowModalAddToCart,
  product,
}) {
  const { name } = product;
  return (
    <div
      className={cn(styles.containerModalAddToCart, {
        [styles.openCart]: showModalAddToCart,
      })}
    >
      <div className={styles.about_main}>
        <SingleProductSwiper className={styles.productSwiper} />
        <div className={styles.about_main}>
          <h2 className={styles.modalAddToCartTitle}>{name}</h2>
        </div>
      </div>
    </div>
  );
}

export default ModalAddToCart;

ModalAddToCart.propTypes = {
  //   products: PropTypes.array,
  showModalAddToCart: PropTypes.bool.isRequired,
  // setShowModalAddToCart: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/require-default-props, react/no-typos
  product: PropTypes.obj,
  // itemNo: PropTypes.number.isRequired,
  // previousPrice: PropTypes.number.isRequired,
  // currentPrice: PropTypes.number.isRequired,
  // rate: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  //   classNames: PropTypes.string,
  // closeButton: PropTypes.func,
  // closeModal: PropTypes.bool,
  // handleOutsideClick: PropTypes.func,
  // handleToggleFavoritesModal: PropTypes.func,
  // handleAddToCart: PropTypes.func,
  // header: PropTypes.object,
  // text: PropTypes.any,
  // totalPrice: PropTypes.number,
};

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import SingleProductSwiper from '../SingleProductSwiper/SingleProductSwiper';
import styles from './ModalAddToCart.module.scss';

function ModalAddToCart({ showModalAddToCart, setShowModalAddToCart }) {
  return (
    <div className={cn(styles.modalAddToCart, { [styles.openCart]: showModalAddToCart })}>
      <div className={styles.cartHeader}>
        <SingleProductSwiper className={styles.productSwiper} />
        <h2 className={styles.modalAddToCartTitle}>Cart</h2>
        <button
          className={styles.closeBtn}
          type="button"
          onClick={() => setShowModalAddToCart(false)}
        >
          {/* <CloseIcon /> */}
        </button>
      </div>
    </div>
  );
}

export default ModalAddToCart;

ModalAddToCart.propTypes = {
//   products: PropTypes.array,
  showModalAddToCart: PropTypes.bool.isRequired,
  setShowModalAddToCart: PropTypes.bool.isRequired,
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

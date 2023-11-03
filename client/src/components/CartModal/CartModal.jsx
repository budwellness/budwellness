import React from 'react';
import cn from 'classnames';

import CartWrapperModal from '../CartWrapperModal/CartWrapperModal';

import styles from './CartModal.module.scss';

// eslint-disable-next-line react/prop-types
function CartModal({ showCartModal, setShowCartModal }) {
  return (
    <div className={cn(styles.cartModal, { [styles.openCart]: showCartModal })}>
      <div className={styles.cartHeader}>
        <h2 className={styles.cartTitle}>Cart</h2>
        <button
          className={styles.cartHeaderButton}
          type="button"
          onClick={() => setShowCartModal(false)}
        >
          &times;
        </button>
      </div>
      <CartWrapperModal />
      {/* <div className={styles.cartModalFooter}>footer</div> */}
    </div>
  );
}

export default CartModal;

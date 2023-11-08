/* eslint-disable */
import React from 'react';
import cn from 'classnames';

import CartWrapperModal from '../CartWrapperModal/CartWrapperModal';
import CloseIcon from '../../assets/icons/CloseIcon';

import styles from './CartModal.module.scss';

function CartModal({ showCartModal, setShowCartModal }) {
  return (
    <div className={cn(styles.cartModal, { [styles.openCart]: showCartModal })}>
      <div className={styles.cartHeader}>
        <h2 className={styles.cartTitle}>Cart</h2>
        <button
          className={styles.closeBtn}
          type="button"
          onClick={() => setShowCartModal(false)}
        >
          <CloseIcon />
        </button>
      </div>
      <CartWrapperModal />
    </div>
  );
}

export default CartModal;

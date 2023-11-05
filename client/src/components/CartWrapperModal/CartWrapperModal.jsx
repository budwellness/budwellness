import React from 'react';
import CartModalItem from './CartModalItem/CartModalItem';
import Button from '../Button/Button';

import styles from './CartWrapperModal.module.scss';

function CartWrapperModal() {
  return (
    <>
      <ul className={styles.list}>
        <CartModalItem />
      </ul>
      <div className={styles.footer}>
        <span className={styles.footerTitle}>Total</span>
        <span className={styles.footerPrice}>$29.43</span>
      </div>
      <Button
        type="button"
        text="Proceed to checkout"
        className="orangeBtn"
        onClick={() => {}}
      />
    </>
  );
}

export default CartWrapperModal;

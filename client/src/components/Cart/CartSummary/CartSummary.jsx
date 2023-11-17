import React from 'react';
import { useSelector } from 'react-redux';

import Button from '../../Button/Button';
import ShippingForm from '../../forms/ShippingForm/ShippingForm';

import styles from './CartSummary.module.scss';

export default function CartSummary() {
  const { cart: currentCart } = useSelector((state) => state.cart);

  const total = currentCart.reduce(
    (startValue, currObj) => startValue + currObj.cartQuantity * currObj.product.currentPrice,
    0,
  );

  return (
    <div className={styles.cart_summary}>
      <h3 className={styles.cart_summaryHeader}>Order Summary</h3>
      <ShippingForm />
      <div className={styles.cart_summaryTable}>
        <div className={styles.cart_summaryTable_row}>
          <span className={styles.property}>Items in cart</span>
          <span className={styles.value}>{currentCart.length}</span>
        </div>
        <div className={styles.cart_summaryTable_row}>
          <span className={styles.property}>Shipping</span>
          <span className={styles.value}>Free</span>
        </div>
        <div className={styles.cart_summaryTable_rowTotal}>
          <span className={styles.property}>Total</span>
          <span className={styles.value}>
            $
            {total.toFixed(2)}
          </span>
        </div>
      </div>
      <Button text="Checkout" className="orangeBtn" onClick={() => {}} />
    </div>
  );
}

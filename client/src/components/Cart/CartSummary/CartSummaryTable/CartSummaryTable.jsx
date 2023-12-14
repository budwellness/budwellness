/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useSelector } from 'react-redux';

import countTotalPrice from '../../../../helpers/countTotalPrice';

import styles from './CartSummaryTable.module.scss';

export default function CartSummaryTable() {
  const { isUserLogin } = useSelector((state) => state.user);
  const { cart: cartStoreData, localCart: localCartStoreData } = useSelector(
    (state) => state.cart,
  );
  // eslint-disable-next-line no-confusing-arrow
  const countTotalPriceHandler = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    isUserLogin
      ? countTotalPrice(cartStoreData)
      : countTotalPrice(localCartStoreData);

  return (
    <div className={styles.cart_summaryTable}>
      <div className={styles.cart_summaryTable_row}>
        <span className={styles.property}>Items in cart</span>
        <span className={styles.value}>
          {isUserLogin ? cartStoreData.length : localCartStoreData.length}
        </span>
      </div>
      <div className={styles.cart_summaryTable_row}>
        <span className={styles.property}>Shipping</span>
        <span className={styles.value}>Free</span>
      </div>
      <div className={styles.cart_summaryTable_rowTotal}>
        <span className={styles.property}>Total</span>
        <span className={styles.value}>${countTotalPriceHandler()}</span>
      </div>
    </div>
  );
}

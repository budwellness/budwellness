import React from 'react';
import { useSelector } from 'react-redux';

import Button from '../../Button/Button';
import ShippingForm from '../../forms/ShippingForm/ShippingForm';

import styles from './CartSummary.module.scss';
import countTotalPrice from '../../../helpers/countTotalPrice';

export default function CartSummary() {

  const { isUserLogin } = useSelector((state) => state.user)
  const {
    cart: cartStoreData,
    localCart: localCartStoreData,
  } = useSelector((state) => state.cart);


  const countTotalPriceHandler = () =>
    isUserLogin ?
      countTotalPrice(cartStoreData) :
      countTotalPrice(localCartStoreData)

  return (
    <div className={styles.cart_summary}>
      <h3 className={styles.cart_summaryHeader}>Order Summary</h3>
      <ShippingForm />
      <div className={styles.cart_summaryTable}>
        <div className={styles.cart_summaryTable_row}>
          <span className={styles.property}>Items in cart</span>
          {isUserLogin && <span className={styles.value}>{cartStoreData.length}</span>}
          {!isUserLogin && <span className={styles.value}>{localCartStoreData.length}</span>}
        </div>
        <div className={styles.cart_summaryTable_row}>
          <span className={styles.property}>Shipping</span>
          <span className={styles.value}>Free</span>
        </div>
        <div className={styles.cart_summaryTable_rowTotal}>
          <span className={styles.property}>Total</span>
          <span className={styles.value}>
            $
            {countTotalPriceHandler()}
          </span>
        </div>
      </div>
      <Button text="Checkout" className="orangeBtn" onClick={() => { }} />
    </div>
  );
}

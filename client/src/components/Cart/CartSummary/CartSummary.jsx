import React from 'react';

import ShippingForm from '../../forms/ShippingForm/ShippingForm';

import styles from './CartSummary.module.scss';

export default function CartSummary() {
  return (
    <div className={styles.cart_summary}>
      <h3 className={styles.cart_summaryHeader}>Order Summary</h3>
      <ShippingForm />
    </div>
  );
}

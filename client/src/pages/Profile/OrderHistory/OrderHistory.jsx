import React from 'react';
import styles from './OrderHistory.module.scss';
import ArrowProfile from '../../../components/UI/ArrowProfile';

function OrderHistory() {
  return (
    <section className={styles.container}>
      <div className={styles.orderCard}>
        <div className={styles.orderInfo}>
          <p className={styles.orderNum}>Order 55564</p>
          <p className={styles.orderDate}>28 dec 2023</p>
          <p className={styles.orderStatus}>Done</p>
        </div>
        <div className={styles.total}>
          <p className={styles.totalTitle}>Total</p>
          <p className={styles.totalSum}>$74.72</p>
        </div>
        <div className={styles.orderImage}>
          <p className={styles.orderCount}>+2</p>
          <img
            src="/images/chocolate_brownies_1.png"
            width="90"
            height="90"
            alt="product_image_1"
          />
          <img
            src="/images/chocolate_brownies_2.png"
            width="90"
            height="90"
            alt="product_image_2"
          />
          <img
            src="/images/chocolate_brownies_3.png"
            width="90"
            height="90"
            alt="product_image_3"
          />
        </div>
        <ArrowProfile className={styles.arrow} />
      </div>
    </section>
  );
}

export default OrderHistory;

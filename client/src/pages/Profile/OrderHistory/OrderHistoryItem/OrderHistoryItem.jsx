import React, { useEffect, useState } from 'react';
import cn from 'classnames'
import ArrowProfile from '../../../../components/UI/ArrowProfile';


import formatDate from '../../../../helpers/formatDate';
import OrderHistoryCard from '../OrderHistoryCard/OrderHistoryCard';
import styles from './OrderHistoryItem.module.scss';
const { log } = console;

function OrderHistoryItem(props) {

  /* --------------------------- INIT PROPS: --------------------------- */
  const {
    tempOrderNo,
    date,
    canceled,
    totalSum,
    status,
    products
  } = props.item

  /* --------------------------- COMPONENT STATE: --------------------------- */
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [remainingCount, setRemainingCount] = useState(0);


  const extractImageName = (path) => {
    const parts = path.split('/');
    const fileName = parts[parts.length - 1];
    const fileNameWithoutExtension = fileName.split('.')[0];
    return fileNameWithoutExtension;
  }

  useEffect(() => {
    const MAX_IMAGES_TO_DISPLAY = 3;
    const remaining = products.length - MAX_IMAGES_TO_DISPLAY;

    setRemainingCount(remaining > 0 ? remaining : 0);
    setDisplayedProducts(products.slice(0, MAX_IMAGES_TO_DISPLAY));
  }, [products]);


  return (
    <section className={styles.container}>
      <div className={cn(styles.orderCard)}>
        <div className={styles.orderInfo}>
          <p className={styles.orderNum}>
            Order {tempOrderNo}
          </p>
          {/* <p className={styles.orderDate}>{date}</p> */}
          <p className={styles.orderDate}>{formatDate(date)}</p>
          <p className={styles.orderStatus}>Done</p>
        </div>
        <div className={styles.total}>
          <p className={styles.totalTitle}>Total</p>
          <p className={styles.totalSum}>
            {totalSum.toFixed(2)}
            <span className={styles.currency}>$</span>
          </p>
        </div>
        <div className={styles.orderImage}>
          {remainingCount > 0 && (
            <p className={styles.orderCount}>
              +
              {remainingCount}
            </p>
          )}
          {displayedProducts.map((item) => (
            <img
              key={item._id}
              src={item.product.imageUrls[0]}
              width="90"
              height="90"
              alt={extractImageName(item.product.imageUrls[0])}
            />
          ))}
        </div>
        <ArrowProfile className={styles.arrow} />
      </div>
      <div className={styles.orderHistoryWrapper__item}>
        <OrderHistoryCard />
      </div>
    </section>
  );
}

export default OrderHistoryItem;

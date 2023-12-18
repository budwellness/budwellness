import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import extractImageName from '../../../../helpers/extractImageName';
import formatDate from '../../../../helpers/formatDate';
import OrderHistoryCard from '../OrderHistoryCard/OrderHistoryCard';
import ArrowProfile from '../../../../components/UI/ArrowProfile';
import styles from './OrderHistoryItem.module.scss';

function OrderHistoryItem({ item }) {
  /* --------------------------- INIT PROPS: --------------------------- */
  const {
    tempOrderNo,
    date,
    canceled,
    totalSum,
    status,
    products,
  } = item;

  /* --------------------------- COMPONENT STATE: --------------------------- */
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [remainingCount, setRemainingCount] = useState(0);
  const [displayCards, setDisplayCards] = useState(false);

  useEffect(() => {
    const MAX_IMAGES_TO_DISPLAY = 3;
    const remaining = products.length - MAX_IMAGES_TO_DISPLAY;

    setRemainingCount(remaining > 0 ? remaining : 0);
    setDisplayedProducts(products.slice(0, MAX_IMAGES_TO_DISPLAY));
  }, [products]);

  const onClickHandler = () => {
    setDisplayCards((prevDisplayCards) => !prevDisplayCards);
  };

  const defineOrderStatus = (isCancel, orderStatus) => {
    if (isCancel === true) {
      return 'canceled';
    } if (isCancel === false && orderStatus === 'not shipped') {
      return 'inprogress';
    } if (isCancel === false && orderStatus === 'shipped') {
      return 'done';
    }
    return 'unknown';
  };

  const statuses = {
    canceled: 'Canceled',
    inprogress: 'In Progress',
    done: 'Done',
  };

  return (

    <section className={styles.container}>
      <div
        onClick={onClickHandler}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            onClickHandler();
          }
        }}
        role="button"
        tabIndex={0}
        className={cn(styles.orderCard, styles[defineOrderStatus(canceled, status)])}
      >
        <div className={styles.orderInfo}>
          <p className={styles.orderNum}>
            Order
            {' '}
            {tempOrderNo}
          </p>
          <p className={styles.orderDate}>{formatDate(date)}</p>
          <p className={cn(styles.orderStatus, styles[defineOrderStatus(canceled, status)])}>
            {statuses[defineOrderStatus(canceled, status)]}
          </p>
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
          {displayedProducts.map((el) => (
            <img
              key={el._id}
              src={el.product.imageUrls[0]}
              width="90"
              height="90"
              alt={extractImageName(el.product.imageUrls[0])}
            />
          ))}
        </div>
        {!displayCards && <ArrowProfile className={styles.arrow} />}
        {displayCards && <ArrowProfile className={`${styles.arrow} ${styles.rotate}`} />}

      </div>
      <OrderHistoryCard display={displayCards} products={products} />
    </section>
  );
}

OrderHistoryItem.propTypes = {
  item: PropTypes.shape({
    tempOrderNo: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    canceled: PropTypes.bool.isRequired,
    totalSum: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        product: PropTypes.shape({
          imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
        }).isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default OrderHistoryItem;

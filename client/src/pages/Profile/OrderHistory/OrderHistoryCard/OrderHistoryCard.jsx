import React from 'react';
import styles from './OrderHistoryCard.module.scss';

function OrderHistoryCard() {
  return (
    <div className={styles.orderHistoryWrapper__item}>
      <div className={styles.elem}>
        <div className={styles.imgWpapper}>
          <img
            src="/images/seeds_white_label_1.png"
            alt="product"
            className={styles.img}
          />
        </div>

        <div className={styles.mainInfo}>
          <h3 className={styles.title}>
            {' '}
            pure power plant feminized seeds by white label
          </h3>
          <p className={styles.weight}>3.5mg</p>
          {' '}
          {/* size+sizeType  */}
          {/* <p className={styles.weight}>mg</p> sizeType */}
        </div>

        <div className={styles.quantity}>
          <div className={styles.quantityTextWrapper}>
            <span className={styles.quantityText}>2</span>
            {' '}
            {/* quantity  */}
            <span className={styles.quantityText}>th</span>
          </div>
        </div>

        <div className={styles.priceWrapper}>
          <p className={styles.priceText}>Subtotal</p>
          <p className={styles.price}>
            $
            <span>29.96</span>
          </p>
        </div>
      </div>

      <div className={styles.elem}>
        <div className={styles.imgWpapper}>
          <img
            src="/images/chocolate_brownies_1.png"
            alt="product"
            className={styles.img}
          />
        </div>

        <div className={styles.mainInfo}>
          <h3 className={styles.title}> chocolate brownies by olli</h3>
          <p className={styles.weight}>3.5mg</p>
          {' '}
          {/* size+sizeType  */}
          {/* <p className={styles.weight}>mg</p> sizeType */}
        </div>

        <div className={styles.quantity}>
          <div className={styles.quantityTextWrapper}>
            <span className={styles.quantityText}>2</span>
            {' '}
            {/* quantity  */}
            <span className={styles.quantityText}>th</span>
          </div>
        </div>

        <div className={styles.priceWrapper}>
          <p className={styles.priceText}>Subtotal</p>
          <p className={styles.price}>
            $
            <span>29.96</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderHistoryCard;

/* eslint-disable */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import extractImageName from '../../../../helpers/extractImageName';
import styles from './OrderHistoryCard.module.scss';
function OrderHistoryCard({ products, display }) {

  const [orderHistoryCards, setOrderHistoryCards] = useState([])


  useEffect(() => {
    const cards = products.map(({ product, cartQuantity }) => (
      <div key={product._id} className={styles.elem}>
        <div className={styles.imgWpapper}>
          <img
            src={product.imageUrls[0]}
            alt={extractImageName(product.imageUrls[0])}
            className={styles.img}
          />
        </div>

        <div className={styles.mainInfo}>
          <h3 className={styles.title}>
            {product.name}
          </h3>
          <p className={styles.weight}>{`${product.size}${product.sizeType}`}</p>
        </div>
        <div className={styles.quantity}>
          <div className={styles.quantityTextWrapper}>
            <span className={styles.quantityText}>{cartQuantity}</span>
            <span className={styles.quantityText}>th</span>
          </div>
        </div>

        <div className={styles.priceWrapper}>
          <p className={styles.priceText}>Subtotal</p>
          <p className={styles.price}>
            $
            <span>{(product.currentPrice * cartQuantity).toFixed(2)}</span>
          </p>
        </div>
      </div>
    ))
    setOrderHistoryCards(cards)
  }, [products])


  return (
    <div className={cn({
      [styles.orderHistoryWrapper__item__active]: display,
      [styles.orderHistoryWrapper__item]: !display
    })}>
      {orderHistoryCards}
    </div>
  );
}

export default OrderHistoryCard;

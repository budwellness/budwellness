import React from 'react';
import PropTypes from 'prop-types';
import cN from 'classnames';

import CloseIcon from '../../../UI/CloseIcon';

import styles from './CartCard.module.scss';

export default function CartCard({ card }) {
  return (
    <li className={styles.cart_mainList_item}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_item}>
          <div className={styles.wrapper_itemMedia}>
            <picture>
              <img
                className={styles.itemMediaImg}
                src={card.imageUrls[0]}
                alt={card.name}
              />
            </picture>
          </div>
          <div className={styles.wrapper_itemInfo}>
            <h4 className={styles.itemInfo_title}>{card.name}</h4>
            <span className={styles.itemInfo_volume}>??mg</span>
          </div>
        </div>
        <div className={styles.wrapper_price}>
          {card.previousPrice !== card.currentPrice && (
            <span className={cN(styles.price, styles.priceOld)}>
              ${card.previousPrice.toFixed(2)}
            </span>
          )}
          <span className={styles.price}>${card.currentPrice.toFixed(2)}</span>
        </div>
        <div className={cN(styles.wrapper_price, styles.wrapper_priceSubtotal)}>
          <h5 className={styles.priceSubtotal_title}>Subtotal</h5>
          <span className={styles.priceSubtotal_total}>$??.??</span>
        </div>
        <div className={styles.quantity}>- 1 +</div>
        <button type="button" className={styles.btnClose} onClick={() => {}}>
          <CloseIcon className={styles.iconClose} />
        </button>
      </div>
    </li>
  );
}

CartCard.propTypes = {
  card: PropTypes.shape,
};
CartCard.defaultProps = {
  card: {},
};

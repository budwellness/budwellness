import React from 'react';
import PropTypes from 'prop-types';
import cN from 'classnames';

import CloseIcon from '../../../UI/CloseIcon';
import ButtonCount from '../../../ButtonCount/ButtonCount';

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
                src={card.product.imageUrls[0]}
                alt={card.product.name}
              />
            </picture>
          </div>
          <div className={styles.wrapper_itemInfo}>
            <h4 className={styles.itemInfo_title}>{card.product.name}</h4>
            <span className={styles.itemInfo_volume}>
              {card.product.size}
              {card.product.sizeType}
            </span>
          </div>
        </div>
        <div className={styles.wrapper_price}>
          {card.product.previousPrice !== card.product.currentPrice && (
            <span className={cN(styles.price, styles.priceOld)}>
              ${card.product.previousPrice.toFixed(2)}
            </span>
          )}
          <span className={styles.price}>
            ${card.product.currentPrice.toFixed(2)}
          </span>
        </div>
        <div className={cN(styles.wrapper_price, styles.wrapper_priceSubtotal)}>
          <h5 className={styles.priceSubtotal_title}>Subtotal</h5>
          <span className={styles.priceSubtotal_total}>
            ${(card.product.currentPrice * card.cartQuantity).toFixed(2)}
          </span>
        </div>
        <div className={styles.quantity}>
          <ButtonCount quantity={card.product.quantity} />
        </div>
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

import React from 'react';
import PropTypes from 'prop-types';

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

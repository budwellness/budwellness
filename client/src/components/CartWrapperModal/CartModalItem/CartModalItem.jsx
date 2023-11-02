/* eslint-disable */
import React from 'react';

import styles from './CartModalItem.module.scss'

const CartModalItem = () => {
  return (
    <li className={styles.cartItem}>
     <div><a href='#'>img</a></div>
      <div className={styles.content}>
        <a href='#'>Title</a>
        <span>price</span>
        <div>
          <span>+</span>
          <input type='number' />
          <span>-</span>
        </div>
        <a href='#'>remove</a>
      </div>
    </li>
  );
};

export default CartModalItem;
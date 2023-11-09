/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';

// COMPONENT IMPORTS:
import CartCard from '../CartCard/CartCard';

import styles from './CartList.module.scss';

export default function CartList() {
  /* --------------------------- REDUX STATE: --------------------------- */
  const { cart: cartStoreData } = useSelector((state) => state.cart);
  const arrayItems = cartStoreData.map((product) => (
    <CartCard key={product._id} card={product} />
  ));

  return (
    <ul className={styles.cart_mainList}>
      {arrayItems.length === 0
        ? <p>Cart is empty...</p>
        : arrayItems}
    </ul>
  );
}

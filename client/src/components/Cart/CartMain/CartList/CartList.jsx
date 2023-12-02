import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// COMPONENT IMPORTS:
import CartCard from '../CartCard/CartCard';

// PRODUCT IMPORTS:

import styles from './CartList.module.scss';

export default function CartList() {

  const [localCartItem, setLocalCartItem] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  /* --------------------------- REDUX STATE: --------------------------- */
  const { cart: cartStoreData, localCart: localCartStoreData } = useSelector((state) => state.cart);
  const { isUserLogin } = useSelector((state) => state.user);

  /* --------------------------- COMPONENT LOGIC: --------------------------- */

  useEffect(() => {
    if (!isUserLogin) {
      setLocalCartItem(localCartStoreData.map((product) => (
        <CartCard key={product.product._id} card={product} />
      )))
    } else {
      setCartItem(cartStoreData.map((product) => (
        <CartCard key={product._id} card={product} />
      )))
    }
  }, [cartStoreData, localCartStoreData, isUserLogin]);

  return (

    <div>
      {isUserLogin ?
        (
          <ul className={styles.cart_mainList}>
            {cartItem.length === 0
              ? <p>Cart is empty...</p>
              : cartItem}
          </ul>
        ) :
        (
          <ul className={styles.cart_mainList}>
            {localCartItem.length === 0
              ? <p>Cart is empty...</p>
              : localCartItem}
          </ul>
        )
      }
    </div>

  );
}

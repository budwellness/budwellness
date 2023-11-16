import React from 'react';
import { useSelector } from 'react-redux';
import CartList from './CartList/CartList';
import LinkUnderline from '../../LinkUnderline/LinkUnderline';
import Button from '../../Button/Button';

import styles from './CartMain.module.scss';

export default function CartMain() {
  /* --------------------------- REDUX STATE: --------------------------- */
  const { cart: cartStoreData } = useSelector((state) => state.cart);
  return (
    <div className={styles.cart_main}>
      <h3 className={styles.cart_mainHeader}>
        Products
        <span>
          {cartStoreData.length}
          {' '}
          Items
        </span>
      </h3>
      <CartList />
      <div className={styles.cart_mainAction}>
        <LinkUnderline to="/products">Keep Shopping</LinkUnderline>
        <Button text="Contacts" className="whiteBtn" onClick={() => {}} />
      </div>
    </div>
  );
}

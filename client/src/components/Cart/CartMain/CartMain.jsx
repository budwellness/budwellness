import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CartList from './CartList/CartList';
import LinkUnderline from '../../LinkUnderline/LinkUnderline';
import Button from '../../Button/Button';

import styles from './CartMain.module.scss';

export default function CartMain() {

  const navigate = useNavigate();
  /* --------------------------- REDUX STATE: --------------------------- */
  const { cart: cartStoreData, localCart: localCartStoreData } = useSelector((state) => state.cart);
  const { isUserLogin } = useSelector((state) => state.user);

  return (
    <div className={styles.cart_main}>
      <h3 className={styles.cart_mainHeader}>
        Products
        {isUserLogin && <span>{`${cartStoreData.length} Items`}</span>}
        {!isUserLogin && <span>{`${localCartStoreData.length} Items`}</span>}
      </h3>
      <CartList />
      <div className={styles.cart_mainAction}>
        <LinkUnderline to="/shop">Keep Shopping</LinkUnderline>
        <Button
          text="Our Contacts"
          className="whiteBtn"
          onClick={() => {
            navigate('/contact');
          }}
        />
      </div>
    </div>
  );
}

import React from 'react';
import { useSelector } from 'react-redux';
import CartModalItem from './CartModalItem/CartModalItem';
import Button from '../Button/Button';

import styles from './CartWrapperModal.module.scss';

function CartWrapperModal() {
  const { cart: cartStoreData } = useSelector((state) => state.cart);

  const cartProducts = cartStoreData.map((product) => (
    <CartModalItem key={product._id} products={product} />
  ));

  console.log(cartStoreData);
  return (
    <>
      <ul className={styles.list}>
        {cartProducts.length === 0
          ? <p> Cart is empty...</p>
          : cartProducts}

      </ul>
      <div className={styles.footer}>
        <span className={styles.footerTitle}>Total</span>
        <span className={styles.footerPrice}>$29.43</span>
      </div>
      <Button
        type="button"
        text="Proceed to checkout"
        className="orangeBtn"
        onClick={() => { }}
      />
    </>
  );
}

export default CartWrapperModal;

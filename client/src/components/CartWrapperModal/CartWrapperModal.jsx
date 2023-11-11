import React from 'react';
import { useSelector } from 'react-redux';
import CartModalItem from './CartModalItem/CartModalItem';
import Button from '../Button/Button';
import countTotalPrice from '../../helpers/countTotalPrice';

import styles from './CartWrapperModal.module.scss';

function CartWrapperModal() {
  /* --------------------------- REDUX STATE: --------------------------- */
  const { cart: cartStoreData } = useSelector((state) => state.cart);

  /* --------------------------- RTK QUERY CUSTOM HOOKS: --------------------------- */
  const countTotalPriceHandler = () => countTotalPrice(cartStoreData);

  /* --------------------------- COMPONENT LOGIC: --------------------------- */
  const cartProducts = cartStoreData.map((product) => (
    <CartModalItem
      // eslint-disable-next-line no-underscore-dangle
      key={product._id}
      products={product}
    />
  ));

  return (
    <>
      <ul className={styles.list}>
        {cartProducts.length === 0
          ? <p> Cart is empty...</p>
          : cartProducts}

      </ul>
      <div className={styles.footer}>
        <span className={styles.footerTitle}>Total</span>
        <span className={styles.footerPrice}>
          $
          {countTotalPriceHandler()}
        </span>
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

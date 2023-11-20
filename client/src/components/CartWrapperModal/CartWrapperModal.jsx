import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCartModal } from '../../store/cartModal/cartModal.slice';
import CartModalItem from './CartModalItem/CartModalItem';

import countTotalPrice from '../../helpers/countTotalPrice';

import styles from './CartWrapperModal.module.scss';

function CartWrapperModal() {
  /* --------------------------- INIT HOOKS: --------------------------- */
  const dispatch = useDispatch();

  /* --------------------------- REDUX STATE: --------------------------- */
  // const {isCartModal} = useSelector((state) => state.cartModal);
  const { cart: cartStoreData } = useSelector((state) => state.cart);

  /* --------------------------- RTK QUERY CUSTOM HOOKS: --------------------------- */
  const countTotalPriceHandler = () => countTotalPrice(cartStoreData);

  /* --------------------------- COMPONENT LOGIC: --------------------------- */
  const cartProducts = cartStoreData.map((product) => (
    <CartModalItem
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
      <Link
        to="/cart"
        className={styles.orangeBtn}
        onClick={() => dispatch(setCartModal(false))}
      >
        Proceed to checkout
      </Link>
    </>
  );
}

export default CartWrapperModal;

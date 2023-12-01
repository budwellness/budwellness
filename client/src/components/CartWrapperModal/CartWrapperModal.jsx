import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCartModal } from '../../store/cartModal/cartModal.slice';
import CartModalItem from './CartModalItem/CartModalItem';

import countTotalPrice from '../../helpers/countTotalPrice';

import styles from './CartWrapperModal.module.scss';
import useFetchLocalCardProducts from '../../hooks/useFetchLocalCardProducts';

const { log } = console;

function CartWrapperModal() {
  const [localCartData, setLocalCartData] = useState(JSON.parse(localStorage.getItem('localCart')));
  const [fetchedLocalCardProducts, setFetchedLocalCardProducts] = useState([]);
  const [localCartModalItem, setLocalCartModalItem] = useState([]);
  const [cartModalItem, setCartModalItem] = useState([]);
  /* --------------------------- INIT HOOKS: --------------------------- */
  const dispatch = useDispatch();

  /* --------------------------- REDUX STATE: --------------------------- */
  // const {isCartModal} = useSelector((state) => state.cartModal);
  const { isCartModal } = useSelector((state) => state.cartModal);
  const { cart: cartStoreData, localCart: localCartStoreData } = useSelector((state) => state.cart);
  const { isUserLogin } = useSelector((state) => state.user);

  /* --------------------------- RTK QUERY CUSTOM HOOKS: --------------------------- */
  const countTotalPriceHandler = () =>
    isUserLogin ?
      countTotalPrice(cartStoreData) :
      countTotalPrice(localCartStoreData)

  /* --------------------------- COMPONENT LOGIC: --------------------------- */

  useEffect(() => {
    if (isCartModal && !isUserLogin) {
      setLocalCartModalItem(localCartStoreData.map((product) => (
        <CartModalItem
          key={product.product._id}
          products={product}
        />
      )))
    } else if (isCartModal && isUserLogin) {
      setCartModalItem(cartStoreData.map((product) => (
        <CartModalItem
          key={product._id}
          products={product}
        />
      )))
    }
  }, [isCartModal, cartStoreData, localCartStoreData]);


  return (
    <>
      {isUserLogin
        ? (
          <ul className={styles.list}>
            {cartModalItem.length === 0
              ? <p> Cart is empty...</p>
              : cartModalItem}
          </ul>
        )
        : (
          <ul className={styles.list}>
            {localCartModalItem.length === 0
              ? <p> Cart is empty...</p>
              : localCartModalItem}
          </ul>
        )}
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

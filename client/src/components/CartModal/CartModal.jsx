/* eslint-disable */
import React from 'react';
import cn from 'classnames';

// COMPONENTS: 
import CartWrapperModal from '../CartWrapperModal/CartWrapperModal';
import CloseIcon from '../../assets/icons/closeIcon';

// CART IMPORTS:
import { useLazyGetCartQuery } from '../../store/serverResponse/danitApi.cart';

import styles from './CartModal.module.scss';
import { useSelector } from 'react-redux';


function CartModal({ showCartModal, setShowCartModal }) {

  /* --------------------------- REDUX STATE: --------------------------- */
  // const { isUserLogin, token: tokenReduxStore } = useSelector(
  //   (state) => state.user
  // );

  // const { cart: cartStoreData } = useSelector(state => state.cart)

  // console.log(showCartModal);
  /* --------------------------- RTK QUERY CUSTOM HOOKS: --------------------------- */
  // const [
  //   getCartProducts,
  //   {
  //     data: cardProductsData,
  //     isSuccess: isSuccessCardProductsData,
  //   },
  // ] = useLazyGetCartQuery();

  /* --------------------------- COMPONENT LOGIC: --------------------------- */

  // делаем запрос на сервер в зависимости от окна закрыто оно или нет



  return (
    <div className={cn(styles.cartModal, { [styles.openCart]: showCartModal })}>
      <div className={styles.cartHeader}>
        <h2 className={styles.cartTitle}>Cart</h2>
        <button
          className={styles.closeBtn}
          type="button"
          onClick={() => setShowCartModal(false)}
        >
          <CloseIcon />
        </button>
      </div>
      <CartWrapperModal />
    </div>
  );
}

export default CartModal;

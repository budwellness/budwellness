import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// COMPONENT IMPORTS: 
import ButtonCount from '../../ButtonCount/ButtonCount';
import LinkUnderline from '../../LinkUnderline/LinkUnderline';

// CART IMPORTS:
import {
  decreaseCartItemQuantityAction,
  increaseCartItemQuantityAction,
} from '../../../store/cart/cart.slice';
import {
  useAddToCartMutation,
  useDecreaseCartQuantityMutation,
} from '../../../store/serverResponse/danitApi.cart';

import styles from './CartModalItem.module.scss';

const log = console.log;

function CartModalItem(props) {
  /* --------------------------- INIT PROPS: --------------------------- */
  const {
    products: {
      cartQuantity,
      product,
    },
  } = props;



  /* --------------------------- INIT HOOKS: --------------------------- */

  const dispatch = useDispatch()

  /* --------------------------- RTK QUERY CUSTOM HOOKS: --------------------------- */

  const [addProductToCart] = useAddToCartMutation();
  const [decreaseCartQuantity] = useDecreaseCartQuantityMutation();

  /* --------------------------- REDUX STATE: --------------------------- */

  const { token: tokenReduxStore } = useSelector((state) => state.user);

  /* --------------------------- COMPONENT HANDLERS: --------------------------- */

  const increaseCartQuantityHandler = () => {
    const requestData = {
      productId: product._id,
      token: tokenReduxStore,
    };
    try {
      addProductToCart(requestData);
      dispatch(increaseCartItemQuantityAction(product._id));
    } catch (error) {
      log(error);
    }
  };

  /* ------------------------------------------------ */

  const decreaseCartQuantityHandler = () => {
    const requestData = {
      productId: product._id,
      token: tokenReduxStore,
    };
    try {
      decreaseCartQuantity(requestData)
      dispatch(decreaseCartItemQuantityAction(product._id))
    } catch (error) {
      log(error)
    }
  }

  return (
    <li className={styles.cartItem}>
      <div className={styles.wrapperImg}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">
          <img src={product.imageUrls[0]} alt={product.name} />
        </a>
      </div>
      <div className={styles.main}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className={styles.mainTitleLink}>{product.name}</a>
        <span className={styles.mainPrice}>
          $
          {product.currentPrice}
        </span>
        <div className={styles.count}>
          <ButtonCount
            productQuantity={product.quantity}
            actions={{ increaseCartQuantityHandler, decreaseCartQuantityHandler }}
            cartQuantity={cartQuantity}
          />
        </div>
        { }
        {/* <a className={styles.removeLink} href="#">remove</a> */}
        <LinkUnderline type="button" productId={product._id}>Remove</LinkUnderline>
      </div>
    </li>
  );
}

export default CartModalItem;

/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';

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

const { log } = console;

function CartModalItem(props) {
  /* --------------------------- INIT PROPS: --------------------------- */
  const {
    products: {
      cartQuantity,
      product,
    },
  } = props;

  /* --------------------------- INIT HOOKS: --------------------------- */

  const dispatch = useDispatch();

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
      toast.error('Something went wrong...');
    }
  };

  /* ------------------------------------------------ */

  const decreaseCartQuantityHandler = () => {
    const requestData = {
      productId: product._id,
      token: tokenReduxStore,
    };
    try {
      decreaseCartQuantity(requestData);
      dispatch(decreaseCartItemQuantityAction(product._id));
    } catch (error) {
      log(error);
      toast.error('Something went wrong...');
    }
  };

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
        <LinkUnderline type="button" productId={product._id} style={{order:4,marginTop:'10px'}}>Remove</LinkUnderline>
      </div>
    </li>
  );
}

CartModalItem.propTypes = {
  products: PropTypes.shape({
    cartQuantity: PropTypes.number,
    product: PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      imageUrls: PropTypes.arrayOf(PropTypes.string),
      currentPrice: PropTypes.number,
      quantity: PropTypes.number,
    }),
  }),
};

CartModalItem.defaultProps = {
  products: {
    cartQuantity: 0,
    product: {
      _id: '',
      name: '',
      imageUrls: [],
      currentPrice: 0,
      quantity: 0,
    },
  },
};

export default CartModalItem;

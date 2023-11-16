import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cN from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

// COMPONENT IMPORTS:
import CloseIcon from '../../../UI/CloseIcon';
import ButtonCount from '../../../ButtonCount/ButtonCount';
// CART IMPORTS:
import {
  useAddToCartMutation,
  useDecreaseCartQuantityMutation,
  useRemoveFromCartMutation,
} from '../../../../store/serverResponse/danitApi.cart';
import {
  decreaseCartItemQuantityAction,
  increaseCartItemQuantityAction,
  removeItemFromCartAction,
} from '../../../../store/cart/cart.slice';

import styles from './CartCard.module.scss';

const { log } = console;

export default function CartCard(props) {
  /* --------------------------- INIT PROPS: --------------------------- */
  const {
    card: {
      cartQuantity,
      product,
    },
  } = props;

  /* --------------------------- INIT HOOKS: --------------------------- */
  const dispatch = useDispatch();

  /* --------------------------- REDUX STATE: --------------------------- */
  const { token: tokenReduxStore } = useSelector((state) => state.user);

  /* --------------------------- RTK QUERY CUSTOM HOOKS: --------------------------- */
  const [addProductToCart] = useAddToCartMutation();
  const [decreaseCartQuantity] = useDecreaseCartQuantityMutation();
  const [removeFromCart, { isSuccess: isSuccessRemoveFromCart }] = useRemoveFromCartMutation();

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

  /* ------------------------------------------------ */

  const removeFromServerCartHandler = () => {
    const requestData = {
      productId: product._id,
      token: tokenReduxStore,
    };
    try {
      removeFromCart(requestData);
    } catch (error) {
      log(error);
      toast.error('Something went wrong...');
    }
  };

  useEffect(() => {
    if (isSuccessRemoveFromCart) {
      dispatch(removeItemFromCartAction(product._id));
      toast.success('Item was seccessfully removed from cart!');
    }
  }, [dispatch, isSuccessRemoveFromCart, product._id]);

  return (
    <li className={styles.cart_mainList_item}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_item}>
          <div className={styles.wrapper_itemMedia}>
            <picture>
              <img
                className={styles.itemMediaImg}
                src={product.imageUrls[0]}
                alt={product.name}
              />
            </picture>
          </div>
          <div className={styles.wrapper_itemInfo}>
            <h4 className={styles.itemInfo_title}>{product.name}</h4>
            <span className={styles.itemInfo_volume}>
              {product.size}
              {product.sizeType}
            </span>
          </div>
        </div>
        <div className={styles.wrapper_price}>
          {product.previousPrice !== product.currentPrice && (
            <span className={cN(styles.price, styles.priceOld)}>
              $
              {product.previousPrice.toFixed(2)}
            </span>
          )}
          <span className={styles.price}>
            $
            {product.currentPrice.toFixed(2)}
          </span>
        </div>
        <div className={cN(styles.wrapper_price, styles.wrapper_priceSubtotal)}>
          <h5 className={styles.priceSubtotal_title}>Subtotal</h5>
          <span className={styles.priceSubtotal_total}>
            $
            {(product.currentPrice * cartQuantity).toFixed(2)}
          </span>
        </div>
        <div className={styles.quantity}>
          <ButtonCount
            productQuantity={product.quantity}
            actions={{ increaseCartQuantityHandler, decreaseCartQuantityHandler }}
            cartQuantity={cartQuantity}
          />
        </div>
        <button type="button" className={styles.btnClose} onClick={removeFromServerCartHandler}>
          <CloseIcon className={styles.iconClose} />
        </button>
      </div>
    </li>
  );
}

CartCard.propTypes = {
  card: PropTypes.shape({
    cartQuantity: PropTypes.number,
    product: PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      imageUrls: PropTypes.arrayOf(PropTypes.string),
      currentPrice: PropTypes.number,
      previousPrice: PropTypes.number,
      quantity: PropTypes.number,
      size: PropTypes.number,
      sizeType: PropTypes.string,
    }),
  }),
};
CartCard.defaultProps = {
  card: {},
};

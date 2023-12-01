import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// CART IMPORTS:
import { useRemoveFromCartMutation } from '../../store/serverResponse/danitApi.cart';

import styles from './LinkUnderline.module.scss';
import { removeItemFromCartAction, removeItemFromLocalCartAction } from '../../store/cart/cart.slice';

const { log } = console;
export default function LinkUnderline(props) {
  /* --------------------------- INIT PROPS: --------------------------- */
  const {
    to, children, style, type, productId, itemNo, isDisabled,
  } = props;

  /* --------------------------- INIT HOOKS: --------------------------- */
  const dispatch = useDispatch();

  /* --------------------------- REDUX STATE: --------------------------- */
  const { isUserLogin, token: tokenReduxStore } = useSelector((state) => state.user);

  /* --------------------------- RTK QUERY CUSTOM HOOKS: --------------------------- */

  const [removeFromCart] = useRemoveFromCartMutation();
  const Component = type ? 'button' : Link;

  /* --------------------------- COMPONENT HANDLERS: --------------------------- */

  const removeFromServerCartHandler = () => {
    if (isUserLogin) {
      const requestData = {
        productId,
        token: tokenReduxStore,
      };
      try {
        removeFromCart(requestData)
          .unwrap()
          .then(() => dispatch(removeItemFromCartAction(productId)));
      } catch (error) {
        log(error);
      }
    } else {
      const localCart = JSON.parse(localStorage.getItem('localCart'));
      const index = localCart.findIndex(
        (product) => product.itemNo === itemNo
      );
      localCart.splice(index, 1);
      localStorage.setItem('localCart', JSON.stringify(localCart));
      dispatch(removeItemFromLocalCartAction(itemNo))
    }
  };

  /* ------------------------------------------------ */

  return (
    <Component
      to={type ? undefined : to}
      className={styles.linkUnderline}
      style={style}
      type={type}
      disabled={isDisabled}
      onClick={
        type === 'button'
          ? removeFromServerCartHandler
          : () => {
            log('Error is here...=)');
          }
      }
    >
      {children}
    </Component>
  );
}

LinkUnderline.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
  style: PropTypes.shape({}),
  type: PropTypes.string,
  productId: PropTypes.string,
  itemNo: PropTypes.string,
  isDisabled: PropTypes.bool,
};

LinkUnderline.defaultProps = {
  to: '/',
  children: 'LinkUnderline',
  style: {},
  type: '',
  productId: '',
  itemNo: '',
  isDisabled: false,
};

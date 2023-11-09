import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// CART IMPORTS:
import { useRemoveFromCartMutation } from '../../store/serverResponse/danitApi.cart';

import styles from './LinkUnderline.module.scss';
import { removeItemFromCartAction } from '../../store/cart/cart.slice';

const { log } = console;
export default function LinkUnderline({
  to, children, style, type, productId,
}) {
  /* --------------------------- INIT HOOKS: --------------------------- */

  const dispatch = useDispatch();
  /* --------------------------- REDUX STATE: --------------------------- */
  const { token: tokenReduxStore } = useSelector(
    (state) => state.user,
  );

  /* --------------------------- RTK QUERY CUSTOM HOOKS: --------------------------- */

  const [removeFromCart, { isSuccess: isSuccessRemoveFromCart }] = useRemoveFromCartMutation();
  const Component = type ? 'button' : Link;

  /* --------------------------- COMPONENT HANDLERS: --------------------------- */

  const removeFromServerCartHandler = () => {
    const requestData = {
      productId,
      token: tokenReduxStore,
    };
    try {
      removeFromCart(requestData);
    } catch (error) {
      log(error);
    }
  };

  useEffect(() => {
    if (isSuccessRemoveFromCart) {
      dispatch(removeItemFromCartAction(productId));
    }
  }, [isSuccessRemoveFromCart]);

  /* ------------------------------------------------ */

  return (
    <Component
      to={type ? undefined : to}
      className={styles.linkUnderline}
      // style={style}
      type={type}
      onClick={removeFromServerCartHandler}
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
};

LinkUnderline.defaultProps = {
  to: '/',
  children: 'LinkUnderline',
  style: {},
  type: '',
  onClick: () => {},
};

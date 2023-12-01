import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';

// COMPONENT IMPORTS:
import { Link } from 'react-router-dom';
import ButtonCount from '../../ButtonCount/ButtonCount';
import LinkUnderline from '../../LinkUnderline/LinkUnderline';

// CART IMPORTS:
import {
  decreaseCartItemQuantityAction,
  decreaseLocalCartItemQuantityAction,
  increaseCartItemQuantityAction,
  increaseLocalCartItemQuantityAction,
} from '../../../store/cart/cart.slice';
import {
  useAddToCartMutation,
  useDecreaseCartQuantityMutation,
} from '../../../store/serverResponse/danitApi.cart';

import styles from './CartModalItem.module.scss';
import { setCartModal } from '../../../store/cartModal/cartModal.slice';

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

  const { isUserLogin, token: tokenReduxStore } = useSelector((state) => state.user);

  /* --------------------------- COMPONENT HANDLERS: --------------------------- */

  const increaseCartQuantityHandler = () => {
    if (isUserLogin) {
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
    } else {
      const localCartProducts = JSON.parse(localStorage.getItem('localCart'))
      const productIndex = localCartProducts.findIndex(p => p.itemNo === product.itemNo)
      localCartProducts[productIndex].cartQuantity = localCartProducts[productIndex].cartQuantity + 1
      localStorage.setItem('localCart', JSON.stringify(localCartProducts))
      dispatch(increaseLocalCartItemQuantityAction(product._id))
    }
  };

  const handleCloseCart = () => {
    dispatch(setCartModal(false));
  };

  /* ------------------------------------------------ */

  const decreaseCartQuantityHandler = () => {
    if (isUserLogin) {
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
    } else {
      const localCartProducts = JSON.parse(localStorage.getItem('localCart'))
      const productIndex = localCartProducts.findIndex(p => p.itemNo === product.itemNo)
      localCartProducts[productIndex].cartQuantity = localCartProducts[productIndex].cartQuantity - 1
      localStorage.setItem('localCart', JSON.stringify(localCartProducts))
      dispatch(decreaseLocalCartItemQuantityAction(product._id))
      // код который срабатывает когда полдьзователь не залогинен
    }
  };

  return (
    <li className={styles.cartItem}>
      <div className={styles.wrapperImg}>
        <Link
          /* eslint-disable-next-line react/prop-types */
          to={`/product/${product.itemNo}`}
          onClick={handleCloseCart}
        >
          <img src={product.imageUrls[0]} alt={product.name} />
        </Link>
      </div>
      <div className={styles.main}>
        <Link
          /* eslint-disable-next-line react/prop-types */
          to={`/product/${product.itemNo}`}
          className={styles.mainTitleLink}
          onClick={handleCloseCart}
        >
          {product.name}
        </Link>
        <span className={styles.mainPrice}>
          $
          {product.currentPrice}
        </span>
        <div className={styles.count}>
          <ButtonCount
            productQuantity={product.quantity}
            actions={{
              increaseCartQuantityHandler,
              decreaseCartQuantityHandler,
            }}
            cartQuantity={cartQuantity}
          />
        </div>
        <LinkUnderline
          type="button"
          productId={product._id}
          itemNo={product.itemNo}
          style={{ order: 4, marginTop: '10px' }}
        >
          Remove
        </LinkUnderline>
      </div>
    </li>
  );
}

CartModalItem.propTypes = {
  products: PropTypes.shape({
    cartQuantity: PropTypes.number,
    product: PropTypes.shape({
      _id: PropTypes.string,
      itemNo: PropTypes.string,
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

// CartModalItem.propTypes = {
//   products: PropTypes.shape({
//     cartQuantity: PropTypes.number,
//     product: PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
//       currentPrice: PropTypes.number.isRequired,
//       quantity: PropTypes.number.isRequired,
//     }).isRequired,
//   }).isRequired,
// };
//
// CartModalItem.defaultProps = {
//   products: {
//     cartQuantity: 0,
//     product: {
//       _id: '',
//       name: '',
//       imageUrls: [],
//       currentPrice: 0,
//       quantity: 0,
//     },
//   },
// };

export default CartModalItem;

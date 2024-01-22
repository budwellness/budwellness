/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import styles from './TestProductCard.module.scss';

const log = console.log;

function TestProductCard(props) {

  /* --------------------------- INIT PROPS: --------------------------- */

  const {
    product,
    action: {
      toggleWishlistHandler,
      toggleCartHandler,
      increaseCartQuantityHandler,
      decreaseCartQuantityHandler,
    },
  } = props

  /* --------------------------- REDUX STATE: --------------------------- */

  const { isUserLogin, token } = useSelector((state) => state.user);
  const { wishList } = useSelector((state) => state.wishlist);
  const { cart } = useSelector(state => state.cart)

  /* --------------------------- COMPONENT STATE: --------------------------- */

  const [isExistInWishlist, setIsExistInWishlist] = useState(false);
  const [isExistInCart, setIsExistInCart] = useState(null);
  const [cartProductQuantity, setCartProductQuantity] = useState(0);

  /* --------------------------- COMPONENT HANDLERS: --------------------------- */

  const toggleWishlistWithLoginHandler = () => {
    if (isUserLogin) {
      toggleWishlistHandler(product, token);
    } else {
      console.log('Please login first');
    }
  }
  const toggleCartWithLoginHandler = () => {
    if (isUserLogin) {
      toggleCartHandler(product, token)

    } else {
      console.log('Please login first');
    }
  }

  const reflectCartItemQuantityHandler = () => {
    if (cart.length > 0) {
      const indexOfProductInCart = cart.findIndex(item => item.product._id === product._id)
      if (indexOfProductInCart !== -1) {
        return cart[indexOfProductInCart].cartQuantity
        // setCartProductQuantity(cart[indexOfProductInCart].cartQuantity)
      } else {
        return 0
        // setCartProductQuantity(0)
      }
    }
  }

  useEffect(() => {
    if (cart) {
      setCartProductQuantity(reflectCartItemQuantityHandler())
    }

  }, [cart])

  /*
  Функция меняет локальное сотояние компонента кнопки, которое 
  отвчеает за то, есть ли товар уже в wishlist'e / cart'e или нет. 
  Если есть: 
      - Иконка / кнопка остаются закрашены показывая, что товар уже добавлен
      в избранное.
  Если нет:
      = Иконка / кнопка остаются НЕ закрашенными показывая, что товар еше не
      в избранном.
   Так же очищает закраску с иконок / кнопок при LOGOUT'e юзера и наоборот, 
  закрашивает при LOGIN'e то что уже было до этого в wishlist'e / cart'e.
   Обепнул в useEffect, по тому что глобальный стор не успевал прогрузиться,
  и функция поиска проходилась по пустому массиву, даже если он был полный.
*/

  const ButtonStateHandler = (
    globalUserState,
    globalUserDataState,
    localButtonState,
    localButtonStateSetter,
  ) => {
    if (globalUserState) {
      if (globalUserDataState.length > 0) {
        localButtonStateSetter(
          globalUserDataState.some((p) => p._id === product._id)
        );
      } else if (localButtonState) {
        localButtonStateSetter(!localButtonState);
      }
    } else {
      localButtonStateSetter(false);
    }
  };

  const CartButtonStateHandler = (
    globalUserState,
    globalUserDataState,
    localButtonState,
    localButtonStateSetter,
  ) => {
    if (globalUserState) {
      if (globalUserDataState.length > 0) {
        localButtonStateSetter(globalUserDataState.some((p) => p.product._id === product._id));
      } else if (localButtonState) {
        localButtonStateSetter(!localButtonState);
      }
    } else {
      localButtonStateSetter(false);
    }
  };

  /* --------------------------- COMPONENT LOGIC: --------------------------- */

  // WISHLIST BUTTON: 
  useEffect(
    () => ButtonStateHandler(isUserLogin, wishList, isExistInWishlist, setIsExistInWishlist),
    [wishList, isUserLogin]
  );

  // // CART BUTTON: 
  useEffect(
    () => CartButtonStateHandler(isUserLogin, cart, isExistInCart, setIsExistInCart),
    [cart, isUserLogin]
  );

  /* ------------------------------------------------ */

  return (
    <div className={styles.poductCardWrap}>
      <h3>{product.name}</h3>
      <h4>{product._id}</h4>
      <button
        className={cn({
          [styles.wishlistBtn_active]: isExistInWishlist,
        })}
        onClick={() => toggleWishlistWithLoginHandler()}
      >
        Toggle Wishlist
      </button>
      <button
        className={cn({
          [styles.cartBtn_active]: isExistInCart,
        })}
        onClick={() => toggleCartWithLoginHandler()}
      >
        Toggle Cart</button>
      <div className={styles.qntyWrap}>
        <button onClick={() => decreaseCartQuantityHandler(product._id, token)}>-</button>
        <span>Cart Quantity</span>
        <button onClick={() => increaseCartQuantityHandler(product._id, token)}>+</button>
        <p>{cartProductQuantity}</p>
      </div>

    </div>
  );
}

export default TestProductCard;

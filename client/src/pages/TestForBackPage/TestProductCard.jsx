/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import styles from './TestProductCard.module.scss';

const log = console.log;

function TestProductCard({ product, action: toggleWishlistHandler }) {
  /* --------------------------- REDUX STATE: --------------------------- */
  const { isUserLogin, token } = useSelector((state) => state.user);
  const { wishList } = useSelector((state) => state.wishlist);

  /* --------------------------- COMPONENT STATE: --------------------------- */

  const [isExistInWishlist, setIsExistInWishlist] = useState(null);

  /* --------------------------- COMPONENT LOGIC: --------------------------- */

  /*
    Функция меняет локальное сотояние компонента isExistInWishlist, которое 
    отвчеает за то, есть ли товар уже в wishlist'e или нет. 
    Если есть: 
        - Иконка / кнопка остаются закрашены показывая, что товар уже добавлен
        в избранное.
    Если нет:
        = Иконка / кнопка остаются НЕ закрашенными показывая, что товар еше не
        в избранном.
     Так же очищает закраску с иконок / кнопок при LOGOUT'e юзера и наоборот, 
    закрашивает при LOGIN'e то что уже было до этого в wishlist'e.
     Обепнул в useEffect, по тому что глобальный стор не успевал прогрузиться,
    и функция поиска проходилась по пустому массиву, даже если он был полный.
    
  */

  const wishlistStateHandler = (
    globalUserState,
    globalWishlistState,
    localButtonState
  ) => {
    if (globalUserState) {
      if (globalWishlistState.length > 0) {
        setIsExistInWishlist(
          globalWishlistState.some((p) => p._id === product._id)
        );
      } else if (localButtonState) {
        setIsExistInWishlist(!localButtonState);
      }
    } else {
      setIsExistInWishlist(false);
    }
  };

  useEffect(
    () => wishlistStateHandler(isUserLogin, wishList, isExistInWishlist),
    [wishList, isUserLogin]
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
        onClick={() => {
          if (isUserLogin) {
            toggleWishlistHandler(product, token);
          } else {
            console.log('Please login first');
          }
        }}
      >
        Toggle Wishlist
      </button>
      <button onClick={() => {}}>Toggle Cart</button>
    </div>
  );
}

export default TestProductCard;

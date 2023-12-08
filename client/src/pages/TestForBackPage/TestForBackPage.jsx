/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userMockData, productsJSON } from './mockedTestData';
import { uploadHandler } from './vanilaJsHelpers';

// COMPONENTS:
import Container from '../../components/Container/Container';
import TestProductCard from './TestProductCard';

// PRODUCT IMPORTS:
import {
  useGetAllProductsQuery,
  useLazyGetAllProductsQuery,
  useGetSingleProductMutation,
  useSearchForProductsMutation,
  useAddProductMutation,
  useGetFilteredProductsQuery,
  useLazyGetFilteredProductsQuery,
} from '../../store/serverResponse/danitApi.products';

// USER IMPORTS:
import {
  userLoginUserAction,
  userLogutUserAction,
} from '../../store/user/user.slice';
import { useLoginUserMutation } from '../../store/serverResponse/danitApi.auth';

// WISHLIST IMPORTS:
import {
  setWishlistAction,
  addItemToWishListAction,
  removeItemFromWishListAction,
} from '../../store/wishlist/wishList.slice';
import {
  useLazyGetWishlistQuery,
  useAddProductToWishlistMutation,
  useRemoveFromWishlistMutation,
} from '../../store/serverResponse/danitApi.wishlist';

// CART IMPORTS:
import {
  setCartAction,
  addItemToCartAction,
  removeItemFromCartAction,
  increaseCartItemQuantityAction,
  decreaseCartItemQuantityAction,
} from '../../store/cart/cart.slice';
import {
  useLazyGetCartQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useDecreaseCartQuantityMutation,
} from '../../store/serverResponse/danitApi.cart';

import styles from './TestForBackPage.module.scss';

const { log } = console;

function TestForBackPage() {
  const dispatch = useDispatch();

  /* --------------------------- REDUX STATE: --------------------------- */
  const { isUserLogin, token: tokenReduxStore } = useSelector(
    (state) => state.user
  );
  const { wishList: wishlistStoreData } = useSelector(
    (state) => state.wishlist
  );

  const { cart: cartStoreData } = useSelector((state) => state.cart);
  /* --------------------------- RTK QUERY CUSTOM HOOKS: --------------------------- */

  // PRODUCTS API:
  const {
    data: allProducts,
    isError: isErrorAllProducts,
    isLoading: isLoadingAllProducts,
  } = useGetAllProductsQuery();

  const [
    getAllProducts,
    { data: allProductsData, isSuccess: isSuccessAllProductsData },
  ] = useLazyGetAllProductsQuery();

  const [getSingleProduct, { data: singleProductData }] =
    useGetSingleProductMutation();

  const [searchForProducts, { data: searchForProductsData }] =
    useSearchForProductsMutation();

  const [uploadProductToDataBase] = useAddProductMutation();

  // const {
  //   data: filteredProductsData,
  //   isError: isErrorFilteredProductsData
  // } = useGetFilteredProductsQuery();
  const [
    getFilteredProducts,
    {
      data: lazyFilteredProductsData,
      isError: isErrorlazyFilteredProductsData,
    },
  ] = useLazyGetFilteredProductsQuery();

  // USER API:

  const [loginUser, { data: loginUserToken, isSuccess: loginIsSuccess }] =
    useLoginUserMutation();

  // WISHLIST API:

  const [
    getWishlist,
    { data: userWishListData, isSuccess: isSuccessUserWishlistData },
  ] = useLazyGetWishlistQuery();

  const [
    addProductToWishlist,
    {
      data: wishlistAddToWishlistData,
      isSuccess: isSuccessAddToWishlist,
      isError: isErrorAddToWishlist,
      error: errorAddtoWishlist,
    },
  ] = useAddProductToWishlistMutation();

  const [
    removeProductFromWishlist,
    {
      data: wishlistRemoveFromData,
      isSuccess: isSuccessRemoveFromWishlist,
      isError: isErrorRemoveFromWishlist,
      error: errorRemoveToWishlist,
    },
  ] = useRemoveFromWishlistMutation();

  // CART API:

  const [getCart, { data: userCartData, isSuccess: isSuccessUserCartData }] =
    useLazyGetCartQuery();

  const [
    addProductToCart,
    {
      data: cartAddToCartData,
      isSuccess: isSuccessAddToCart,
      isError: isErrorAddToCart,
      error: errorAddToCart,
    },
  ] = useAddToCartMutation();

  const [
    removeProductFromCart,
    {
      data: cartRemoveFromCartData,
      isSuccess: isSuccessRemoveFromCart,
      isError: isErrorRemoveFromCart,
      error: errorRemoveFromCart,
    },
  ] = useRemoveFromCartMutation();

  const [decreaseCartQuantity] = useDecreaseCartQuantityMutation();

  /* --------------------------- COMPONENT HELPER HANDLERS: --------------------------- */

  /* 
    При выходе очищаем localStorage от ключа 'token',
    и тригерим экшен, который поменят в глобальном сторе
    состояния isUserLoign на false, а полю токен задаст NULL
  */

  const logoutHandler = () => {
    localStorage.removeItem('token');
    dispatch(userLogutUserAction());
  };

  /* ------------------------------------------------ */

  const addToWishlistHandler = (productId, token) => {
    if (!token) {
      log('Please login first!');
    } else {
      const objectAddToWishlist = {
        productId,
        token,
      };
      addProductToWishlist(objectAddToWishlist);
    }
  };

  /* ------------------------------------------------ */

  const removeFromWishlistHandler = (productId, token) => {
    if (!token) {
      log('Please login first!');
    } else {
      const objectRemoveFromWishlist = {
        productId,
        token,
      };
      removeProductFromWishlist(objectRemoveFromWishlist);
      log();
      log('removeProductFromWishlist: прошли в хук и отправили запрос');
    }
  };

  /* ------------------------------------------------ */

  /* 
    // 
    // проверить есть ли этот продукт уже в wishlist в локальном стейте
    // в зависимости от того есть или нету, делаем запрос Добавить или удалить
    // после респонса с сервера проверяю на 200 и меняю стейт на
  */

  const toggleWishlistHandler = (product, token) => {
    const isExist = wishlistStoreData.some((p) => p._id === product._id);

    if (isExist) {
      try {
        removeProductFromWishlist({ productId: product._id, token });
        dispatch(removeItemFromWishListAction(product));
      } catch (error) {
        log(error);
      }
    } else {
      try {
        addProductToWishlist({ productId: product._id, token });
        dispatch(addItemToWishListAction(product));
      } catch (error) {
        log(error);
      }
    }
  };

  /* ------------------------------------------------ */

  const showCartStoreHandler = () => {
    log(cartStoreData);
  };

  /* ------------------------------------------------ */

  const showUserCartDataHandler = () => {
    log(userCartData);
  };

  /* ------------------------------------------------ */

  const toggleCartHandler = (product, token) => {
    const isExist = cartStoreData.some((p) => p.product._id === product._id);

    if (isExist) {
      try {
        removeProductFromCart({ productId: product._id, token });
        dispatch(removeItemFromCartAction(product));
      } catch (error) {
        log(error);
      }
    } else {
      try {
        addProductToCart({ productId: product._id, token })
          .unwrap()
          .then((response) => dispatch(addItemToCartAction(response.products)));
      } catch (error) {
        log(error);
      }
    }
  };

  /* ------------------------------------------------ */

  const increaseCartQuantityHandler = (productId, token) => {
    try {
      addProductToCart({ productId, token });
      dispatch(increaseCartItemQuantityAction(productId));
    } catch (error) {
      log(error);
    }
  };

  /* ------------------------------------------------ */

  const decreaseCartQuantityHandler = (productId, token) => {
    try {
      decreaseCartQuantity({ productId, token });
      dispatch(decreaseCartItemQuantityAction(productId));
    } catch (error) {
      log(error);
    }
  };

  /* ------------------------------------------------ */

  const productsToDateBaseHandler = () => {
    productsJSON.forEach((product) => {
      const requestData = {
        token: tokenReduxStore,
        product,
      };
      try {
        uploadProductToDataBase(requestData);
      } catch (error) {
        log(error);
      }
    });
  };

  // const getSingleProductHandler = (itemNo) => {
  //   getSingleProduct(itemNo);
  //   log(singleProductData);
  // };

  // const searchForProductsHandler = () => {
  //   const mockSearch = {
  //     query: 'milk',
  //   };
  //   searchForProducts(mockSearch);
  // };

  // const showWishlistHandler = async () => {
  //   await getWishlist(tokenReduxStore)
  //     .then(() => log('сработал нужный then!'))
  //     .then(() => log('Wishlist data: ', userWishListData));
  // };

  /* --------------------------- COMPONENT LOGIC: --------------------------- */

  /*
    При первой загрузке страницы, проверяем наличие токена
    и тригерим все экшены которые должны быть если юзер залогинен:
    - Меняем глобальное состояние на True
    - Добавляем токен в глобальный state
    - Получаем с сервера wishlist юзера, инициализируем в stor
    - Получаем с сервера cart юзера, инициализируем в stor
  */

  const initUserOnLoad = () => {
    const localStorageToken = localStorage.getItem('token');
    if (!localStorageToken) {
      log('User not logged in');
    } else {
      log('token is present, put it into store...');
      dispatch(userLoginUserAction(localStorageToken));
      getWishlist(localStorageToken);
      getCart(localStorageToken);
    }
  };

  useEffect(() => initUserOnLoad(), []);

  /* ------------------------------------------------ */

  /*
    Если юзер не был залогинен, то мы логинимся, используя 
    loginUser из хука QUERY, и трегирим наш useEffect в зависимости
    от того правильно были введены данные или нет, если нет (ЛОГИКА
      ОБРАБОТКИ ОШИБКИ ЕЩЕ НЕ ПРИДУМАНА) обрабатываем ошибку,
    если данные для аунтефикации верны, заносим данные в наш стор и 
    localStorage. И так же трегирим остальные экшены:
   
  */

  const isLoginSuccessHandler = () => {
    if (loginIsSuccess && loginUserToken) {
      dispatch(userLoginUserAction(loginUserToken));
      localStorage.setItem('token', loginUserToken);
      getWishlist(loginUserToken);
      getCart(loginUserToken);
    }
  };

  useEffect(() => isLoginSuccessHandler(), [loginIsSuccess]);

  /* ------------------------------------------------ */

  /*
    Используя хук getWishList, получаем ответ с wishlist`ом юзера,
    Если wishlist приходит пустой:
    тригерим через useEffect только на статус 200.
      -ничего не делаем
    Если wishlist приходит не пустой:
      -забираем из ответа сервера массив продуктов и инициализируем в сторе
  */

  const initUserWishlistOnLoad = () => {
    if (isUserLogin && userWishListData) {
      dispatch(setWishlistAction(userWishListData.products));
    }
  };

  useEffect(() => initUserWishlistOnLoad(), [isSuccessUserWishlistData]);

  /* ------------------------------------------------ */

  /*
  Используя хук getCart, получаем ответ с cart'ом юзера,
  тригерим через useEffect только на статус 200.
  Если cart приходит пустой:
    -ничего не делаем
  Если cart приходит не пустой:
    -забираем из ответа сервера массив продуктов и инициализируем в сторе
  */

  const initUserCardOnLoad = () => {
    if (isUserLogin && userCartData) {
      dispatch(setCartAction(userCartData.products));
    }
  };

  useEffect(() => initUserCardOnLoad(), [isSuccessUserCartData]);

  /* ------------------------------------------------ */

  // const products = allProducts?.map((product) => (
  //   <TestProductCard
  //     key={product._id}
  //     product={product}
  //     action={{ toggleWishlistHandler, toggleCartHandler, increaseCartQuantityHandler }}
  //   />
  // ));

  const products = allProducts?.map((product, i) => {
    if (i <= 7) {
      return (
        <TestProductCard
          key={product._id}
          product={product}
          action={{
            toggleWishlistHandler,
            toggleCartHandler,
            increaseCartQuantityHandler,
            decreaseCartQuantityHandler,
          }}
        />
      );
    }
  });

  const mockFilterQueryString = '?sort=-rate&perPage=6&startPage=1';

  const getFilteredProductsHandler = () => {
    getFilteredProducts(mockFilterQueryString);
  };

  return (
    <>
      <div className={styles.mainWrapper}>
        <div className="">
          {!isUserLogin && (
            <button type="button" onClick={() => loginUser(userMockData)}>
              Login
            </button>
          )}
          {isUserLogin && (
            <button type="button" onClick={() => logoutHandler()}>
              Logout
            </button>
          )}
          <button type="button" onClick={() => showUserCartDataHandler()}>
            Cart data
          </button>
          <button type="button" onClick={() => showCartStoreHandler()}>
            Cart store
          </button>
          <button type="button" onClick={() => productsToDateBaseHandler()}>
            Products to DB
          </button>
          <button type="button" onClick={() => getFilteredProductsHandler()}>
            Filtered
          </button>
          <button type="button" onClick={() => getFilteredProductsHandler()}>
            Slider with server data
          </button>
        </div>
        <div className={styles.btnWrapper}>
          <Link target="_blank" className={styles.wishBtn} to="/wishlist">
            <span>W</span>
            {isUserLogin && wishlistStoreData.length > 0 && (
              <span className={styles.info}>{wishlistStoreData.length}</span>
            )}
          </Link>
          <Link className={styles.wishBtn} to="/cart">
            <span>C</span>
            {isUserLogin && cartStoreData.length > 0 && (
              <span className={styles.info}>{cartStoreData.length}</span>
            )}
          </Link>
        </div>
      </div>
      <Container>
        <div className={styles.secondaryWrapper}>
          {isLoadingAllProducts && <h1>Loading...</h1>}
          {products}
        </div>
      </Container>
    </>
  );
}

export default TestForBackPage;

/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  useGetAllProductsQuery,
  useLazyGetAllProductsQuery,
  useGetSingleProductMutation,
  useSearchForProductsMutation,
} from '../../store/serverResponse/danitApi.products';

import { uploadHandler } from './vanilaJsHelpers';
import {
  userLoginUserAction,
  userLogutUserAction,
} from '../../store/user/user.slice';
import {
  setWishlistAction,
  addItemToWishListAction,
  removeItemFromWishListAction,
} from '../../store/wishlist/wishList.slice';
import { userMockData } from './mockedTestData';
import { useLoginUserMutation } from '../../store/serverResponse/danitApi.auth';
import {
  useLazyGetWishlistQuery,
  useAddProductToWishlistMutation,
  useRemoveFromWishlistMutation,
} from '../../store/serverResponse/danitApi.wishlist';
import Container from '../../components/Container/Container';

import styles from './TestForBackPage.module.scss';
import TestProductCard from './TestProductCard';

const { log } = console;

function TestForBackPage() {
  /* --------------------------- INIT HOOKS: --------------------------- */
  const dispatch = useDispatch();

  /* --------------------------- REDUX STATE: --------------------------- */
  const { isUserLogin, token: tokenReduxStore } = useSelector(
    (state) => state.user
  );
  const { wishList: wishlistStoreData } = useSelector(
    (state) => state.wishlist
  );

  /* --------------------------- RTK QUERY CUSTOM HOOKS: --------------------------- */

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

  const [loginUser, { data: loginUserToken, isSuccess: loginIsSuccess }] =
    useLoginUserMutation();

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

  /* --------------------------- COMPONENT HELPER HANDLERS: --------------------------- */

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

  const toggleWishlistHandler = async (product, token) => {
    const isExist = wishlistStoreData.some((p) => p._id === product._id);

    if (isExist) {
      try {
        await removeProductFromWishlist({ productId: product._id, token }).then(
          () => {
            dispatch(removeItemFromWishListAction(product));
          }
        );
      } catch (error) {
        log(error);
      }
    } else {
      try {
        await addProductToWishlist({ productId: product._id, token }).then(
          () => {
            dispatch(addItemToWishListAction(product));
          }
        );
      } catch (error) {
        log(error);
      }
    }
  };

  /* ------------------------------------------------ */

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
      // добавить запрос данных на корзину
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
    }
  };

  useEffect(() => isLoginSuccessHandler(), [loginIsSuccess]);

  /* ------------------------------------------------ */

  /*
    Используя хук getWishList, получаем ответ с wishlist`ом юзера,
    Если wishlist приходит пустой:
      -ничего не делаем
    Если wishlist приходит не пустой:
      -забираем из ответа сервера массив продуктов и инициализируем в сторе
  */

  const initUserWishlistOnLoad = () => {
    if (isUserLogin && userWishListData) {
      if (isSuccessAddToWishlist) {
        log('ТРРИГЕР ТОЛЬКО КОГДА ДОБАВИЛ В ВИШЛИСТ!');
        // dispatch(setWishlistAction(wishlistAddToWishlistData.products));
      }
      dispatch(setWishlistAction(userWishListData.products));
    }
  };

  useEffect(() => initUserWishlistOnLoad(), [isSuccessUserWishlistData]);

  /* ------------------------------------------------ */

  // useEffect(() => {
  //   if (isSuccessAddToWishlist) {
  //     log(wishlistAddToWishlistData);
  //   }
  // }, [isSuccessAddToWishlist]);
  /* ------------------------------------------------ */

  const products = allProducts?.map((product) => (
    <TestProductCard
      key={product._id}
      product={product}
      action={toggleWishlistHandler}
    />
  ));
  // const products = allProducts?.map((product) => (
  //   <div key={product.itemNo} className={styles.poductCardWrap}>
  //     <h3>{product.name}</h3>
  //     <h4>{product._id}</h4>
  //     <button
  //       onClick={() => {
  //         toggleWishlistHandler(product, tokenReduxStore);
  //       }}
  //     >
  //       Toggle Wishlist
  //     </button>
  //     <button
  //       onClick={() => {
  //         addToWishlistHandler(product._id, tokenReduxStore);
  //       }}
  //     >
  //       Add to wishlist
  //     </button>
  //     <button
  //       onClick={() => {
  //         removeFromWishlistHandler(product._id, tokenReduxStore);
  //       }}
  //     >
  //       Remove from wish
  //     </button>
  //     <button>Add to cart</button>
  //     <button>Remove cart</button>
  //   </div>
  // ));

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
          <button type="button" onClick={() => showWishlistHandler()}>
            Wishlist data
          </button>
          <button type="button" onClick={() => log(wishlistStoreData)}>
            Wishlist store
          </button>
          {/* <button onClick={() => uploadHandler()}>Upload</button> */}
          {/* <button>Check TOKEN</button>

          <button>Show wishlist</button>
          <button onClick={() => getAllProductsHandler()}>
            Get All Products
          </button>
          <button onClick={() => getSingleProductHandler('937491')}>
            Get single Product
          </button>
          <button onClick={() => searchForProductsHandler()}>
            Search For Products
          </button> */}
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
            {/* {isUserLogin && <span className={styles.info}>0</span>} */}
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

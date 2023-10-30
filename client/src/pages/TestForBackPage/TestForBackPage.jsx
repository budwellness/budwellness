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
import { setWishlistAction } from '../../store/wishlist/wishList.slice';
import { userMockData } from './mockedTestData';
import { useLoginUserMutation } from '../../store/serverResponse/danitApi.auth';
import { useLazyGetWishlistQuery } from '../../store/serverResponse/danitApi.wishlist';

import styles from './TestForBackPage.module.scss';

const { log } = console;

function TestForBackPage() {
  /* --------- INIT HOOKS: --------- */
  const dispatch = useDispatch();

  /* --------- REDUX STATE: --------- */
  const { isUserLogin, token } = useSelector((state) => state.user);
  const { wishList: wishlistStoreData } = useSelector(
    (state) => state.wishlist
  );

  /* --------- RTK QUERY CUSTOM HOOKS: --------- */

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

  /* --------- COMPONENT HELPER HANDLERS: --------- */

  const logoutHandler = () => {
    localStorage.clear();
    dispatch(userLogutUserAction());
  };

  // const checkTokenHandler = () => {
  //   const token = localStorage.getItem('token');
  //   log('loginHandler token: ', token);
  // };

  // const getAllProductsHandler = () => {
  //   getAllProducts();
  //   log(allProductsData);
  // };

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

  // const showWishlistHandler = () => {
  //   log('Wishlist data: ', userWishListData);
  // };

  /* --------- COMPONENT LOGIC: --------- */

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
      log('token appear, put it into store...');
      dispatch(userLoginUserAction(localStorageToken));
      localStorage.setItem('token', localStorageToken);
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

  useEffect(() => {
    if (isUserLogin && userWishListData) {
      dispatch(setWishlistAction(userWishListData.products));
    }
  }, [isSuccessUserWishlistData]);

  /* ------------------------------------------------ */

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
          <button type="button" onClick={() => log(userWishListData)}>
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
      <div className={styles.secondaryWrapper} />
    </>
  );
}

export default TestForBackPage;

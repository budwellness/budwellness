/* eslint-disable */
import React, { useEffect } from 'react';
import { loginUser, uploadSingleProduct } from '../../helpers/sendRequest';
import { useLazyGetAllProductsQuery } from '../../store/serverResponse/danitApi.products';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  checkHandler,
  checkToken,
  loginHandler,
  uploadHandler,
} from './vanilaJsHelpers';
import { userMockData } from './mockedTestData';
import { useLoginMutation } from '../../store/serverResponse/danitApi.auth';

import styles from './TestForBackPage.module.scss';

function TestForBackPage() {
  // REDUX STATE:
  // const token = localStorage.getItem('token');

  // const isUserLogin = !!token;
  const { isUserLogin, token } = useSelector((state) => state.user);
  console.log(isUserLogin);

  // RTK QUERY CUSTOM HOOKS:
  const [getAllProducts, { data: productData, isError, isLoading }] =
    useLazyGetAllProductsQuery();
  const [loginUser, { data: userData }] = useLoginMutation();
  console.log('user token RTK: ', userData);

  return (
    <div className={styles.mainWrapper}>
      <div className="">
        <button
          onClick={() => {
            loginUser(userMockData);
          }}
        >
          Login
        </button>
        {/* <button onClick={() => uploadHandler()}>Upload</button> */}
        <button onClick={() => checkHandler()}>Check</button>
        <button onClick={() => console.log(userData)}>Check TOKEN</button>
        <button onClick={() => localStorage.clear()}>Logout</button>
        <button
          onClick={() => {
            getAllProducts();
          }}
        >
          Get All Products
        </button>
      </div>
      <div className={styles.btnWrapper}>
        <Link target="_blank" className={styles.wishBtn} to={'/wishlist'}>
          <span>W</span>
          {isUserLogin && <span className={styles.info}>0</span>}
        </Link>
        <Link className={styles.wishBtn} to={'/cart'}>
          <span>C</span>
          {isUserLogin && <span className={styles.info}>0</span>}
        </Link>
      </div>
    </div>
  );
}

export default TestForBackPage;

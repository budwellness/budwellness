/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import cn from 'classnames';

// COMPONENTS:
import LoginInput from './LoginInput/LoginInput';

// USER IMPORTS:
import { useLoginUserMutation } from '../../store/serverResponse/danitApi.auth';
import {
  setCustomerDataAction,
  userLoginUserAction,
} from '../../store/user/user.slice';

import styles from './LoginForm.module.scss';
import { toast } from 'react-toastify';

import ButtonHeader from '../ButtonHeader/ButtonHeader';

import LogoIcon from '../Header/icons/LogoIcon';
import { Link } from 'react-router-dom';
import validationSchema from './validationLogin.js';
import { setModal } from '../../store/modal/modal.slice.js';
import { useUpdateCartMutation } from '../../store/serverResponse/danitApi.cart';
import extractIdAndQuantityForCartMigration from '../../helpers/extractIdAndQuantityForCartMigration';
import {
  mergeLocalWithServerCartAction,
  setCartAction,
} from '../../store/cart/cart.slice';
import mergeLocalAndServerCarts from '../../helpers/mergeLocalAndServerCarts';
import { useLazyGetCustomerDataQuery } from '../../store/serverResponse/danitApi.customer.js';

const { log } = console;

function LoginForm(props) {
  const navigate = useNavigate();
  const {
    actions: { getCart, getWishlist },
  } = props;

  const initialValues = {
    loginOrEmail: '',
    password: '',
  };

  const mockValue = {
    loginOrEmail: 'customer@gmail.com',
    password: '1111111',
  };

  /* --------------------------- INIT HOOKS: --------------------------- */

  const dispatch = useDispatch();

  const { localCart: localCartStoreData, cart } = useSelector(
    (state) => state.cart
  );

  /* --------------------------- RTK QUERY CUSTOM HOOKS: --------------------------- */

  // USER API:
  const [
      loginUser,
    {
      data: loginUserToken,
      isSuccess: loginIsSuccess ,
      isError:loginIsError,
    }
  ] = useLoginUserMutation();
  const [updateCart, { data, isError, isSuccess, error }] =
    useUpdateCartMutation();
  const [getCustomer] = useLazyGetCustomerDataQuery();
  /* --------------------------- COMPONENT LOGIC: --------------------------- */

  const isLoginSuccessHandler = () => {
    if (loginIsSuccess && loginUserToken) {
      toast.success('You was successfully logged in!');
      dispatch(userLoginUserAction(loginUserToken));
      localStorage.setItem('token', loginUserToken);
      if (localCartStoreData.length > 0) {
        getCart(loginUserToken)
          .unwrap()
          .then((response) => {
            log(response);
            let products = [];
            if (response) {
              products = response.products;
            }
            // return mergeLocalAndServerCarts(localCartStoreData, products.map((p) => (
            //   { product: p.product, cartQuantity: p.cartQuantity }
            // )))
            return mergeLocalAndServerCarts(localCartStoreData, products);
          })
          .then((response) => {
            if (response) {
              return updateCart(
                extractIdAndQuantityForCartMigration(response, loginUserToken)
              );
            }
          })
          .then((response) => {
            if (response) {
              const {
                data: { products },
              } = response;
              dispatch(setCartAction(products));
              localStorage.setItem('localCart', JSON.stringify([]));
            }
          });
      } else {
        getCart(loginUserToken);
      }
      getWishlist(loginUserToken);
      getCustomer(loginUserToken)
        .unwrap()
        .then((response) => dispatch(setCustomerDataAction(response)));
    }
    if(loginIsError){
      toast.error("Invalid Login or Password")
    }
  };

  useEffect(() => isLoginSuccessHandler(), [loginIsSuccess,loginIsError]);

  return (
    <>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={(values) => {
          // console.log(values)
          loginUser(values);
        }}
      >
        <Form className={styles.form}>
          <div className={styles.logoIcon}>
            <LogoIcon/>
          </div>
          <div className={styles.form_name}>
            <h2 className={styles.title}>Sing in</h2>
            <p className={styles.title}>
              Bud
              <span className={cn(styles.header_logoTitle, styles.accentColor)}>
                Wellness
              </span>
            </p>
          </div>
          {/* <h2 className={styles.title}>Sing in Bud<span
                        className={cn(styles.header_logoTitle, styles.accentColor)}>Wellness</span>
                    </h2> */}
          <div className={styles.wrapperLogin}>
            <LoginInput
                className={styles.loginInput}
                name="loginOrEmail"
                type="text"
                placeholder="Login"
                label="Username or email address"
                loginIsError={loginIsError}
            />
            <div className={styles.passwordInput}>
              <LoginInput
                  className={styles.loginInput}
                  name="password"
                  type="password"
                  placeholder="Password"
                  label="Password"
              />
              <Link to="/" className={styles.forgotPassword}>
                Forgot password?
              </Link>
            </div>
            <ButtonHeader className={styles.btnLogin} type="submit">
              Sign in
            </ButtonHeader>
            {/* <Link
          to="/registration"
          className={styles.createAcc}
          onClick={() => dispatch(setModal(false))}
        >
          Create an account
        </Link> */}
            <ButtonHeader
                className={styles.btnCreate}
                onClick={() => {
                  dispatch(setModal(false));
                  navigate('/registration');
                }}
            >
              Create an account
            </ButtonHeader>
          </div>
        </Form>
      </Formik>
      <div className={styles.footerInput}>
        <ButtonHeader
          className={styles.btnLogin}
          type="submit"
          onClick={() => loginUser(mockValue)}
        >
          DEMO
        </ButtonHeader>
      </div>
    </>
  );
}

export default LoginForm;

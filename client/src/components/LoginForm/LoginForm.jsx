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
import { userLoginUserAction } from '../../store/user/user.slice';

import styles from './LoginForm.module.scss';
import { toast } from 'react-toastify';

import ButtonHeader from '../ButtonHeader/ButtonHeader';

import LogoIcon from '../Header/icons/LogoIcon';
import { Link } from 'react-router-dom';
import validationSchema from './validationLogin.js';
import { setModal } from '../../store/modal/modal.slice.js';
import { useUpdateCartMutation } from '../../store/serverResponse/danitApi.cart';
import extractIdAndQuantityForCartMigration from '../../helpers/extractIdAndQuantityForCartMigration';
import { mergeLocalWithServerCartAction, setCartAction } from '../../store/cart/cart.slice';
import mergeLocalAndServerCarts from '../../helpers/mergeLocalAndServerCarts';

const { log } = console

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

  const { localCart: localCartStoreData, cart } = useSelector((state) => state.cart)

  /* --------------------------- RTK QUERY CUSTOM HOOKS: --------------------------- */

  // USER API:
  const [loginUser, { data: loginUserToken, isSuccess: loginIsSuccess }] =
    useLoginUserMutation();
  const [updateCart, { data, isError, isSuccess, error }] = useUpdateCartMutation();
  /* --------------------------- COMPONENT LOGIC: --------------------------- */

  const isLoginSuccessHandler = () => {
    if (loginIsSuccess && loginUserToken) {
      toast.success('You was successfully logged in!');
      dispatch(userLoginUserAction(loginUserToken));
      localStorage.setItem('token', loginUserToken);
      if (localCartStoreData.length > 0) {

        getCart(loginUserToken)
          .unwrap()
          .then(response => {
            let products = [];
            if (response) {
              products = response.products
            }
            return mergeLocalAndServerCarts(localCartStoreData, products.map((p) => (
              { product: p.product, cartQuantity: p.cartQuantity }
            )))


            // if (!response) {
            //   return
            // } else {
            //   const { products } = response;
            //   log('localCartStoreData', localCartStoreData)
            //   log('modifed response', products.map((p) => (
            //     { product: p.product, cartQuantity: p.cartQuantity }
            //   )))
            //   log('MERGED', mergeLocalAndServerCarts(localCartStoreData, products.map((p) => (
            //     { product: p.product, cartQuantity: p.cartQuantity }
            //   ))))

            // }
          })
          .then((response) => {
            if (response) {
              return updateCart(extractIdAndQuantityForCartMigration(response, loginUserToken))
            }
          })
          .then((response) => {
            if (response) {
              log('ZAHOJU KUDA NADO')
              const { data: { products } } = response;
              dispatch(setCartAction(products.map((p) => (
                { product: p.product, cartQuantity: p.cartQuantity }
              ))))
              localStorage.setItem('localCart', JSON.stringify([]))

            } else {
              log('hihihihi')
            }

          })




        // .then(({ products }) => {
        //   if (!products) {
        //     mergeLocalAndServerCarts(localCartStoreData, products.map((p) => (
        //       { product: p.product, cartQuantity: p.cartQuantity }
        //     )))
        //   }
        // })
        // .then((response) => updateCart(extractIdAndQuantityForCartMigration(response, loginUserToken)))
        // .then(({ data: { products } }) => setCartAction(products.map((p) => (
        //   { product: p.product, cartQuantity: p.cartQuantity }
        // ))))
      } else {
        getCart(loginUserToken);
      }
      getWishlist(loginUserToken);
    }
  };

  useEffect(() => isLoginSuccessHandler(), [loginIsSuccess]);
  // useEffect(() => {
  //   log('data', data)
  //   log('isError', isError)
  //   log('isSuccess', isSuccess)
  //   log('error', error)
  // }, [data, isError, isSuccess, error])

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('something happen');
          console.log(values);
          loginUser(values);
        }}
      >
        <Form className={styles.form}>
          <div className={styles.form_name}>
            <h2 className={styles.title}>Sing in</h2>
            <div className={styles.logoIcon}>
              <LogoIcon />
            </div>
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
              type="email"
              placeholder="Login"
              label="Username or email address"
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

import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import CustomInput from '../CustomInput/CustomInput';
import CartSummaryTable from '../../Cart/CartSummary/CartSummaryTable/CartSummaryTable';
import Button from '../../Button/Button';
// import LinkUderline from '../../LinkUnderline/LinkUnderline';
import validationSchema from './validationSchema';

import styles from './ShippingForm.module.scss';
import generateTemporaryLogin from '../../../helpers/generateTemporaryLogin';
import generateTemporaryPassword from '../../../helpers/generateTemporaryPassword';
import generateTemporaryOrderNo from '../../../helpers/generateTemporaryOrderNo';
import {
  useRegistrationUserMutation,
  useLoginUserMutation,
} from '../../../store/serverResponse/danitApi.auth';
import { useCreateCartMutation } from '../../../store/serverResponse/danitApi.cart';
import { useCreateOrderMutation } from '../../../store/serverResponse/danitApi.orders';
import {
  clearCartAction,
  clearLocalCartAction,
} from '../../../store/cart/cart.slice';

export default function ShippingForm() {
  const dispatch = useDispatch();

  const { isUserLogin, token, detailInfo } = useSelector((state) => state.user);
  const { localCart } = useSelector((state) => state.cart);

  const [initialValues, setInitialValues] = useState({
    firstName: detailInfo?.firstName || '',
    lastName: detailInfo?.lastName || '',
    phone: detailInfo?.telephone || '',
    email: detailInfo?.email || '',
    deliveryAddress: '',
  });

  useEffect(() => {
    setInitialValues({
      firstName: detailInfo?.firstName || '',
      lastName: detailInfo?.lastName || '',
      phone: detailInfo?.telephone || '',
      email: detailInfo?.email || '',
      deliveryAddress: '',
    });
  }, [detailInfo]);

  const [
    registrationUser,
    // {
    //   data: registrationUserData,
    //   isSuccess: registrationUserIsSuccess,
    //   isError: registrationUserIsError,
    //   error: registrationUserError,
    // },
  ] = useRegistrationUserMutation();
  const [loginUser] = useLoginUserMutation();
  const [createCart] = useCreateCartMutation();
  const [createOrder] = useCreateOrderMutation();

  // const registrationHandler = () => {
  //   log('Виконався registrationHandler');
  // };
  // useEffect(() => {
  //   registrationHandler();
  // }, [registrationUserIsSuccess, registrationUserIsError]);

  const onSubmitHandler = (values, actions) => {
    const tempOrderNo = generateTemporaryOrderNo(9);

    const newOrder = {
      customerId: detailInfo?._id,
      email: values.email,
      mobile: values.phone,
      letterSubject: 'Thank you for order! You are welcome!',
      letterHtml: `<h1>Your order is placed. OrderNo is ${tempOrderNo}.</h1><p>{Other details about order in your HTML}</p>`,
      deliveryAddress: values.deliveryAddress,
      shipping: 'free',
      paymentInfo: 'Credit card',
      canceled: false,
      status: 'not shipped',
      tempOrderNo,
    };

    if (isUserLogin) {
      createOrder({
        token,
        newOrder,
      })
        .unwrap()
        .then(
          () => {
            dispatch(clearLocalCartAction());
            dispatch(clearCartAction());
            toast.success(`Your order №${tempOrderNo} is placed`);
          },
          (rejOrder) => {
            if (rejOrder.data.message) {
              toast.error(rejOrder.data.message);
            } else {
              toast.error('Something went wrong...');
            }
          }
        );
    } else {
      const temporaryLogin = generateTemporaryLogin(values.email);
      const temporaryPassword = generateTemporaryPassword();

      const registrationData = {
        firstName: values.firstName,
        lastName: values.lastName,
        login: temporaryLogin,
        email: values.email,
        password: temporaryPassword,
        telephone: values.phone,
      };

      registrationUser(registrationData)
        .unwrap()
        .then(
          ({ customer }) => {
            loginUser({
              loginOrEmail: customer.email,
              password: temporaryPassword,
            })
              .unwrap()
              .then((res) => {
                const products = localCart.map((elem) => ({
                  cartQuantity: elem.cartQuantity,
                  product: elem.product._id,
                }));
                const newCart = {
                  products,
                };
                createCart({ newCart, token: res })
                  .unwrap()
                  .then((resolve) => {
                    newOrder.products = resolve.products;
                    newOrder.customerId = customer._id;
                    createOrder({
                      token: res,
                      newOrder,
                    })
                      .unwrap()
                      .then(
                        () => {
                          localStorage.setItem('localCart', JSON.stringify([]));
                          dispatch(clearLocalCartAction());
                          dispatch(clearCartAction());
                          toast.success(`Your order №${tempOrderNo} is placed`);
                        },
                        (rejOrder) => {
                          if (rejOrder.data.message) {
                            toast.error(rejOrder.data.message);
                          } else {
                            toast.error('Something went wrong...');
                          }
                        }
                      );
                  });
              });
            actions.resetForm();
          },
          (rej) => {
            if (rej.data.message) {
              toast.error(rej.data.message);
            } else {
              toast.error('Something went wrong...');
            }
          }
        );
    }
  };

  return (
    <div className={styles.cart_summaryForm}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitHandler}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {(form) => (
          <Form>
            <CustomInput name="firstName" placeholder="First name" />
            <CustomInput name="lastName" placeholder="Last name" />
            <CustomInput name="phone" placeholder="Phone" />
            <CustomInput name="email" placeholder="E-mail" />
            <CustomInput
              name="deliveryAddress"
              placeholder="Delivery address"
            />
            {/* <LinkUderline
              type="submit"
              style={{ width: 'fit-content', margin: 0 }}
              isDisabled={!form.isValid}
            >
              Submit
            </LinkUderline> */}
            <CartSummaryTable />
            <Button
              type="submit"
              isDisabled={!form.isValid}
              text="Checkout"
              className="orangeBtn"
              onClick={() => {}}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

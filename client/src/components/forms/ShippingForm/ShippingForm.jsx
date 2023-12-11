import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { useSelector } from 'react-redux';

import CustomInput from '../CustomInput/CustomInput';
import CartSummaryTable from '../../Cart/CartSummary/CartSummaryTable/CartSummaryTable';
import Button from '../../Button/Button';
// import LinkUderline from '../../LinkUnderline/LinkUnderline';
import validationSchema from './validationSchema';

import styles from './ShippingForm.module.scss';
import {
  useCreateOrderMutation,
  // useLazyGetAllOrdersQuery,
} from '../../../store/serverResponse/danitApi.orders';

const { log } = console;

export default function ShippingForm() {
  const { isUserLogin, token, detailInfo } = useSelector((state) => state.user);
  const [formic, setFormic] = useState();
  const [initialValuesLoggedCustomer, setInitialValuesLoggedCustomer] =
    useState({});

  const initialValuesNonAuthenticatedCustomer = {
    fullName: '',
    mobilePhone: '',
    email: '',
    deliveryAddress: '',
  };

  useEffect(() => {
    if (detailInfo) {
      setInitialValuesLoggedCustomer({
        fullName: detailInfo.firstName + detailInfo.lastName,
        mobilePhone: detailInfo.telephone,
        email: detailInfo.email,
        deliveryAddress: '',
      });
    } else {
      setInitialValuesLoggedCustomer({});
    }
  }, [detailInfo]);

  const [createOrder] = useCreateOrderMutation();
  // const [getAllOrders] = useLazyGetAllOrdersQuery();
  // getAllOrders(token).then((response) => log(response));

  const onSubmit = (values, actions) => {
    if (isUserLogin) {
      const newOrder = {
        customerId: detailInfo._id,
        email: values.email,
        mobile: values.mobilePhone,
        letterSubject: 'Thank you for order! You are welcome!',
        letterHtml:
          '<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>',
        deliveryAddress: values.deliveryAddress,
        shipping: 'free',
        paymentInfo: 'Credit card',
        canceled: false,
        status: 'not shipped',
      };
      log(newOrder);
      log(token);

      createOrder({
        token,
        newOrder,
      });
    }

    actions.resetForm();
  };

  useEffect(() => {
    if (isUserLogin) {
      if (Object.keys(initialValuesLoggedCustomer).length > 0) {
        setFormic(
          <Formik
            initialValues={initialValuesLoggedCustomer}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(form) => (
              <Form>
                <CustomInput name="fullName" placeholder="Full name" />
                <CustomInput name="mobilePhone" placeholder="Mobile phone" />
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
        );
      }
    } else {
      // log('detailInfo-', detailInfo);
      // log('initialValuesLoggedCustomer-', initialValuesLoggedCustomer);
      // setInitialValuesLoggedCustomer({});
    }
  }, [isUserLogin, initialValuesLoggedCustomer]);

  return (
    <div className={styles.cart_summaryForm}>
      {Object.keys(initialValuesLoggedCustomer).length > 0 ? (
        formic
      ) : (
        <Formik
          initialValues={initialValuesNonAuthenticatedCustomer}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(form) => (
            <Form>
              <CustomInput name="fullName" placeholder="Full name" />
              <CustomInput name="mobilePhone" placeholder="Mobile phone" />
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
      )}
    </div>
  );
}

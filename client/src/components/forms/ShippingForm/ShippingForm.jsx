import React from 'react';
import { Formik, Form } from 'formik';

import CustomInput from '../CustomInput/CustomInput';
import LinkUderline from '../../LinkUnderline/LinkUnderline';
import validationSchema from './validationSchema';

import styles from './ShippingForm.module.scss';

export default function ShippingForm() {
  const initialValues = {
    fullName: '',
    mobilePhone: '',
    email: '',
    deliveryAddress: '',
  };

  const onSubmit = (values, actions) => {
    // console.log(values);
    actions.resetForm();
  };

  return (
    <div className={styles.cart_summaryForm}>
      <h5 className={styles.cart_summaryForm_header}>Calculate Shipping</h5>
      <Formik
        initialValues={initialValues}
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
            <LinkUderline
              type="submit"
              style={{ width: 'fit-content', margin: 0 }}
              isDisabled={!form.isValid}
            >
              Submit
            </LinkUderline>
          </Form>
        )}
      </Formik>
    </div>
  );
}

/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import validationSchema from './validationSchema';
import Button from '../../../components/Button/Button';
import styles from './FormData.module.scss';
import { useEditUserMutation } from '../../../store/serverResponse/danitApi.auth';
import { setCustomerDataAction } from '../../../store/user/user.slice';

function FormData() {
  const dispatch = useDispatch();

  const [readOnly, setReadOnly] = useState(true);

  //= ================== тут приходят с редакса
  const { detailInfo, token: tokenReduxStore } = useSelector((state) => state.user);
  const [initialValues, setInitialValues] = useState({
    firstName: detailInfo?.firstName || '',
    lastName: detailInfo?.lastName || '',
    login: detailInfo?.login || '',
    email: detailInfo?.email || '',
    phone: detailInfo?.phone || '',
    age: detailInfo?.age || '',
    city: detailInfo?.city || '',
    street: detailInfo?.street || '',
  });
    //= =================================

  // тут приходят ответ с сервера
  const [editUser, { data }] = useEditUserMutation();

  const toggleForm = () => {
    setReadOnly(!readOnly);
  };

  useEffect(() => {
    if (data) {
      setInitialValues({
        firstName: data?.firstName,
        lastName: data?.lastName,
        login: data?.login,
        email: data?.email,
        phone: data?.telephone,
        age: data?.age,
        city: data?.city || '',
        street: data?.street || '',
      });
      // setIsDataLoaded(true)
      dispatch(setCustomerDataAction(data));
    }
  }, [data]);

  useEffect(() => {
    setInitialValues({
      firstName: detailInfo?.firstName || '',
      lastName: detailInfo?.lastName || '',
      login: detailInfo?.login || '',
      email: detailInfo?.email || '',
      phone: detailInfo?.phone || '',
      age: detailInfo?.age || '',
      city: detailInfo?.city || '',
      street: detailInfo?.street || '',
    });
  }, [detailInfo]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        editUser({ userData: values, token: tokenReduxStore });
        toggleForm();
      }}
      validationSchema={validationSchema}
      validateOnBlur
      enableReinitialize
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className={styles.formDataWrapper}>
            <div className={styles.form}>
              <label htmlFor="firstName" className={styles.form__subtitle}>
                Your firstName
              </label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Your name"
                className={styles.form__message}
                readOnly={readOnly}
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className={styles.form__errorMessage}
              />
            </div>

            <div className={styles.form}>
              <label htmlFor="lastName" className={styles.form__subtitle}>
                Your last name
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Your last name"
                className={styles.form__message}
                readOnly={readOnly}
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className={styles.form__errorMessage}
              />
            </div>

            <div className={styles.form}>
              <label htmlFor="login" className={styles.form__subtitle}>
                Your login
              </label>
              <Field
                type="text"
                id="login"
                name="login"
                placeholder="Your username"
                className={styles.form__message}
                readOnly={readOnly}
              />
              <ErrorMessage
                name="login"
                component="div"
                className={styles.form__errorMessage}
              />
            </div>

            <div className={styles.form}>
              <label htmlFor="email" className={styles.form__subtitle}>
                Your email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className={styles.form__message}
                readOnly={readOnly}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.form__errorMessage}
              />
            </div>

            <div className={styles.form}>
              <label htmlFor="phone" className={styles.form__subtitle}>
                Your phone number
              </label>
              <Field
                type="text"
                id="phone"
                name="phone"
                className={styles.form__message}
                readOnly={readOnly}
              />
              <ErrorMessage
                name="phone"
                component="div"
                className={styles.form__errorMessage}
              />
            </div>

            <div className={styles.form}>
              <label htmlFor="age" className={styles.form__subtitle}>
                Your age
              </label>
              <Field
                type="text"
                id="age"
                name="age"
                placeholder="Your age"
                className={styles.form__message}
                readOnly={readOnly}
              />
              <ErrorMessage
                name="age"
                render={(message) => (
                  <div
                    className={`${styles.form__errorMessage} ${
                      message.length > 35 ? styles.form__longErrorMessage : ''
                    }`}
                  >
                    {message}
                  </div>
                )}
              />
            </div>

            <div className={styles.form}>
              <label htmlFor="city" className={styles.form__subtitle}>
                Enter your city
              </label>
              <Field
                type="text"
                id="city"
                name="city"
                placeholder="City"
                className={styles.form__message}
                readOnly={readOnly}
              />
              <ErrorMessage
                name="city"
                component="div"
                className={styles.form__errorMessage}
              />
            </div>

            <div className={styles.form}>
              <label htmlFor="street" className={styles.form__subtitle}>
                Enter your street, build
              </label>
              <Field
                type="text"
                id="street"
                name="street"
                placeholder="Street, build"
                className={styles.form__message}
                readOnly={readOnly}
              />
              <ErrorMessage
                name="street"
                component="div"
                className={styles.form__errorMessage}
              />
            </div>
          </div>
          <div className={styles.buttonWrapp}>
            {readOnly && (
            <Button
              type="button"
              text="Edit"
              className="profileBtn"
              onClick={toggleForm}
            />
            )}
            {!readOnly && (
            <>
              <Button
                type="submit"
                text="save"
                className="profileBtn"
              />
              <Button
                type="button"
                text="cancel"
                className="profileRedBtn"
                onClick={toggleForm}
              />
            </>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormData;

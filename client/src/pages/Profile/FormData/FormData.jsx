/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import validationSchema from './validationSchema';
import Button from '../../../components/Button/Button';
import EyeIcon from '../../../components/UI/EyeIcon';
import styles from './FormData.module.scss';

const initialValues = {
  name: '',
  lastName: '',
  userName: '',
  email: '',
  password: '',
  newPassword: '',
  phone: '+380',
  age: '',
  city: '',
  street: '',
};

function FormData() {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        resetForm();
      }}
      validationSchema={validationSchema}
      validateOnBlur
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className={styles.formDataWrapper}>
            <div className={styles.form}>
              <label htmlFor="name" className={styles.form__subtitle}>
                Your name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className={styles.form__message}
              />
              <ErrorMessage
                name="name"
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
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className={styles.form__errorMessage}
              />
            </div>

            <div className={styles.form}>
              <label htmlFor="userName" className={styles.form__subtitle}>
                Your username
              </label>
              <Field
                type="text"
                id="userName"
                name="userName"
                placeholder="Your username"
                className={styles.form__message}
              />
              <ErrorMessage
                name="userName"
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
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.form__errorMessage}
              />
            </div>

            <div className={styles.form}>
              <label htmlFor="password" className={styles.form__subtitle}>
                Your password
              </label>
              <Field
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Your password"
                className={styles.form__message}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.form__errorMessage}
              />
              <EyeIcon
                className={
                  !showPassword
                    ? styles.form__passwordIcon
                    : styles.form__passwordIconActive
                }
                onClick={togglePasswordVisibility}
              />
            </div>

            <div className={styles.form}>
              <label htmlFor="newPassword" className={styles.form__subtitle}>
                Your new password
              </label>
              <Field
                type={showNewPassword ? 'text' : 'password'}
                id="newPassword"
                name="newPassword"
                placeholder="Your new password"
                className={styles.form__message}
              />
              <ErrorMessage
                name="newPassword"
                component="div"
                className={styles.form__errorMessage}
              />
              <EyeIcon
                className={
                  !showNewPassword
                    ? styles.form__passwordIcon
                    : styles.form__passwordIconActive
                }
                onClick={toggleNewPasswordVisibility}
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
              />
              <ErrorMessage
                name="street"
                component="div"
                className={styles.form__errorMessage}
              />
            </div>
          </div>
          <div className={styles.buttonWrapp}>
            <Button type="button" text="Save" className="profileBtn" />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormData;

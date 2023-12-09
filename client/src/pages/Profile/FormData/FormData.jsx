/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Button from '../../../components/Button/Button';
import styles from './FormData.module.scss';

const initialValues = {
  name: '',
  lastName: '',
  userName: '',
  email: '',
  password: '',
  newPassword: '',
  phone: '+',
  age: '',
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'The name is too short')
    .max(25, 'The name is too long')
    .required('This field is required')
    .matches(/^([^0-9]*)$/gm, 'Only letters'),
  email: yup.string().email('Invalid e-mail format'),
  age: yup
    .number()
    .integer('Тільки ціле число')
    .min(16, 'Вам ще немає 16')
    .max(100, 'Введіть коректний вік')
    .required("Поле обов'язкове для заповнення"),
});

function FormData() {
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
                type="text"
                id="password"
                name="password"
                // placeholder="you@example.com"
                className={styles.form__message}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.form__errorMessage}
              />
            </div>

            <div className={styles.form}>
              <label htmlFor="newPassword" className={styles.form__subtitle}>
                Your new password
              </label>
              <Field
                type="text"
                id="newPassword"
                name="newPassword"
                // placeholder="you@example.com"
                className={styles.form__message}
              />
              <ErrorMessage
                name="newPassword"
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
                // placeholder="Code+number "
                className={styles.form__message}
              />
              <ErrorMessage
                name="phone"
                component="div"
                className={styles.form__errorMessage}
              />
            </div>

            <div className={styles.form}>
              <label htmlFor=" age" className={styles.form__subtitle}>
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
                component="div"
                className={styles.form__errorMessage}
              />
            </div>

            <div className={styles.buttonWrapp}>
              <Button type="button" text="Save" className="orangeBtn" />
            </div>
            {/* <Button type="button" text="Save" className="orangeBtn" /> */}
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormData;

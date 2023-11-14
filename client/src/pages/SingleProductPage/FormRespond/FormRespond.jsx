/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as yup from 'yup';
import Button from '../../../components/Button/Button';
import styles from './FormRespond.module.scss';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'The name is too short')
    .max(25, 'The name is too long')
    .required('This field is required')
    .matches(/^([^0-9]*)$/gm, 'Only letters'),
  email: yup.string().email('Invalid e-mail format'),
  message: yup
    .string()
    .min(10, 'Message too short')
    .max(100, 'Message too long')
    .required('This field is required'),
});

function FormRespond() {
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
          <div className={styles.wrapper_name_email}>
            <div className={styles.form}>
              <label htmlFor="name" className={styles.form__subtitle}>
                Your Name
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
              <label htmlFor="email" className={styles.form__subtitle}>
                Your Email
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
          </div>

          <div className={styles.form}>
            <label htmlFor="message" className={styles.form__subtitle}>
              Message
            </label>
            <Field
              as="textarea"
              id="message"
              name="message"
              placeholder="Type Your Message"
              className={styles.form__messageText}
            />
            <ErrorMessage
              name="message"
              component="div"
              className={styles.form__errorMessage}
            />
          </div>

          <div className={styles.buttonWrapp}>
            <Button type="submit" text="Leave a Reply" className="orangeBtn" />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormRespond;

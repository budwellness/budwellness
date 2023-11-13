/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '../../../components/Button/Button';
import styles from './FormikField.module.scss';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

function FormikField() {
  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
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
            <ErrorMessage name="name" component="div" />
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
            <ErrorMessage name="email" component="div" />
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
            <ErrorMessage name="message" component="div" />
          </div>

          <div className={styles.buttonWrapp}>
            <Button type="submit" text="Leave a Reply" className="orangeBtn" />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormikField;

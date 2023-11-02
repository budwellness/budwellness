import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Form, Formik } from 'formik';

import PropTypes from 'prop-types';
import LoginInput from './LoginInput/LoginInput';

import styles from './LoginForm.module.scss';

function LoginForm({ setShowModal }) {
  const initialValues = {
    login: '',
    password: '',
  };

  const onSubmit = (values) => {
    console.log(values);
    // here will be the logic of the request to the server
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className={styles.form}>
        <LoginInput name="login" type="text" placeholder="Login" label="Login" />
        <LoginInput name="password" type="text" placeholder="Password" label="Password" />
        <div className={styles.footerInput}>
          <button className={styles.btn} type="submit">login</button>
          <button className={styles.btn} type="button" onClick={() => setShowModal(false)}>cancel</button>
        </div>
      </Form>
    </Formik>
  );
}

LoginForm.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};

export default LoginForm;

/* eslint-disable */
import React, { useState } from 'react';
import { Form, Formik } from 'formik';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Input from './Input/Input';
// import Textarea from './Textarea/Textarea';

import validationSchema from './validationRegistrationForm';
import { useRegistrationUserMutation } from '../../store/serverResponse/danitApi.auth';
import { setModal } from '../../store/modal/modal.slice';

import Container from '../../components/Container/Container';
import ButtonHeader from '../../components/ButtonHeader/ButtonHeader';

import styles from './Registration.module.scss';

function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState('');
  const [emailError, setEmailError] = useState('');

  const [registrationUser,
    { data: registrationData, error: registrationError }] = useRegistrationUserMutation();

  const initialValues = {
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    password: '',
    telephone: '+380',
    age: '',
  };

  const submit = async (value) => {
    try {
      const response = await registrationUser(value);
      if (response.error) {
        const errorMessage = response.error.data.message;

        if (errorMessage.includes('Login')) {
          setLoginError(errorMessage);
          setEmailError(null);
        } else if (errorMessage.includes('Email')) {
          setEmailError(errorMessage);
          setLoginError(null);
        } else {
          setLoginError(null);
          setEmailError(null);
        }
      } else {
        setLoginError(null);
        setEmailError(null);
        navigate('/');
        dispatch(setModal(true));
      }
    } catch (error) {
      setLoginError(null);
      setEmailError(null);
    }
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submit}
      >
        {({ isValid }) => (
          <Form className={styles.wrapperForm}>
            <div className={styles.form}>
              <h3 className={styles.registration}>Registration</h3>
              <Input
                name="firstName"
                type="text"
                placeholder="Enter your name"
                label="Your name"
                className={styles.formLabel}
              />
              <Input
                name="lastName"
                type="text"
                placeholder="Enter your Last name"
                label="Your Last name"
                className={styles.formLabel}
              />
              <Input
                name="login"
                type="text"
                placeholder="Enter your Login"
                label="Your Login"
                className={styles.formLabel}
                loginError={loginError}
              />
              <Input
                name="email"
                type="text"
                placeholder="Enter your email"
                label="Your email"
                className={styles.formLabel}
                emailError={emailError}
              />
              <Input
                name="password"
                type="password"
                placeholder="Enter your password"
                label="Your password"
                className={styles.formLabel}
              />
              <Input
                name="repeatPassword"
                type="password"
                placeholder="Repeat password"
                label="Repeat your password"
                className={styles.formLabel}
              />
              <Input
                name="telephone"
                type="text"
                placeholder="Enter your phone number"
                label="Your phone number"
                className={styles.formLabel}
              />
              <Input
                name="age"
                type="text"
                placeholder="Enter your age"
                label="Your age"
                className={styles.formLabel}
                value
              />
              <ButtonHeader
                className={styles.btnForm}
                type="submit"
              >
                Sign in
              </ButtonHeader>
              {/* <button */}
              {/*    type='submit' */}
              {/*    className={styles.btnForm} */}
              {/*    disabled={!isValid} */}
              {/* >Sign up */}
              {/* </button> */}
              {/* <button type='button' className={styles.btnForm}> */}
              {/*    Скасувати оформлення */}
              {/* </button> */}
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

Registration.propTypes = {};
Registration.defaultProps = {};

export default Registration;

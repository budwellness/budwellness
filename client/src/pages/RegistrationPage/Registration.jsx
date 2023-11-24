import React from 'react';
import { Form, Formik } from 'formik';

import { useNavigate } from 'react-router-dom';
import Input from './Input/Input';
// import Textarea from './Textarea/Textarea';

import styles from './Registration.module.scss';
import validationSchema from './validation';

import Container from '../../components/Container/Container';
import ButtonHeader from '../../components/ButtonHeader/ButtonHeader';

function Registration() {
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    name: '',
    lastName: '',
    age: '',
    address: '',
    phone: '',
  };
  const onSubmit = () => {
    // console.log(values, 'Reg!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    navigate('/');
  };
  return (
  // <Container>
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ isValid }) => (
        <Form className={styles.wrapperForm}>
          <Container>
            <div className={styles.form}>
              <h3>Registration</h3>
              <Input
                name="email"
                type="text"
                placeholder="Enter your email"
                label="Your email"
                className={styles.formLabel}
              />
              <Input
                name="name"
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
                name="age"
                type="number"
                placeholder="Enter your age"
                label="Your age"
                className={styles.formLabel}
              />
              {/* <Textarea */}
              {/*  name="address" */}
              {/*  type="text" */}
              {/*  placeholder="Enter your address" */}
              {/*  label="Your address" */}
              {/*  className={styles.formLabel} */}
              {/*  rows={3} */}
              {/* /> */}
              <Input
                name="phone"
                type="number"
                placeholder="Enter your phone number"
                label="Your phone number"
                className={styles.formLabel}
              />
              <ButtonHeader
                className={styles.btnForm}
                type="submit"
                disabled={!isValid}
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
          </Container>
        </Form>
      )}
    </Formik>
  // </Container>
  );
}

Registration.propTypes = {};
Registration.defaultProps = {};

export default Registration;

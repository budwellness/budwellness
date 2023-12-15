/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import EyeIcon from '../../../components/UI/EyeIcon';
import Button from '../../../components/Button/Button';
import validationSchemaChangePass from './validationSchemaChangePass';

import styles from './ChangePassword.module.scss';
import { useChangePasswordMutation } from '../../../store/serverResponse/danitApi.auth';

function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatNewPassword, setRepeatShowNewPassword] = useState(false);

  const { token: tokenReduxStore } = useSelector((state) => state.user);

  const [changePassword] = useChangePasswordMutation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };
  const toggleRepeatNewPasswordVisibility = () => {
    setRepeatShowNewPassword(!showRepeatNewPassword);
  };

  const initialValues = {
    password: '',
    newPassword: '',
    repeatNewPassword: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaChangePass}
      onSubmit={(values, { resetForm }) => {
        try {
          changePassword({ userData: values, token: tokenReduxStore })
            .unwrap()
            .then(((response) => {
              if (response.password) {
                toast.error(response.password);
              } else if (response.message) {
                toast.success(response.message);
                resetForm();
              }
            }), ((reject) => {
              toast.error(reject.error);
            }));
        } catch (e) {
          toast.error(e);
        }
      }}
    >
      <Form>
        <div className={styles.formDataWrapper}>
          <div className={styles.form}>
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
              <label htmlFor="repeatNewPassword" className={styles.form__subtitle}>
                Your new password
              </label>
              <Field
                type={showRepeatNewPassword ? 'text' : 'password'}
                id="repeatNewPassword"
                name="repeatNewPassword"
                placeholder="Repeat new password"
                className={styles.form__message}
              />
              <ErrorMessage
                name="repeatNewPassword"
                component="div"
                className={styles.form__errorMessage}
              />
              <EyeIcon
                className={
                                    !showRepeatNewPassword
                                      ? styles.form__passwordIcon
                                      : styles.form__passwordIconActive
                                }
                onClick={toggleRepeatNewPasswordVisibility}
              />
            </div>
          </div>
        </div>
        <div className={styles.buttonWrapp}>
          {/* {readOnly && (<Button */}
          {/*    type="button" */}
          {/*    text="Edit" */}
          {/*    className="profileBtn" */}
          {/*    onClick={toggleForm} */}
          {/* />)} */}
          {/* {!readOnly && ( */}
          {/*    <> */}
          {/*        <Button */}
          {/*            type="submit" */}
          {/*            text="save" */}
          {/*            className="profileBtn" */}
          {/*        /> */}
          {/*        <Button */}
          {/*            type="button" */}
          {/*            text="cancel" */}
          {/*            className="profileRedBtn" */}
          {/*            onClick={toggleForm} */}
          {/*        /> */}
          {/*    </> */}
          {/* )} */}
          <Button
            type="submit"
            text="save"
            className="profileBtn"
          />
        </div>
      </Form>
    </Formik>
  );
}

export default ChangePassword;

import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import EyeIcon from '../../../components/UI/EyeIcon';
import Button from "../../../components/Button/Button.jsx";
import validationSchemaChangePass from "./validationSchemaChangePass.js";

import styles from "./ChangePassword.module.scss"
import {useChangePasswordMutation} from "../../../store/serverResponse/danitApi.auth.js";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";

const ChangePassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showRepeatNewPassword, setRepeatShowNewPassword] = useState(false);

    const {isUserLogin, token: tokenReduxStore} = useSelector(state => state.user)

    const [changePassword, {data, isSuccess}] = useChangePasswordMutation()
    console.log("ответ", data)


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
        password: "testtest",
        newPassword: "testtest",
        repeatNewPassword: "testtest",
    }


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchemaChangePass}
            onSubmit={(values, {resetForm}) => {
                changePassword({userData: values, token: tokenReduxStore})
                resetForm()
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
                    {/*{readOnly && (<Button*/}
                    {/*    type="button"*/}
                    {/*    text="Edit"*/}
                    {/*    className="profileBtn"*/}
                    {/*    onClick={toggleForm}*/}
                    {/*/>)}*/}
                    {/*{!readOnly && (*/}
                    {/*    <>*/}
                    {/*        <Button*/}
                    {/*            type="submit"*/}
                    {/*            text="save"*/}
                    {/*            className="profileBtn"*/}
                    {/*        />*/}
                    {/*        <Button*/}
                    {/*            type="button"*/}
                    {/*            text="cancel"*/}
                    {/*            className="profileRedBtn"*/}
                    {/*            onClick={toggleForm}*/}
                    {/*        />*/}
                    {/*    </>*/}
                    {/*)}*/}
                    <Button
                        type="submit"
                        text="save"
                        className="profileBtn"
                        // onClick={togglePasswordChangeHandler}
                    />
                </div>
            </Form>
        </Formik>
    );
};

export default ChangePassword;
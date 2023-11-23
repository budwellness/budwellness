/* eslint-disable */
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Form, Formik} from 'formik';
import cn from "classnames";


// COMPONENTS:
import LoginInput from './LoginInput/LoginInput';

// USER IMPORTS:
import {useLoginUserMutation} from '../../store/serverResponse/danitApi.auth';
import {userLoginUserAction} from '../../store/user/user.slice';

import styles from './LoginForm.module.scss';
import {toast} from 'react-toastify';

import ButtonHeader from "../ButtonHeader/ButtonHeader";


import LogoIcon from "../Header/icons/LogoIcon";
import {Link} from "react-router-dom";
import validationSchema from "./validationLogin.js";


function LoginForm(props) {

    const {
        actions: {
            getCart,
            getWishlist,
        }
    } = props


    const initialValues = {
        loginOrEmail: '',
        password: '',
    };

    const mockValue = {
        loginOrEmail: 'customer@gmail.com',
        password: '1111111',
    };

    /* --------------------------- INIT HOOKS: --------------------------- */

    const dispatch = useDispatch();

    /* --------------------------- RTK QUERY CUSTOM HOOKS: --------------------------- */

    // USER API:
    const [loginUser, {data: loginUserToken, isSuccess: loginIsSuccess}] =
        useLoginUserMutation();

    /* --------------------------- COMPONENT LOGIC: --------------------------- */


    const isLoginSuccessHandler = () => {
        if (loginIsSuccess && loginUserToken) {
            toast.success('You was successfully logged in!')
            dispatch(userLoginUserAction(loginUserToken));
            localStorage.setItem('token', loginUserToken);
            getWishlist(loginUserToken);
            getCart(loginUserToken);
        }
    };

    useEffect(() => isLoginSuccessHandler(), [loginIsSuccess]);


    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                console.log('something happen');
                console.log(values);
                loginUser(values)
            }}>
                <Form className={styles.form}>
                    <div className={styles.logoIcon}><LogoIcon/></div>
                    <h2 className={styles.title}>Sing in Bud<span
                        className={cn(styles.header_logoTitle, styles.accentColor)}>Wellness</span>
                    </h2>
                    <div className={styles.wrapperLogin}>
                        <LoginInput
                            className={styles.loginInput}
                            name="loginOrEmail"
                            type="email"
                            placeholder="Login"
                            label="Username or email address"/>
                        <div className={styles.passwordInput}>
                            <LoginInput
                                className={styles.loginInput}
                                name="password"
                                type="password"
                                placeholder="Password"
                                label="Password"/>
                            <Link
                                to="/"
                                className={styles.forgotPassword}
                            >
                                Forgot password?
                            </Link>
                            <ButtonHeader className={styles.btnLogin} type="submit">
                                Sign in
                            </ButtonHeader>
                        </div>
                    </div>
                </Form>
            </Formik>
            <div className={styles.footerInput}>
                <ButtonHeader
                    className={styles.btnLogin}
                    type="submit"
                    onClick={() => loginUser(mockValue)}
                >DEMO</ButtonHeader>
                <Link to="/" className={styles.createAcc}>Create an account</Link>
            </div>
        </>
    );
}


export default LoginForm;
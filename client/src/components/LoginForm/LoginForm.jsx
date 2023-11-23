/* eslint-disable */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Form, Formik} from 'formik';
import cn from "classnames";
import PropTypes from 'prop-types';


// COMPONENTS: 
import LoginInput from './LoginInput/LoginInput';
import validationSchema from "./validation.js";

// USER IMPORTS: 
import {useLoginUserMutation} from '../../store/serverResponse/danitApi.auth';
import {userLoginUserAction} from '../../store/user/user.slice';

import styles from './LoginForm.module.scss';
import {toast} from 'react-toastify';

import ButtonHeader from "../ButtonHeader/ButtonHeader";

import GoogleIcon from "./icons/GoogleIcon.jsx";
import FacebookIcon from "./icons/FacebookIcon.jsx";
import FaceBookIcon from "../UI/FaceBookIcon.jsx";
import LogoIcon from "../Header/icons/LogoIcon.jsx";
import {Link} from "react-router-dom";
import {setModal} from "../../store/modal/modal.slice.js";


function LoginForm(props) {
    const [loginError, setLoginError] = useState(null);

    const {
        actions: {
            handleModal,
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
            toast.success('You were successfully logged in!');
            dispatch(userLoginUserAction(loginUserToken));
            localStorage.setItem('token', loginUserToken);
            getWishlist(loginUserToken);
            getCart(loginUserToken);
            setLoginError("asd")
        } else {
            setLoginError('Invalid username or password. Please try again.');
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
                            placeholder="Email"
                            label="Email address"/>
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
                <Link
                    to="/registration"
                    className={styles.createAcc}
                    onClick={() => dispatch(setModal(false))}
                >Create an account</Link>
            </div>
        </>
    );
}


export default LoginForm;

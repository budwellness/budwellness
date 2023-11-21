/* eslint-disable */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Form, Formik} from 'formik';
import cn from "classnames";
import PropTypes from 'prop-types';

// COMPONENTS: 
import LoginInput from './LoginInput/LoginInput';

// USER IMPORTS: 
import {useLoginUserMutation} from '../../store/serverResponse/danitApi.auth';
import {userLoginUserAction} from '../../store/user/user.slice';

import styles from './LoginForm.module.scss';
import {toast} from 'react-toastify';

import ButtonHeader from "../ButtonHeader/ButtonHeader.jsx";

import GoogleIcon from "./icons/GoogleIcon.jsx";
import FacebookIcon from "./icons/FacebookIcon.jsx";
import FaceBookIcon from "../UI/FaceBookIcon.jsx";
import LogoIcon from "../Header/icons/LogoIcon.jsx";
import {Link} from "react-router-dom";


function LoginForm(props) {

    const {
        actions: {
            handleModal,
            getCart,
            getWishlist,
        }
    } = props


    const initialValues = {
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
            toast.success('You was successfuly logged in!')
            dispatch(userLoginUserAction(loginUserToken));
            localStorage.setItem('token', loginUserToken);
            getWishlist(loginUserToken);
            getCart(loginUserToken);
        }
    };

    useEffect(() => isLoginSuccessHandler(), [loginIsSuccess]);


    return (
        <Formik initialValues={initialValues} onSubmit={(values) => {
            console.log('something happen');
            console.log(values);
            loginUser(values)
        }}>
            <Form className={styles.form}>
                <div className={styles.logoIcon}><LogoIcon/></div>
                <h2 className={styles.title}>Sing in Bud<span className={cn(styles.header_logoTitle, styles.accentColor)}>Wellness</span>
                </h2>
                <div className={styles.wrapperLogin}>
                    <LoginInput
                        className={styles.loginInput}
                        name="loginOrEmail"
                        type="text"
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
                <div className={styles.footerInput}>
                    <ButtonHeader className={styles.btnLogin} type="submit">DEMO</ButtonHeader>
                    <Link to="/" className={styles.createAcc}>Create an account</Link>
                </div>
            </Form>
        </Formik>
    );
}


export default LoginForm;

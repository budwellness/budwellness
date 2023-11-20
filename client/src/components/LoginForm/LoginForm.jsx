/* eslint-disable */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Form, Formik} from 'formik';
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
                <h2 className={styles.title}>Sing In With</h2>
                <div className={styles.socialLinksWrapper}>
                    <ButtonHeader href="https://www.facebook.com/" className={styles.facebook}>
                        <FacebookIcon/>
                        Facebook
                    </ButtonHeader>
                    <ButtonHeader href="https://google.com/" className={styles.google}>
                        <GoogleIcon/>
                        Google
                    </ButtonHeader>
                </div>
                <LoginInput name="loginOrEmail" type="text" placeholder="Login" label="Login"/>
                <LoginInput name="password" type="text" placeholder="Password" label="Password"/>
                <div className={styles.footerInput}>
                    <button className={styles.btn} type="submit">
                        login
                    </button>
                    <button
                        className={styles.btn}
                        type="button"
                        onClick={handleModal}
                    >
                        cancel
                    </button>
                </div>
            </Form>
        </Formik>
    );
}


export default LoginForm;

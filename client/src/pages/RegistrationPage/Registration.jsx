import React, {useState} from 'react';
import {Form, Formik} from 'formik';

import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Input from './Input/Input';
// import Textarea from './Textarea/Textarea';

import {validationSchema} from './validationRegistrationForm.js';
import {useRegistrationUserMutation} from '../../store/serverResponse/danitApi.auth.js';
import {setModal} from '../../store/modal/modal.slice.js';

import Container from '../../components/Container/Container';
import ButtonHeader from '../../components/ButtonHeader/ButtonHeader';

import styles from './Registration.module.scss';

function Registration() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loginError, setLoginError] = useState("")
    const [emailError, setEmailError] = useState("")


    const [registrationUser, {data: registrationData, error: registrationError}] = useRegistrationUserMutation();


    const initialValues = {
        firstName: '',
        lastName: '',
        login: '',
        email: '',
        password: '',
        telephone: '+380',
        age: '',
    };
    const mock = {
        firstName: 'mock',
        lastName: 'mock',
        login: 'mock',
        email: 'mock2222@test.test',
        password: '1234567',
        telephone: '+380000000000',
        age: '33',
    };


    const submit = async () => {
        try {
            const response = await registrationUser(mock);
            if (response.error) {
                const errorMessage = response.error.data.message;

                if (errorMessage.includes("Login")) {
                    setLoginError(errorMessage);
                    setEmailError(null);
                } else if (errorMessage.includes("Email")) {
                    setEmailError(errorMessage);
                    setLoginError(null);
                } else {
                    setLoginError(null);
                    setEmailError(null);
                }
            } else {
                // Если ошибок нет, выводим в консоль ответ на регистрацию
                console.log('Ответ на регистрацию:', response.data);
                setLoginError(null);
                setEmailError(null);
            }
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
            setLoginError(null);
            setEmailError(null);
        }
    };


    // const submit = async () => {
    //     try {
    //         const response = await registrationUser(mock);
    //         if (response.error) {
    //             // Если есть ошибка, вывести сообщение об ошибке
    //
    //             setErrorLogin(response.error.data.message)
    //         } else {
    //             // Если нет ошибки, вывести данные ответа
    //             console.log('Registration response:', response.data);
    //         }
    //     } catch (error) {
    //         console.error('Registration error:', error);
    //     }
    // };

    return (
        <Container>
            <Formik
                initialValues={mock}
                validationSchema={validationSchema}
                onSubmit={submit}
                // onSubmit={(values) => {
                //   console.log(values);
                //   registrationUser(values);
                //   navigate('/');
                //   dispatch(setModal(true));
                // }}
            >
                {({isValid}) => (
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

import React from 'react';
import {Form, Formik} from 'formik';

import {useNavigate} from 'react-router-dom';
import Input from './Input/Input';
// import Textarea from './Textarea/Textarea';

import styles from './Registration.module.scss';
import {validationSchema} from "./validationRegistrationForm.js"

import Container from '../../components/Container/Container';
import ButtonHeader from '../../components/ButtonHeader/ButtonHeader';
import {useRegistrationUserMutation} from "../../store/serverResponse/danitApi.auth.js";
import {setModal} from "../../store/modal/modal.slice.js";
import {useDispatch} from "react-redux";

function Registration() {
const dispatch = useDispatch()
    const navigate = useNavigate();

    const [registrationUser, {data: registrationUserData, error}] = useRegistrationUserMutation();

    const initialValues = {
        firstName: "",
        lastName: "",
        login: "",
        email: "",
        password: "",
        telephone: "+380",
        age: ""
    };


    return (
        <Container>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                    registrationUser(values);
                    navigate("/")
                    dispatch(setModal(true))
                }}
            >
                {({}) => (
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
                            />
                            <Input
                                name="email"
                                type="text"
                                placeholder="Enter your email"
                                label="Your email"
                                className={styles.formLabel}
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
                            />
                            <ButtonHeader
                                className={styles.btnForm}
                                type="submit"
                                // disabled={!isValid}
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

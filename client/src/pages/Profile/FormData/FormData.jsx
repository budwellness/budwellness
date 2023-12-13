/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useState, useEffect} from 'react';
import {
    Formik, Form, Field, ErrorMessage,
} from 'formik';
import validationSchema from './validationSchema';
import Button from '../../../components/Button/Button';
import EyeIcon from '../../../components/UI/EyeIcon';
import styles from './FormData.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {Logger} from "sass";
import {useEditUserMutation} from "../../../store/serverResponse/danitApi.auth.js";
import {setCustomerDataAction} from "../../../store/user/user.slice.js";


function FormData() {
    const dispatch = useDispatch()

    const [readOnly, setReadOnly] = useState(true)
    const [isDataLoaded, setIsDataLoaded] = useState(false)
    const [formik, setFormik] = useState()

    //===================
    const {detailInfo, isUserLogin, token: tokenReduxStore} = useSelector(state => state.user)
    console.log("detailInfo",detailInfo)
    const [initialValues, setInitialValues] = useState({
        firstName: detailInfo?.firstName || '',
        lastName: detailInfo?.lastName || '',
        login: detailInfo?.login || '',
        email: detailInfo?.email || '',
        phone: detailInfo?.phone || '',
        age: detailInfo?.age || '',
        city: detailInfo?.city || '',
        street: detailInfo?.street || '',
    });
    //=======================


    const [editUser, {data, isSuccess}] = useEditUserMutation()
    console.log("data", data)

    // const [initialValuesLogCustumer, setInitialValuesLogCustumer] = useState({});

    // const initialValues = {
    //     firstName: detailInfo.firstName || '',
    //     lastName: detailInfo.lastName || '',
    //     login: detailInfo.login || '',
    //     email: detailInfo.email || '',
    //     phone: detailInfo.phone || '',
    //     age: detailInfo.age || '',
    //     city: detailInfo.city || '',
    //     street: detailInfo.street || '',
    // }

    // const [loadedIntitalValues, setLoadedIntitalValues] = useState();
    // console.log("loadedIntitalValues",loadedIntitalValues)
    const toggleForm = () => {
        setReadOnly(!readOnly)
    }


//=======================================
//     useEffect(() => {
//         // Проверяем, есть ли у нас данные detailInfo, и если нет, запросим их
//         if (!detailInfo) {
//             // Здесь должен быть код для загрузки данных, например, асинхронный запрос
//
//             // Замените следующую строку на ваш реальный код запроса
//             // fetchDetails(); // Например, это может быть функция, которая делает запрос к серверу
//         } else {
//             // Если данные уже есть, устанавливаем их в стейт
//             setInitialValues({
//                 firstName: detailInfo.firstName || '',
//                 lastName: detailInfo.lastName || '',
//                 login: detailInfo.login || '',
//                 email: detailInfo.email || '',
//                 phone: detailInfo.phone || '',
//                 age: detailInfo.age || '',
//                 city: detailInfo.city || '',
//                 street: detailInfo.street || '',
//             });
//         }
//     }, [detailInfo]);




//     useEffect(() => {
//         if (detailInfo) {
//             setInitialValues({
//                 firstName: detailInfo.firstName,
//                 lastName: detailInfo.lastName,
//                 login: detailInfo.login,
//                 email: detailInfo.email,
//                 phone: detailInfo.telephone,
//                 age: detailInfo.age,
//                 city: detailInfo.city || "",
//                 street: detailInfo.street || "",
//             })
//             // setIsDataLoaded(true)
//             // dispatch(setCustomerDataAction(data))
//         }
//     }, [detailInfo]);

    useEffect(() => {
        if (data) {
            setInitialValues({
                firstName: data?.firstName,
                lastName: data?.lastName,
                login: data?.login,
                email: data?.email,
                phone: data?.telephone,
                age: data?.age,
                city: data?.city || "",
                street: data?.street || "",
            })
            // setIsDataLoaded(true)
            dispatch(setCustomerDataAction(data))
        }
    }, [data]);


//
//     useEffect(() => {
//         if (isUserLogin) {
//             if(Object.keys(initialValuesLogCustumer).length > 0) {
//                 setFormik(<Formik
//                     // initialValues={isUserLogin ? authInitialValues : initialValues}
//                     initialValues={initialValuesLogCustumer}
//                     onSubmit={(values) => {
//                         editUser({userData: values, token: tokenReduxStore})
//                         console.log("sub", values)
//                         toggleForm()
//                     }}
//                     validationSchema={validationSchema}
//                     validateOnBlur
//                 >
//                     {({handleSubmit}) => (
//                         <Form onSubmit={handleSubmit}>
//                             <div className={styles.formDataWrapper}>
//                                 <div className={styles.form}>
//                                     <label htmlFor="firstName" className={styles.form__subtitle}>
//                                         Your firstName
//                                     </label>
//                                     <Field
//                                         type="text"
//                                         id="firstName"
//                                         name="firstName"
//                                         placeholder="Your name"
//                                         className={styles.form__message}
//                                         readOnly={readOnly}
//                                     />
//                                     <ErrorMessage
//                                         name="firstName"
//                                         component="div"
//                                         className={styles.form__errorMessage}
//                                     />
//                                 </div>
//
//                                 <div className={styles.form}>
//                                     <label htmlFor="lastName" className={styles.form__subtitle}>
//                                         Your last name
//                                     </label>
//                                     <Field
//                                         type="text"
//                                         id="lastName"
//                                         name="lastName"
//                                         placeholder="Your last name"
//                                         className={styles.form__message}
//                                         readOnly={readOnly}
//                                     />
//                                     <ErrorMessage
//                                         name="lastName"
//                                         component="div"
//                                         className={styles.form__errorMessage}
//                                     />
//                                 </div>
//
//                                 <div className={styles.form}>
//                                     <label htmlFor="login" className={styles.form__subtitle}>
//                                         Your login
//                                     </label>
//                                     <Field
//                                         type="text"
//                                         id="login"
//                                         name="login"
//                                         placeholder="Your username"
//                                         className={styles.form__message}
//                                         readOnly={readOnly}
//                                     />
//                                     <ErrorMessage
//                                         name="login"
//                                         component="div"
//                                         className={styles.form__errorMessage}
//                                     />
//                                 </div>
//
//                                 <div className={styles.form}>
//                                     <label htmlFor="email" className={styles.form__subtitle}>
//                                         Your email
//                                     </label>
//                                     <Field
//                                         type="email"
//                                         id="email"
//                                         name="email"
//                                         placeholder="you@example.com"
//                                         className={styles.form__message}
//                                         readOnly={readOnly}
//                                     />
//                                     <ErrorMessage
//                                         name="email"
//                                         component="div"
//                                         className={styles.form__errorMessage}
//                                     />
//                                 </div>
//
//                                 <div className={styles.form}>
//                                     <label htmlFor="phone" className={styles.form__subtitle}>
//                                         Your phone number
//                                     </label>
//                                     <Field
//                                         type="text"
//                                         id="phone"
//                                         name="phone"
//                                         className={styles.form__message}
//                                         readOnly={readOnly}
//                                     />
//                                     <ErrorMessage
//                                         name="phone"
//                                         component="div"
//                                         className={styles.form__errorMessage}
//                                     />
//                                 </div>
//
//                                 <div className={styles.form}>
//                                     <label htmlFor="age" className={styles.form__subtitle}>
//                                         Your age
//                                     </label>
//                                     <Field
//                                         type="text"
//                                         id="age"
//                                         name="age"
//                                         placeholder="Your age"
//                                         className={styles.form__message}
//                                         readOnly={readOnly}
//                                     />
//                                     <ErrorMessage
//                                         name="age"
//                                         render={(message) => (
//                                             <div
//                                                 className={`${styles.form__errorMessage} ${
//                                                     message.length > 35 ? styles.form__longErrorMessage : ''
//                                                 }`}
//                                             >
//                                                 {message}
//                                             </div>
//                                         )}
//                                     />
//                                 </div>
//
//                                 <div className={styles.form}>
//                                     <label htmlFor="city" className={styles.form__subtitle}>
//                                         Enter your city
//                                     </label>
//                                     <Field
//                                         type="text"
//                                         id="city"
//                                         name="city"
//                                         placeholder="City"
//                                         className={styles.form__message}
//                                         readOnly={readOnly}
//                                     />
//                                     <ErrorMessage
//                                         name="city"
//                                         component="div"
//                                         className={styles.form__errorMessage}
//                                     />
//                                 </div>
//
//                                 <div className={styles.form}>
//                                     <label htmlFor="street" className={styles.form__subtitle}>
//                                         Enter your street, build
//                                     </label>
//                                     <Field
//                                         type="text"
//                                         id="street"
//                                         name="street"
//                                         placeholder="Street, build"
//                                         className={styles.form__message}
//                                         readOnly={readOnly}
//                                     />
//                                     <ErrorMessage
//                                         name="street"
//                                         component="div"
//                                         className={styles.form__errorMessage}
//                                     />
//                                 </div>
//                             </div>
//                             <div className={styles.buttonWrapp}>
//                                 {readOnly && (<Button
//                                     type="button"
//                                     text="Edit"
//                                     className="profileBtn"
//                                     onClick={toggleForm}
//                                 />)}
//                                 {!readOnly && (
//                                     <>
//                                         <Button
//                                             type="submit"
//                                             text="save"
//                                             className="profileBtn"
//                                         />
//                                         <Button
//                                             type="button"
//                                             text="cancel"
//                                             className="profileRedBtn"
//                                             onClick={toggleForm}
//                                         />
//                                     </>
//                                 )}
//                                 {/*<Button*/}
//                                 {/*    type="button"*/}
//                                 {/*    text="toggle"*/}
//                                 {/*    className="profileBtn"*/}
//                                 {/*onClick={toggleForm}*/}
//                                 {/*/>*/}
//                             </div>
//                         </Form>
//                     )}
//                 </Formik>)
//
//             }
//         }
//     }, [isUserLogin,initialValuesLogCustumer]);

    // useEffect(() => {
    //     if (isSuccess && data) {
    //         setLoadedIntitalValues({
    //             firstName: data.firstName,
    //             lastName: data.lastName,
    //             login: data.login,
    //             email: data.email,
    //             phone: data.telephone,
    //             age: data.age,
    //             city: data.city,
    //             street: data.street,
    //         })
    //
    //         dispatch(setCustomerDataAction(data))
    //         setIsDataLoaded(true)
    //     }
    //
    // }, [data, isSuccess]);

//==================================================


    // return (
    //     <>
    //         {
    //             Object.keys(initialValuesLogCustumer).length > 0 ? (
    //                 formik
    //             ) : (
    //                 <Formik
    //                     // initialValues={isUserLogin ? authInitialValues : initialValues}
    //                     initialValues={initialValues}
    //                     onSubmit={(values) => {
    //                         editUser({userData: values, token: tokenReduxStore})
    //                         console.log("sub", values)
    //                         toggleForm()
    //                     }}
    //                     validationSchema={validationSchema}
    //                     validateOnBlur
    //                 >
    //                     {({handleSubmit}) => (
    //                         <Form onSubmit={handleSubmit}>
    //                             <div className={styles.formDataWrapper}>
    //                                 <div className={styles.form}>
    //                                     <label htmlFor="firstName" className={styles.form__subtitle}>
    //                                         Your firstName
    //                                     </label>
    //                                     <Field
    //                                         type="text"
    //                                         id="firstName"
    //                                         name="firstName"
    //                                         placeholder="Your name"
    //                                         className={styles.form__message}
    //                                         readOnly={readOnly}
    //                                     />
    //                                     <ErrorMessage
    //                                         name="firstName"
    //                                         component="div"
    //                                         className={styles.form__errorMessage}
    //                                     />
    //                                 </div>
    //
    //                                 <div className={styles.form}>
    //                                     <label htmlFor="lastName" className={styles.form__subtitle}>
    //                                         Your last name
    //                                     </label>
    //                                     <Field
    //                                         type="text"
    //                                         id="lastName"
    //                                         name="lastName"
    //                                         placeholder="Your last name"
    //                                         className={styles.form__message}
    //                                         readOnly={readOnly}
    //                                     />
    //                                     <ErrorMessage
    //                                         name="lastName"
    //                                         component="div"
    //                                         className={styles.form__errorMessage}
    //                                     />
    //                                 </div>
    //
    //                                 <div className={styles.form}>
    //                                     <label htmlFor="login" className={styles.form__subtitle}>
    //                                         Your login
    //                                     </label>
    //                                     <Field
    //                                         type="text"
    //                                         id="login"
    //                                         name="login"
    //                                         placeholder="Your username"
    //                                         className={styles.form__message}
    //                                         readOnly={readOnly}
    //                                     />
    //                                     <ErrorMessage
    //                                         name="login"
    //                                         component="div"
    //                                         className={styles.form__errorMessage}
    //                                     />
    //                                 </div>
    //
    //                                 <div className={styles.form}>
    //                                     <label htmlFor="email" className={styles.form__subtitle}>
    //                                         Your email
    //                                     </label>
    //                                     <Field
    //                                         type="email"
    //                                         id="email"
    //                                         name="email"
    //                                         placeholder="you@example.com"
    //                                         className={styles.form__message}
    //                                         readOnly={readOnly}
    //                                     />
    //                                     <ErrorMessage
    //                                         name="email"
    //                                         component="div"
    //                                         className={styles.form__errorMessage}
    //                                     />
    //                                 </div>
    //
    //                                 {/*<div className={styles.form}>*/}
    //                                 {/*    <label htmlFor="password" className={styles.form__subtitle}>*/}
    //                                 {/*        Your password*/}
    //                                 {/*    </label>*/}
    //                                 {/*    <Field*/}
    //                                 {/*        type={showPassword ? 'text' : 'password'}*/}
    //                                 {/*        id="password"*/}
    //                                 {/*        name="password"*/}
    //                                 {/*        placeholder="Your password"*/}
    //                                 {/*        className={styles.form__message}*/}
    //                                 {/*        readOnly={readOnly}*/}
    //                                 {/*    />*/}
    //                                 {/*    <ErrorMessage*/}
    //                                 {/*        name="password"*/}
    //                                 {/*        component="div"*/}
    //                                 {/*        className={styles.form__errorMessage}*/}
    //                                 {/*    />*/}
    //                                 {/*    <EyeIcon*/}
    //                                 {/*        className={*/}
    //                                 {/*            !showPassword*/}
    //                                 {/*                ? styles.form__passwordIcon*/}
    //                                 {/*                : styles.form__passwordIconActive*/}
    //                                 {/*        }*/}
    //                                 {/*        onClick={togglePasswordVisibility}*/}
    //                                 {/*    />*/}
    //                                 {/*</div>*/}
    //
    //                                 {/*<div className={styles.form}>*/}
    //                                 {/*    <label htmlFor="newPassword" className={styles.form__subtitle}>*/}
    //                                 {/*        Your new password*/}
    //                                 {/*    </label>*/}
    //                                 {/*    <Field*/}
    //                                 {/*        type={showNewPassword ? 'text' : 'password'}*/}
    //                                 {/*        id="newPassword"*/}
    //                                 {/*        name="newPassword"*/}
    //                                 {/*        placeholder="Your new password"*/}
    //                                 {/*        className={styles.form__message}*/}
    //                                 {/*        readOnly={readOnly}*/}
    //                                 {/*    />*/}
    //                                 {/*    <ErrorMessage*/}
    //                                 {/*        name="newPassword"*/}
    //                                 {/*        component="div"*/}
    //                                 {/*        className={styles.form__errorMessage}*/}
    //                                 {/*    />*/}
    //                                 {/*    <EyeIcon*/}
    //                                 {/*        className={*/}
    //                                 {/*            !showNewPassword*/}
    //                                 {/*                ? styles.form__passwordIcon*/}
    //                                 {/*                : styles.form__passwordIconActive*/}
    //                                 {/*        }*/}
    //                                 {/*        onClick={toggleNewPasswordVisibility}*/}
    //                                 {/*    />*/}
    //                                 {/*</div>*/}
    //
    //                                 <div className={styles.form}>
    //                                     <label htmlFor="phone" className={styles.form__subtitle}>
    //                                         Your phone number
    //                                     </label>
    //                                     <Field
    //                                         type="text"
    //                                         id="phone"
    //                                         name="phone"
    //                                         className={styles.form__message}
    //                                         readOnly={readOnly}
    //                                     />
    //                                     <ErrorMessage
    //                                         name="phone"
    //                                         component="div"
    //                                         className={styles.form__errorMessage}
    //                                     />
    //                                 </div>
    //
    //                                 <div className={styles.form}>
    //                                     <label htmlFor="age" className={styles.form__subtitle}>
    //                                         Your age
    //                                     </label>
    //                                     <Field
    //                                         type="text"
    //                                         id="age"
    //                                         name="age"
    //                                         placeholder="Your age"
    //                                         className={styles.form__message}
    //                                         readOnly={readOnly}
    //                                     />
    //                                     <ErrorMessage
    //                                         name="age"
    //                                         render={(message) => (
    //                                             <div
    //                                                 className={`${styles.form__errorMessage} ${
    //                                                     message.length > 35 ? styles.form__longErrorMessage : ''
    //                                                 }`}
    //                                             >
    //                                                 {message}
    //                                             </div>
    //                                         )}
    //                                     />
    //                                 </div>
    //
    //                                 <div className={styles.form}>
    //                                     <label htmlFor="city" className={styles.form__subtitle}>
    //                                         Enter your city
    //                                     </label>
    //                                     <Field
    //                                         type="text"
    //                                         id="city"
    //                                         name="city"
    //                                         placeholder="City"
    //                                         className={styles.form__message}
    //                                         readOnly={readOnly}
    //                                     />
    //                                     <ErrorMessage
    //                                         name="city"
    //                                         component="div"
    //                                         className={styles.form__errorMessage}
    //                                     />
    //                                 </div>
    //
    //                                 <div className={styles.form}>
    //                                     <label htmlFor="street" className={styles.form__subtitle}>
    //                                         Enter your street, build
    //                                     </label>
    //                                     <Field
    //                                         type="text"
    //                                         id="street"
    //                                         name="street"
    //                                         placeholder="Street, build"
    //                                         className={styles.form__message}
    //                                         readOnly={readOnly}
    //                                     />
    //                                     <ErrorMessage
    //                                         name="street"
    //                                         component="div"
    //                                         className={styles.form__errorMessage}
    //                                     />
    //                                 </div>
    //                             </div>
    //                             <div className={styles.buttonWrapp}>
    //                                 {readOnly && (<Button
    //                                     type="button"
    //                                     text="Edit"
    //                                     className="profileBtn"
    //                                     onClick={toggleForm}
    //                                 />)}
    //                                 {!readOnly && (
    //                                     <>
    //                                         <Button
    //                                             type="submit"
    //                                             text="save"
    //                                             className="profileBtn"
    //                                         />
    //                                         <Button
    //                                             type="button"
    //                                             text="cancel"
    //                                             className="profileRedBtn"
    //                                             onClick={toggleForm}
    //                                         />
    //                                     </>
    //                                 )}
    //                                 {/*<Button*/}
    //                                 {/*    type="button"*/}
    //                                 {/*    text="toggle"*/}
    //                                 {/*    className="profileBtn"*/}
    //                                 {/*onClick={toggleForm}*/}
    //                                 {/*/>*/}
    //                             </div>
    //                         </Form>
    //                     )}
    //                 </Formik>
    //             )
    //
    //
    //         }
    //     </>
    // )

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                editUser({userData: values, token: tokenReduxStore})
                console.log("sub", values)
                toggleForm()
            }}
            validationSchema={validationSchema}
            validateOnBlur
        >
            {({handleSubmit}) => (
                <Form onSubmit={handleSubmit}>
                    <div className={styles.formDataWrapper}>
                        <div className={styles.form}>
                            <label htmlFor="firstName" className={styles.form__subtitle}>
                                Your firstName
                            </label>
                            <Field
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="Your name"
                                className={styles.form__message}
                                readOnly={readOnly}
                            />
                            <ErrorMessage
                                name="firstName"
                                component="div"
                                className={styles.form__errorMessage}
                            />
                        </div>

                        <div className={styles.form}>
                            <label htmlFor="lastName" className={styles.form__subtitle}>
                                Your last name
                            </label>
                            <Field
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Your last name"
                                className={styles.form__message}
                                readOnly={readOnly}
                            />
                            <ErrorMessage
                                name="lastName"
                                component="div"
                                className={styles.form__errorMessage}
                            />
                        </div>

                        <div className={styles.form}>
                            <label htmlFor="login" className={styles.form__subtitle}>
                                Your login
                            </label>
                            <Field
                                type="text"
                                id="login"
                                name="login"
                                placeholder="Your username"
                                className={styles.form__message}
                                readOnly={readOnly}
                            />
                            <ErrorMessage
                                name="login"
                                component="div"
                                className={styles.form__errorMessage}
                            />
                        </div>

                        <div className={styles.form}>
                            <label htmlFor="email" className={styles.form__subtitle}>
                                Your email
                            </label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                className={styles.form__message}
                                readOnly={readOnly}
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className={styles.form__errorMessage}
                            />
                        </div>

                        <div className={styles.form}>
                            <label htmlFor="phone" className={styles.form__subtitle}>
                                Your phone number
                            </label>
                            <Field
                                type="text"
                                id="phone"
                                name="phone"
                                className={styles.form__message}
                                readOnly={readOnly}
                            />
                            <ErrorMessage
                                name="phone"
                                component="div"
                                className={styles.form__errorMessage}
                            />
                        </div>

                        <div className={styles.form}>
                            <label htmlFor="age" className={styles.form__subtitle}>
                                Your age
                            </label>
                            <Field
                                type="text"
                                id="age"
                                name="age"
                                placeholder="Your age"
                                className={styles.form__message}
                                readOnly={readOnly}
                            />
                            <ErrorMessage
                                name="age"
                                render={(message) => (
                                    <div
                                        className={`${styles.form__errorMessage} ${
                                            message.length > 35 ? styles.form__longErrorMessage : ''
                                        }`}
                                    >
                                        {message}
                                    </div>
                                )}
                            />
                        </div>

                        <div className={styles.form}>
                            <label htmlFor="city" className={styles.form__subtitle}>
                                Enter your city
                            </label>
                            <Field
                                type="text"
                                id="city"
                                name="city"
                                placeholder="City"
                                className={styles.form__message}
                                readOnly={readOnly}
                            />
                            <ErrorMessage
                                name="city"
                                component="div"
                                className={styles.form__errorMessage}
                            />
                        </div>

                        <div className={styles.form}>
                            <label htmlFor="street" className={styles.form__subtitle}>
                                Enter your street, build
                            </label>
                            <Field
                                type="text"
                                id="street"
                                name="street"
                                placeholder="Street, build"
                                className={styles.form__message}
                                readOnly={readOnly}
                            />
                            <ErrorMessage
                                name="street"
                                component="div"
                                className={styles.form__errorMessage}
                            />
                        </div>
                    </div>
                    <div className={styles.buttonWrapp}>
                        {readOnly && (<Button
                            type="button"
                            text="Edit"
                            className="profileBtn"
                            onClick={toggleForm}
                        />)}
                        {!readOnly && (
                            <>
                                <Button
                                    type="submit"
                                    text="save"
                                    className="profileBtn"
                                />
                                <Button
                                    type="button"
                                    text="cancel"
                                    className="profileRedBtn"
                                    onClick={toggleForm}
                                />
                            </>
                        )}
                    </div>
                </Form>
            )}
        </Formik>
    )


}

export default FormData;

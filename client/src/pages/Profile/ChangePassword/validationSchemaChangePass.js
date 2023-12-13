import * as yup from 'yup';
import * as Yup from "yup";

const validationSchemaChangePass = yup.object().shape({
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .required('This field is required'),
    newPassword: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .required('This field is required'),
    repeatNewPassword:yup
        .string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('This field is required'),
})

export default validationSchemaChangePass;

/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import {
  useAddCommentMutation,
  // useGetCommentsOfProductQuery,
} from '../../../store/serverResponse/danitApi.comments';
// import { setCustomerDataAction } from '../../../store/user/user.slice';

import Button from '../../../components/Button/Button';
import styles from './FormRespond.module.scss';

function FormRespond({ productId }) {
  // const dispatch = useDispatch()

  const { isUserLogin, token, detailInfo } = useSelector((state) => state.user);

  const initialValues = {
    name: detailInfo ? detailInfo.fullName : '',
    email: detailInfo ? detailInfo.email : '',
    message: '',
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'The name is too short')
      .max(25, 'The name is too long')
      .required('This field is required')
      .matches(/^([^0-9]*)$/gm, 'Only letters'),
    email: yup.string().email('Invalid e-mail format'),
    message: yup
      .string()
      .min(10, 'Message too short')
      .max(100, 'Message too long')
      .required('This field is required'),
  });

  const [addComment] = useAddCommentMutation();
  // const [getCommentsOfProduct] = useGetCommentsOfProductQuery();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        if (!isUserLogin) {
          toast.error('Please login first!');
        }

        try {
          const newComment = {
            product: productId,
            content: values.message,
          };
          addComment({ token, newComment });
          // getCommentsOfProduct({ token, productId });
          // .unwrap()
          // .then((response) => dispatch(setCommentsOfProductAction(response)));
          resetForm();
        } catch (error) {
          toast.error('Error submitting comment:', error);
        }
      }}
      validationSchema={validationSchema}
      validateOnBlur
    >
      <Form>
        <div className={styles.wrapper_name_email}>
          <div className={styles.form}>
            <label htmlFor="name" className={styles.form__subtitle}>
              Your Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className={styles.form__message}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.form__errorMessage}
            />
          </div>

          <div className={styles.form}>
            <label htmlFor="email" className={styles.form__subtitle}>
              Your Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className={styles.form__message}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.form__errorMessage}
            />
          </div>
        </div>

        <div className={styles.form}>
          <label htmlFor="message" className={styles.form__subtitle}>
            Message
          </label>
          <Field
            as="textarea"
            id="message"
            name="message"
            placeholder="Type Your Message"
            className={styles.form__messageText}
          />
          <ErrorMessage
            name="message"
            component="div"
            className={styles.form__errorMessage}
          />
        </div>

        <div className={styles.buttonWrapp}>
          <Button type="submit" text="Leave a Reply" className="orangeBtn" />
        </div>
      </Form>
    </Formik>
  );
}

FormRespond.propTypes = {
  productId: PropTypes.string,
};

FormRespond.defaultProps = {
  productId: '',
};
export default FormRespond;

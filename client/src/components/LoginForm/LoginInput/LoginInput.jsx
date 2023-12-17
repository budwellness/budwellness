import React from 'react';

import { Field, useField } from 'formik';
import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './LoginInput.module.scss';

function LoginInput(props) {
  const [field] = useField(props);
  const {
    type, placeholder, classNames, label, name, loginIsError,
  } = props;
  return (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={cn(styles.label, classNames)}>
      <p className={styles.titleInput}>{label}</p>
      <Field
        type={type}
        className={styles.formItem}
        name={name}
        placeholder={placeholder}
                // eslint-disable-next-line react/jsx-props-no-spreading
        {...field}
      />
      {loginIsError && (
          <div className={styles.wrapperError}>
            <p className={styles.errorInput}>Invalid Login or Password</p>
          </div>

          // <ErrorMessage name={name} className={styles.errorInput} component="p" />
      )}
    </label>
  );
}

LoginInput.propTypes = {
  label: PropTypes.string,
  classNames: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  loginIsError: PropTypes.bool,
};

LoginInput.defaultProps = {
  type: 'text',
  label: '',
  classNames: '',
  placeholder: '',
  // eslint-disable-next-line react/default-props-match-prop-types
  rows: 0,
  loginIsError: false,
};
export default LoginInput;

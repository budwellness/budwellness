import React from 'react';

import { ErrorMessage, Field, useField } from 'formik';
import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

function Input(props) {
  const [field, meta] = useField(props);
  const {
    type, placeholder, classNames, label, name,
  } = props;
  return (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={cn(styles.label, classNames)}>
      <p className={styles.label}>{label}</p>
      <Field
        type={type}
        className={styles.formItem}
        name={name}
        placeholder={placeholder}
            // eslint-disable-next-line react/jsx-props-no-spreading
        {...field}
      />
      {!!meta.error && meta.touched && (
        <ErrorMessage name={name} className={styles.errorInput} component="p" />
      )}
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  classNames: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  label: '',
  classNames: '',
  placeholder: '',
  // eslint-disable-next-line react/default-props-match-prop-types
  rows: 0,
};
export default Input;

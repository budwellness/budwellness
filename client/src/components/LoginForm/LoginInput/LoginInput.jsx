import React from 'react';

import { ErrorMessage, Field, useField } from 'formik';
import PropTypes from 'prop-types';

import './LoginInput.module.scss';

function LoginInput(props) {
  const [field, meta] = useField(props);
  const {
    type, placeholder, className, label, name,
  } = props;
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={className}>
      <p className="">{label}</p>
      <Field
        type={type}
        className="form-item"
        name={name}
        placeholder={placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...field}
      />
      {!!meta.error && meta.touched && (
        <ErrorMessage name={name} className="error-input" component="p" />
      )}
    </label>
  );
}

LoginInput.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

LoginInput.defaultProps = {
  type: 'text',
  label: '',
  className: '',
  placeholder: '',
  // eslint-disable-next-line react/default-props-match-prop-types
  rows: 0,
};
export default LoginInput;

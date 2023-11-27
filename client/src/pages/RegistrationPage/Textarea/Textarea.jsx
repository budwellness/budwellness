import React from 'react';
import { useField, Field, ErrorMessage } from 'formik';
import './Textarea.scss';
import PropTypes from 'prop-types';

function Textarea(props) {
  const [field, meta] = useField(props);
  const { type, placeholder, className, label, name, rows } = props;
  return (
    <label className={className} htmlFor={name}>
      <p className="">{label}</p>

      <Field
        as="textarea"
        type={type}
        className="form-item"
        name={name}
        rows={rows}
        placeholder={placeholder}
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...field}
      />
      {!!meta.error && meta.touched && (
        <ErrorMessage name={name} className="error-textarea" component="p" />
      )}
    </label>
  );
}

Textarea.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  rows: PropTypes.number,
};

Textarea.defaultProps = {
  type: 'text',
  label: '',
  className: '',
  placeholder: '',
  rows: 0,
};

export default Textarea;

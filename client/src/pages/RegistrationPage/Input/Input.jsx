import { ErrorMessage, Field, useField } from 'formik';
import './Input.scss';
import PropTypes from 'prop-types';

function Input(props) {
  const [field, meta] = useField(props);
  const {
    type, placeholder, className, label, name,
  } = props;
  return (
    <label className={className}>
      <p className="">{label}</p>
      <Field type={type} className="form-item" name={name} placeholder={placeholder} {...field} />
      {!!meta.error && meta.touched && <ErrorMessage name={name} className="error-input" component="p" />}
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  label: '',
  className: '',
  placeholder: '',
  rows: 0,
};

export default Input;

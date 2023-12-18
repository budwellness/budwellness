/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

function Button(props) {
  const {
    type, text, className, onClick, isDisabled,
  } = props;

  const buttonClasses = [styles.btn, styles[className]].join(' ');

  return (

    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  text: 'Our Products',
  className: 'btn',
  onClick: () => { },
  isDisabled: false,
};

export default Button;

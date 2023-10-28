import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

function Button(props) {
  const {
    type, text, className, onClick,
  } = props;

  const buttonClasses = [
    styles.btn, styles[className],
    // className.includes('orangeBtn') ? styles.orangeBtn : '',
    // className.includes('whiteBtn') ? styles.whiteBtn : '',
  ].join(' ');

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  text: 'Our Products',
  className: 'btn',

  onClick: () => {},
};

export default Button;

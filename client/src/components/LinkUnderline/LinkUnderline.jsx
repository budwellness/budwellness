import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './LinkUnderline.module.scss';

export default function LinkUnderline({
  to, children, style, type, onClick,
}) {
  const Component = type ? 'button' : Link;

  return (
    <Component
      to={type ? undefined : to}
      className={styles.linkUnderline}
      style={style}
      type={type}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}

LinkUnderline.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
  style: PropTypes.shape({}),
  type: PropTypes.string,
  onClick: PropTypes.func,
};

LinkUnderline.defaultProps = {
  to: '/',
  children: 'LinkUnderline',
  style: {},
  type: '',
  onClick: () => {},
};

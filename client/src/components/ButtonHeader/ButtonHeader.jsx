import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './ButtonHeader.module.scss';

function Button({
  className, type, onClick, children, href, ...restProps
}) {
  const Component = href ? 'a' : 'button';

  return (
    <Component
      className={cn(styles.btn, className)}
            // eslint-disable-next-line react/jsx-props-no-spreading
      {...restProps}
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}

Button.defaultProps = {
  onClick: () => {
  },
  type: 'button',
  href: '',
  to: '',
  className: '',
  children: null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string,
  type: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;

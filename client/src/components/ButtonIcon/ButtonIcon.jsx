import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default function ButtonIcon(props) {
  const {
    classNames,
    children,
    onClick,
    ...restProps
  } = props;

  return (
    <button
      type="button"
      className={cn('btn_icon', classNames)}
      onClick={onClick}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...restProps}
    >
      {children}
    </button>
  );
}

ButtonIcon.defaultProps = {
  onClick: () => {},
};

ButtonIcon.propTypes = {
  // eslint-disable-next-line react/require-default-props
  classNames: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  children: PropTypes.object,
  onClick: PropTypes.func,
};

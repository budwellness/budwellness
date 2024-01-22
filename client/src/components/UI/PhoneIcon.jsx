import React from 'react';
import PropTypes from 'prop-types';

function PhoneIcon(props) {
  const { fill, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <path
        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516"
        fill={fill}
      />
    </svg>
  );
}

PhoneIcon.propTypes = {
  fill: PropTypes.string,
};

PhoneIcon.defaultProps = {
  fill: '#efc368',
};

export default PhoneIcon;

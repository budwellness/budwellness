import React from 'react';
import PropTypes from 'prop-types';

function MessageIcon(props) {
  const { fill, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ borderRadius: '50%' }}
      /* eslint-disable react/jsx-props-no-spreading */
      {...rest}
    >
      <path
        d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"
        fill={fill}
      />
    </svg>
  );
}

MessageIcon.propTypes = {
  fill: PropTypes.string.isRequired,
};

export default MessageIcon;

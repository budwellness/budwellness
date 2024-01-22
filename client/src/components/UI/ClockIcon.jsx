/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

function LocationIcon(props) {
  const { ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      // fill={fill}
      {...rest}
    >
      <g data-name="Layer 2">
        <path
          d="M16,1A15,15,0,1,0,31,16,15.017,15.017,0,0,0,16,1ZM4,17H3a1,1,0,0,1,0-2H4a1,1,0,0,1,0,2ZM15,3a1,1,0,0,1,2,0V4a1,1,0,0,1-2,0ZM8.222,25.192l-.707.707A1,1,0,0,1,6.1,24.485l.707-.707a1,1,0,0,1,1.414,1.414Zm0-16.97a1,1,0,0,1-1.414,0L6.1,7.515A1,1,0,0,1,7.515,6.1l.707.707A1,1,0,0,1,8.222,8.222ZM17,29a1,1,0,0,1-2,0V28a1,1,0,0,1,2,0Zm3.707-8.293a1,1,0,0,1-1.414,0l-4-4A1,1,0,0,1,15,16V10a1,1,0,0,1,2,0v5.586l3.707,3.707A1,1,0,0,1,20.707,20.707ZM25.9,25.9a1,1,0,0,1-1.414,0l-.707-.707a1,1,0,0,1,1.414-1.414l.707.707A1,1,0,0,1,25.9,25.9Zm0-18.384-.707.707a1,1,0,0,1-1.414-1.414l.707-.707A1,1,0,1,1,25.9,7.515ZM29,17H28a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z"
          fill="#214842"
        />
      </g>
      <text
        x="0"
        y="47"
        fill="#000000"
        fontSize="5px"
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        Created by Enjang Solehudin
      </text>
      <text
        x="0"
        y="52"
        fill="#000000"
        fontSize="5px"
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        from the Noun Project
      </text>
    </svg>
  );
}

// LocationIcon.propTypes = {
//   fill: PropTypes.string.isRequired,
// };

export default LocationIcon;

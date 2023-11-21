/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

function FaceBookIcon(props) {
  const { fill, ...rest } = props;

  return (
    <svg
      width="15"
      height="26"
      viewBox="0 0 15 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g id="List &#226;&#134;&#146; Item &#226;&#134;&#146; Link">
        <path
          id="Vector"
          d="M11.5786 1.56445V5.10367H9.46917C8.65663 5.10367 8.13317 5.28337 7.89879 5.64276C7.64878 6.00215 7.52377 6.4631 7.52377 7.02563V9.55699H11.438L10.9224 13.5181H7.52377V23.6904H3.42203V13.5181H0V9.55699H3.42203V6.65061C3.42203 5.7912 3.54703 5.04117 3.79704 4.40051C4.04705 3.74423 4.39082 3.19733 4.82834 2.75982C5.28148 2.30667 5.82057 1.97072 6.4456 1.75196C7.07063 1.51757 7.76597 1.40038 8.53163 1.40038C9.25041 1.40038 9.89106 1.41601 10.4536 1.44726C11.0161 1.49413 11.3911 1.5332 11.5786 1.56445Z"
          fill="#214842"
        />
      </g>
    </svg>
  );
}

FaceBookIcon.propTypes = {
  fill: PropTypes.string,
};

FaceBookIcon.defaultProps = {
  fill: '#efc368',
};

export default FaceBookIcon;

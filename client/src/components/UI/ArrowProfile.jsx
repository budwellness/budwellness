import React from 'react';

function ArrowProfile(props) {
  return (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z" />
    </svg>
  );
}

export default ArrowProfile;

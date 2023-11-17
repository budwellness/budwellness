/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

function WhatsAppIcon(props) {
  const { fill, ...rest } = props;

  return (
    <svg
      width="22"
      height="26"
      viewBox="0 0 22 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g
        id="List &#226;&#134;&#146; Item &#226;&#134;&#146; Link"
        clipPath="url(#clip0_9_1905)"
      >
        <path
          id="Vector"
          d="M14.177 14.4557C14.2864 14.4557 14.7161 14.651 15.4662 15.0417C16.2319 15.4323 16.6381 15.6667 16.685 15.7449C16.7007 15.7761 16.7085 15.8074 16.7085 15.8386V15.9558C16.7085 16.1121 16.685 16.2762 16.6381 16.4481C16.5913 16.6356 16.5366 16.8075 16.4741 16.9637C16.3178 17.3388 15.9896 17.6357 15.4896 17.8544C14.9896 18.0888 14.5442 18.206 14.1535 18.206C13.841 18.206 13.4113 18.1045 12.8644 17.9013C12.3174 17.6826 11.9033 17.5028 11.6221 17.3622C10.6532 16.9247 9.84846 16.3543 9.20778 15.6511C8.55147 14.9479 7.93423 14.1666 7.35605 13.3072C7.10603 12.9321 6.88726 12.5258 6.69974 12.0883C6.4966 11.6351 6.39502 11.1741 6.39502 10.7054V10.6116C6.41065 10.1584 6.4966 9.76777 6.65286 9.43961C6.82475 9.11146 7.07477 8.79112 7.40293 8.47859C7.49669 8.38483 7.59826 8.31451 7.70764 8.26763C7.81703 8.22075 7.94204 8.19731 8.08268 8.19731C8.17644 8.19731 8.26238 8.20512 8.34051 8.22075C8.41865 8.23638 8.50459 8.24419 8.59835 8.24419C8.77024 8.24419 8.88744 8.27544 8.94994 8.33795C9.01245 8.40046 9.08277 8.51765 9.1609 8.68954C9.20778 8.79893 9.34842 9.17396 9.58281 9.81465C9.81721 10.4553 9.93441 10.8069 9.93441 10.8694C9.93441 11.1195 9.77814 11.3773 9.46562 11.6429C9.15309 11.9086 8.99682 12.1195 8.99682 12.2758C8.99682 12.3071 9.00464 12.3383 9.02026 12.3696L9.06714 12.4633C9.22341 12.7759 9.42655 13.0962 9.67657 13.4244C9.9266 13.7681 10.1766 14.0572 10.4266 14.2916C10.7392 14.5885 11.0595 14.8385 11.3877 15.0417C11.7314 15.2605 12.0909 15.4636 12.4659 15.6511C12.5128 15.6824 12.5596 15.7058 12.6065 15.7214C12.6534 15.7371 12.7003 15.7449 12.7472 15.7449C12.9503 15.7449 13.1925 15.5339 13.4738 15.112C13.7707 14.6745 14.0051 14.4557 14.177 14.4557ZM11.458 21.5579C12.6143 21.5579 13.7004 21.3313 14.7161 20.8782C15.7474 20.4406 16.6381 19.8468 17.3882 19.0967C18.1539 18.331 18.7555 17.4325 19.1931 16.4012C19.6462 15.3855 19.8728 14.2994 19.8728 13.1431C19.8728 11.9867 19.6462 10.8929 19.1931 9.86153C18.7555 8.84581 18.1617 7.9551 17.4117 7.18941C16.646 6.42371 15.7474 5.8221 14.7161 5.38456C13.7004 4.94702 12.6143 4.72824 11.458 4.72824C10.3016 4.72824 9.20778 4.94702 8.17644 5.38456C7.16072 5.8221 6.27783 6.42371 5.52776 7.18941C4.76206 7.9551 4.15263 8.84581 3.69947 9.86153C3.26193 10.8929 3.04316 11.9867 3.04316 13.1431C3.04316 14.0182 3.17598 14.8776 3.44163 15.7214C3.72291 16.5653 4.12919 17.3466 4.66049 18.0654L3.58227 21.1829L6.84038 20.1515C7.51231 20.6047 8.24676 20.9485 9.0437 21.1829C9.84065 21.4329 10.6454 21.5579 11.458 21.5579ZM11.458 3.04059C12.8487 3.04059 14.1535 3.30624 15.3724 3.83754C16.6069 4.36884 17.6773 5.08765 18.5836 5.99399C19.5056 6.91595 20.2322 7.98635 20.7635 9.20522C21.2948 10.4397 21.5605 11.7523 21.5605 13.1431C21.5605 14.5338 21.2948 15.8386 20.7635 17.0575C20.2322 18.292 19.5134 19.3624 18.6071 20.2687C17.6851 21.1907 16.6069 21.9173 15.3724 22.4486C14.1535 22.9799 12.8487 23.2456 11.458 23.2456C10.5985 23.2456 9.75471 23.1362 8.92651 22.9174C8.0983 22.6986 7.30917 22.3861 6.5591 21.9798L0.980469 23.7612L2.80876 18.3467C2.32434 17.5654 1.96493 16.7293 1.73054 15.8386C1.48051 14.9479 1.3555 14.0494 1.3555 13.1431C1.3555 11.7523 1.62115 10.4397 2.15245 9.20522C2.68375 7.98635 3.40256 6.92376 4.3089 6.01743C5.23086 5.09547 6.30127 4.36884 7.52013 3.83754C8.75461 3.30624 10.0672 3.04059 11.458 3.04059Z"
          fill="#214842"
        />
      </g>
      <defs>
        <clipPath id="clip0_9_1905">
          <rect
            width="20.58"
            height="25"
            fill="white"
            transform="matrix(1 0 0 -1 0.980469 25.6899)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

WhatsAppIcon.propTypes = {
  fill: PropTypes.string.isRequired,
};

export default WhatsAppIcon;

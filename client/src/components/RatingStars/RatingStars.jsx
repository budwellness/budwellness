import React from 'react';

import ReactStars from 'react-rating-stars-component';
import PropTypes from 'prop-types';
import styles from './RatingStars.module.scss';

export default function RatingStars({ size, rate, edit }) {
  return (
    <ReactStars
      classNames={styles.mainRating}
      count={5}
      size={size}
      value={rate}
      edit={edit}
      color="#c6c6c6"
      activeColor="#efc368"
      // eslint-disable-next-line no-console
      onChange={(newValue) => console.log(`New value is ${newValue}`)}
    />
  );
}

RatingStars.propTypes = {
  size: PropTypes.number.isRequired,
  rate: PropTypes.number,
  edit: PropTypes.bool,
};
RatingStars.defaultProps = {
  rate: 0,
  edit: false,
};

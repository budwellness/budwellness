import React from 'react';
import ReactStars from 'react-rating-stars-component';
import PropTypes from 'prop-types';

import styles from './RatingStars.module.scss';

const { log } = console;

export default function RatingStars({ rate, edit }) {
  return (
    <ReactStars
      classNames={styles.mainRating}
      count={5}
      size={25}
      isHalf
      value={rate}
      edit={edit}
      color="#c6c6c6"
      activeColor="#efc368"
      onChange={(newValue) => log(`New value is ${newValue}`)}
    />
  );
}

RatingStars.propTypes = {
  rate: PropTypes.number,
  edit: PropTypes.bool,
};
RatingStars.defaultProps = {
  rate: 0,
  edit: false,
};

import React from 'react';
// eslint-disable-next-line import/no-unresolved
import ReactStars from 'react-rating-stars-component';
import PropTypes from 'prop-types';
import styles from './RatingStars.module.scss';

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
      // eslint-disable-next-line no-console
      onChange={(newValue) => console.log(`New value is ${newValue}`)}
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

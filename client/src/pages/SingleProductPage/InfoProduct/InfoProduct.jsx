/* eslint-disable */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import RatingStars from '../../../components/RatingStars/RatingStars';
import Button from '../../../components/Button/Button';
import FavouriteIcon from '../../../components/UI/FavouriteIcon';
import styles from './InfoProduct.module.scss';

function InfoProduct({ data }) {
  const navigate = useNavigate();
  return (
    <div className={styles.infoWrapp}>
      <div className={styles.title_action}>
        <h1 className={styles.title}>{data.name}</h1>
        <button className={styles.action} type="button">
          <FavouriteIcon className={styles.styleIcon} onClick={() => {}} />
        </button>
      </div>
      <div className={styles.ratingWrapper}>
        <RatingStars rate={data.rate} />
        <p className={styles.ratingText}>
          ({data.reviews.length}
          customer review
          <span className={styles.span}>s</span>)
        </p>
      </div>
      <p className={styles.descShort}>{data.description.short}</p>
      <p className={styles.price}>{data.currentPrice}$</p>
      <div className={styles.buttonWrapper}>
        {/* <ButtonCount /> */}
        <Button
          type="button"
          text="Add to Cart"
          className="orangeBtn"
          onClick={() => {
            navigate('/cart');
          }}
        />
      </div>
      <ul className={styles.infoLlist}>
        <li className={styles.item}>
          <span className={styles.property}>Category:</span>
          <span className={styles.value}>{data.categories}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.property}>Size:</span>
          <span className={styles.value}>
            {data.size}
            {data.sizeType}
          </span>
        </li>
        <li className={styles.item}>
          <span className={styles.property}>Plant Type:</span>
          <span className={styles.value}>{data.plantType}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.property}>THC:</span>
          <span className={styles.value}>
            {data.thc}
            mg/g
          </span>
        </li>
        <li className={styles.item}>
          <span className={styles.property}>CBD:</span>
          <span className={styles.value}>{data.cbd}%</span>
        </li>
        <li className={styles.item}>
          <span className={styles.property}>Effects:</span>
          <span className={styles.value}>{data.effects.join(', ')}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.property}>Tags:</span>
          <span className={styles.value}>{data.tags.join(', ')}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.property}>SKU:</span>
          <span className={styles.value}>{data.itemNo}</span>
        </li>
      </ul>
    </div>
  );
}

InfoProduct.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    description: PropTypes.shape({
      short: PropTypes.string.isRequired,
    }).isRequired,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        fullName: PropTypes.string.isRequired,
        reviewRating: PropTypes.number.isRequired,
        reviewDate: PropTypes.string.isRequired,
        feedback: PropTypes.string.isRequired,
        benefit: PropTypes.string.isRequired,
        disadvantages: PropTypes.string.isRequired,
      })
    ).isRequired,
    currentPrice: PropTypes.number.isRequired,
    categories: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    sizeType: PropTypes.string.isRequired,
    plantType: PropTypes.string.isRequired,
    thc: PropTypes.string.isRequired,
    cbd: PropTypes.number.isRequired,
    effects: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    itemNo: PropTypes.string.isRequired,
  }).isRequired,
};

export default InfoProduct;

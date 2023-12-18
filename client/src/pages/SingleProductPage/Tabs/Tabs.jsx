/* eslint-disable */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormRespond from '../FormRespond/FormRespond';
import ArrowDownIcon from '../../../components/UI/ArrowDownIcon';
import styles from './Tabs.module.scss';

function Tabs(props) {
  const {
    data: { _id, description, reviews, additionalInformation },
  } = props;
  console.log(_id)
  const [toggle, setToggle] = useState(1);

  function updateToggle(index) {
    if (toggle === index) {
      setToggle(0);
    } else {
      setToggle(index);
    }
  }

  return (
    <div className={styles.tabsWrapp}>
      <div className={styles.title_content}>
        <div className={styles.titlesWrap}>
          <div
            className={
              toggle === 1
                ? `${styles.tabTitleWrapp} ${styles.activeTabTitle}`
                : styles.tabTitleWrapp
            }
            onClick={() => {
              updateToggle(1);
            }}
          >
            <h4 className={styles.tabTitle}>Description</h4>
            <ArrowDownIcon
              className={toggle === 1 ? styles.activeArrow : styles.arrow}
            />
          </div>

          <div
            className={
              toggle === 2
                ? `${styles.tabTitleWrapp} ${styles.activeTabTitle}`
                : styles.tabTitleWrapp
            }
            onClick={() => {
              updateToggle(2);
            }}
          >
            <h4 className={styles.tabTitle}>
              Reviews(
              {reviews.length})
            </h4>
            <ArrowDownIcon
              className={toggle === 2 ? styles.activeArrow : styles.arrow}
            />
          </div>
          <div
            className={
              toggle === 3
                ? `${styles.tabTitleWrapp} ${styles.activeTabTitle}`
                : styles.tabTitleWrapp
            }
            onClick={() => {
              updateToggle(3);
            }}
          >
            <h4 className={styles.tabTitle}>Additional Information</h4>
            <ArrowDownIcon
              className={toggle === 3 ? styles.activeArrow : styles.arrow}
            />
          </div>
        </div>

        <div className={styles.contentsWrapp}>
          <div
            className={toggle === 1 ? styles.showContent : styles.tabContent}
          >
            <p className={styles.text}>
              {description.short}
              {description.short}
              <br />
              <br />
              {description.complection}
            </p>
          </div>

          <div
            className={toggle === 2 ? styles.showContent : styles.tabContent}
          >
            {reviews.map((review, index) => (
              // подумати над додаванням id у reviews
              <div key={index} className={styles.text}>
                <ul className={styles.reviewWrrap}>
                  <li className={styles.fullName}>{review.fullName}</li>
                  <li className={styles.reviewDate}>{review.reviewDate}</li>
                  <li>{review.feedback}</li>
                  {review.benefit && (
                    <li>
                      <span className={styles.span}>Benefits:</span>
                      <br />
                      {review.benefit}
                    </li>
                  )}
                  {review.disadvantages && (
                    <li>
                      <span className={styles.span}>Disadvantages:</span>
                      <br />
                      {review.disadvantages}
                    </li>
                  )}
                </ul>
                <hr className={styles.hrLine} />
              </div>
            ))}
            <div className={styles.formReview}>
              <h4 className={styles.formTitle}>Add Review</h4>
              <FormRespond productId={_id} />
            </div>
          </div>
 
          <div
            className={toggle === 3 ? styles.showContent : styles.tabContent}
          >
            <table className={styles.table}>
              <tbody>
                <tr className={styles.row}>
                  <td className={styles.rowTitle}>Ingredients:</td>
                  <td>
                    {additionalInformation.ingredients.toLocaleLowerCase()}
                  </td>
                </tr>
                <tr className={styles.row}>
                  <td className={styles.rowTitle}>Flavors:</td>
                  <td>{additionalInformation.flavors.toLocaleLowerCase()}</td>
                </tr>
                <tr className={styles.row}>
                  <td className={styles.rowTitle}>Recommended Usage:</td>
                  <td>
                    {additionalInformation.recommendedUsage.toLocaleLowerCase()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

Tabs.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string,
    description: PropTypes.shape({
      complection: PropTypes.string.isRequired,
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
    additionalInformation: PropTypes.shape({
      flavors: PropTypes.string.isRequired,
      ingredients: PropTypes.string.isRequired,
      recommendedUsage: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Tabs;

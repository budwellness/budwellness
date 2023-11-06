import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Button from '../Button/Button';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import RatingStars from '../RatingStars/RatingStars';
import FavouriteIcon from '../UI/FavouriteIcon';
import styles from './ProductCard.module.scss';

function ProductCard({ onClick, product }) {
  const {
    imageUrls,
    previousPrice,
    currentPrice,
    rate,
    itemNo,
    thc,
    cbd,
    name,
    classNames,
  } = product;

  let cbdCategory;
  let thcCategory;

  switch (true) {
    case cbd >= 0.1 && cbd <= 1:
      cbdCategory = '0.10-1.00%';
      break;
    case cbd >= 2 && cbd <= 5:
      cbdCategory = '2.00-5.00%';
      break;
    case cbd >= 5 && cbd <= 20:
      cbdCategory = '5.00-20.00%';
      break;
    case cbd >= 20 && cbd <= 50:
      cbdCategory = '20.00-50.00%';
      break;
    default:
      cbdCategory = 'unknown';
  }

  switch (true) {
    case thc >= 0.2 && thc <= 10:
      thcCategory = '0.20-10.00%';
      break;
    case thc >= 11 && thc <= 20:
      thcCategory = '11.00-20.00%';
      break;
    case thc >= 21 && thc <= 30:
      thcCategory = '21.00-30.00%';
      break;
    case thc >= 31 && thc <= 40:
      thcCategory = '31.00- 40.00%';
      break;
    default:
      thcCategory = 'unknown';
  }

  return (

    <div className={cn(styles.productCard, styles[classNames])}>
      <div className={styles.productCard__media}>
        <Link
          to={`/product/${itemNo}`}
          className={styles.productCard__media__productLink}
        >
          <div className={styles.productCard__media__productLink__imageWrapper}>
            <img
              className={
                styles.productCard__media__productLink__imageWrapper__image
              }
              src={imageUrls[0]}
              alt={name}
            />
          </div>
        </Link>
        <div className={styles.overlay}>
          {previousPrice !== currentPrice && (
            <div className={styles.productCard__media__saleLabel}>
              <span className={styles.productCard__media__saleLabel__saleText}>
                Sale
              </span>
            </div>
          )}
          <ButtonIcon
            className={styles.productCard__media__buttonAddFavorites}
            onClick={() => {}}
          >
            <FavouriteIcon className={styles.favoriteIcon} />
          </ButtonIcon>
        </div>
      </div>
      <div className={styles.productCard__main}>
        <RatingStars
          classNames={styles.productCard__main__rating}
          rate={rate}
          size={20}
        />
        <Link
          to={`/product/${itemNo}`}
          className={styles.productCard__main__titleLink}
        >
          {name}
        </Link>
        <div className={styles.productCard__main__property}>
          <div className={styles.productCard__main__property_thc}>
            <span>THC</span>
            {' '}
            {thcCategory}
          </div>
          <div className={styles.productCard__main__property_cbd}>
            <span>CBD</span>
            {' '}
            {cbdCategory}
          </div>
        </div>
        <div className={styles.productCard__main__productPrices}>
          {previousPrice !== currentPrice && (
            <span
              className={styles.productCard__main__productPrices__previousPrice}
            >
              $
              {previousPrice.toFixed(2)}
            </span>
          )}
          <span
            className={styles.productCard__main__productPrices__currentPrice}
          >
            $
            {currentPrice.toFixed(2)}
          </span>
        </div>
        <Button className="whiteBtn" text="Add to cart" onClick={onClick} />
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  // eslint-disable-next-line react/require-default-props
  product: PropTypes.shape({
    imageUrls: PropTypes.arrayOf(PropTypes.string),
    thc: PropTypes.number.isRequired,
    cbd: PropTypes.number.isRequired,
    itemNo: PropTypes.number.isRequired,
    previousPrice: PropTypes.number.isRequired,
    currentPrice: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    name: PropTypes.string,
    classNames: PropTypes.string,
  }),
  // eslint-disable-next-line react/require-default-props
  onClick: PropTypes.func,
};

export default ProductCard;

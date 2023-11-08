import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Button from '../Button/Button';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import RatingStars from '../RatingStars/RatingStars';
import FavouriteIcon from '../UI/FavouriteIcon';
import EyeIcon from '../UI/EyeIcon';
import getThcCategory from '../../helpers/functionGetThcCategory';
import getCbdCategory from '../../helpers/functionGetCbdCategory';
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
        {previousPrice !== currentPrice && (
          <span className={styles.productCard__media__saleLabel}>
            Sale
          </span>
        )}
        <div className={styles.productCard__media__overlay}>
          <div className={styles.productCard__media__overlay__action}>
            <ButtonIcon
              className={styles.buttonViewSingleProduct}
              onClick={() => {}}
            >
              <EyeIcon className={styles.eyeIcon} />
            </ButtonIcon>
            <ButtonIcon
              className={styles.buttonAddFavorites}
              onClick={() => {}}
            >
              <FavouriteIcon className={styles.favoriteIcon} />
            </ButtonIcon>
          </div>
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
            {getThcCategory(thc)}
          </div>
          <div className={styles.productCard__main__property_cbd}>
            <span>CBD</span>
            {' '}
            {getCbdCategory(cbd)}
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

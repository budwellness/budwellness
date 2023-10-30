import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import FavoriteIcon from '../UI/FavoriteIcon';
import styles from './ProductCard.module.scss';

// eslint-disable-next-line react/prop-types
function ProductCard({ product }) {
  const {
    // id,
    imageUrls,
    sale,
    currentPrice,
    // rate,
    // thc,
    // cbd,
    name,
    classNames,
  } = product;

  const productCardClasses = [styles.productCard, styles[classNames]].join(' ');

  const previousPrice = (currentPrice / ((100 - sale) / 100)).toFixed(2);

  return (
    <div className={productCardClasses}>
      <div className={styles.productCard__media}>
        <a
          className={styles.productCard__media__productLink}
          href="product.html"
          target="_blank"
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
        </a>
        <a
          className={styles.productCard__media__buttonAddFavorites}
          href="wishlist.html"
        >
          <FavoriteIcon className={styles.favoriteIcon} />
        </a>
        {sale !== 0 && (
          <div className={styles.productCard__media__saleLabel}>
            <span className={styles.productCard__media__saleLabel__saleText}>
              Sale
            </span>
          </div>
        )}
      </div>
      <div className={styles.productCard__main}>
        <div className={styles.productCard__main__rating}>Rating</div>
        <a className={styles.productCard__main__titleLink} href="product.html">
          {name}
        </a>
        <div className={styles.productCard__main__productPrices}>
          {sale !== 0 && (
            <span
              className={styles.productCard__main__productPrices__previousPrice}
            >
              $
              {previousPrice}
            </span>
          )}
          <span
            className={styles.productCard__main__productPrices__currentPrice}
          >
            $
            {currentPrice}
          </span>
        </div>
        <Button
          className="whiteBtn"
          text="Add to cart"
          // onClick={() => { addToCart(product)}}
        />
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  // eslint-disable-next-line react/require-default-props
  product: PropTypes.shape({
    imageUrls: PropTypes.arrayOf(PropTypes.string),
    sale: PropTypes.number.isRequired,
    currentPrice: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    name: PropTypes.string,
    classNames: PropTypes.string,
  }),
};

export default ProductCard;

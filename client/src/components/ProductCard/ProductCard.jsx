import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart-20x20.svg';
import Button from '../Button/Button';
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

  // console.log(product);
  // console.log(imageUrls[0]);

  const previousPrice = (currentPrice / ((100 - sale) / 100)).toFixed(2);

  return (
    <div className={cn('productCard', classNames)}>
      <div className={styles.productCard__media}>
        {sale !== 0 && (
          <div className={styles.productCard__media__saleLabel}>
            <span className={styles.productCard__media__saleLabel__saleText}>Sale</span>
          </div>
        )}
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
        <Button
          className={styles.productCard__media__buttonAddFavorites}
          type="button"
          // onClick={ () => addFavorites()}
        >
          <HeartIcon
            className={styles.productCard__media__buttonAddFavorites__iconHeart}
            // style={{
            //   color: '#9a9a9c',
            // }}
          />
        </Button>
      </div>
      <div className={styles.productCard__main}>
        <div className={styles.productCard__main__rating}>Rating</div>
        <h3 className={styles.productCard__main__productName}>{name}</h3>
        <div className={styles.productCard__main__productPrices}>
          {sale !== 0 && (
            <span
              className={styles.productCard__main__productPrices__previousPrice}
            >
              {previousPrice}
            </span>
          )}
          <span
            className={styles.productCard__main__productPrices__currentPrice}
          >
            {currentPrice}
          </span>
        </div>
        <Button
          className={styles.productCard__main__buttonAddToCart}
          // onClick={() => { addToCart(product)}}
        >
          Add to cart
        </Button>
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

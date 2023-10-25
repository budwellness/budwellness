import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import StarIconFill from '../../assets/icons/star-fill.svg';
import StarIconOutlines from '../../assets/icons/star-outline.svg';
import HeartIcon from '../../assets/icons/heart-20x20.svg';
import Button from '../Button/Button';
import './ProductCard.module.scss';

// eslint-disable-next-line react/prop-types
function ProductCard({ favoriteItems, cartItems, product }) {
  const {
    // _id,
    imageUrls,
    sale,
    currentPrice,
    rate,
    name,
    classNames,
  } = product;

  console.log(product);

  // eslint-disable-next-line no-shadow
  const inFavorites = (product) => {
    // eslint-disable-next-line react/prop-types
    if (favoriteItems.some((item) => item.id === product.id)) {
      return true;
    }
    return false;
  };

  // eslint-disable-next-line no-shadow
  const inCart = (product) => {
    // eslint-disable-next-line react/prop-types
    if (cartItems.some((item) => item.id === product.id)) {
      return true;
    }
    return false;
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i === i + 1) {
      if (i <= rating) {
        stars.push(
          <span key={i} className="yellow-star">
            <StarIconFill />
          </span>,
        );
      } else {
        stars.push(
          <span key={i} className="outline-star">
            <StarIconOutlines />
          </span>,
        );
      }
    }
    return stars;
  };

  return (
    <div className={cn('product-card', classNames)}>
      {sale !== 0 && (
        <div className="sale-label">
          <span className="white-text">Sale</span>
        </div>
      )}
      <img src={imageUrls[0]} alt={name} />
      {!inFavorites(product) && (
        <Button
          className="add-favorite"
          //  onClick={() => dispatch(actionAddFavorites(product))}
        >
          <HeartIcon
            className="icon-heart"
            // style={{
            //   color: '#9a9a9c',
            // }}
          />
        </Button>
      )}
      {inFavorites(product) && (
        <Button
          className="add-favorite"
          // style={{
          //   backgroundColor: '#cccccc',
          //   border: '1.5px solid #cccccc',
          // }}
          // onClick={() => addFavorites(product))}
        >
          <HeartIcon size="xs" style={{ color: '#f4f88b' }} />
        </Button>
      )}
      <div className="prices">
        {sale !== 0 && (
          <span className="discount-price">
            {((currentPrice * (100 - sale)) / 100).toFixed(2)}
          </span>
        )}
        <span className="current-price">{currentPrice}</span>
      </div>
      <div className="rating">{renderRatingStars(rate)}</div>
      {!inCart(product) && (
        <Button
          className="add-to-cart"
          onClick={() => {
            // addToCart(product)
          }}
        >
          Add to cart
        </Button>
      )}
      {inCart(product) && (
        <Button
          classNames="product-in-cart"
          onClick={() => {
            //  showCartModal(product);
          }}
        >
          In cart
        </Button>
      )}
    </div>
  );
}

ProductCard.propTypes = {
  // eslint-disable-next-line react/require-default-props
  product: PropTypes.shape({
    imageUrls: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
      }),
    ),
    sale: PropTypes.number.isRequired,
    currentPrice: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    name: PropTypes.string,
    classNames: PropTypes.string,
  }),
};

export default ProductCard;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cN from 'classnames';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import useToggleCart from '../../../hooks/useToggleCart';
import useToggleWishlist from '../../../hooks/useToggleWishlist';
import wishlistButtonStateHandler from '../../../helpers/wishlistButtonStateHandler';
import cartButtonStateHandler from '../../../helpers/cartButtonStateHandler';

import RatingStars from '../../../components/RatingStars/RatingStars';
import Button from '../../../components/Button/Button';
import FavouriteIcon from '../../../components/UI/FavouriteIcon';

import styles from './InfoProduct.module.scss';

function InfoProduct({ data }) {
  const [isExistInWishlist, setIsExistInWishlist] = useState(false);
  const [isExistInCart, setIsExistInCart] = useState(false);

  const toggleCartHandler = useToggleCart();
  const toggleWishlistHandler = useToggleWishlist();

  const { cart: cartStoreData } = useSelector((state) => state.cart);
  const { isUserLogin, token: tokenReduxStore } = useSelector(
    (state) => state.user,
  );
  const { wishList: wishlistStoreData } = useSelector(
    (state) => state.wishlist,
  );

  const toggleWishlistWithLoginHandler = () => {
    if (isUserLogin) {
      toggleWishlistHandler(data, tokenReduxStore, wishlistStoreData);
    } else {
      toast.error('Please login first!');
    }
  };

  const toggleCartWithLoginHandler = () => {
    if (isUserLogin) {
      toggleCartHandler(data._id, tokenReduxStore, cartStoreData);
    } else {
      toast.error('Please login first!');
    }
  };

  useEffect(
    () => wishlistButtonStateHandler(
      isUserLogin,
      wishlistStoreData,
      isExistInWishlist,
      setIsExistInWishlist,
      data._id,
    ),
    [wishlistStoreData, isUserLogin],
  );

  useEffect(
    () => cartButtonStateHandler(
      isUserLogin,
      cartStoreData,
      isExistInCart,
      setIsExistInCart,
      data._id,
    ),
    [cartStoreData, isUserLogin],
  );

  return (
    <div className={styles.infoWrapp}>
      <div className={styles.title_action}>
        <h1 className={styles.title}>{data.name}</h1>
        <button
          type="button"
          className={cN({
            [styles.action]: !isExistInWishlist,
            [styles.action_active]: isExistInWishlist,
          })}
          onClick={() => toggleWishlistWithLoginHandler()}
        >
          <FavouriteIcon className={styles.styleIcon} />
        </button>
      </div>
      <div className={styles.ratingWrapper}>
        <RatingStars rate={data.rate} />
        <p className={styles.ratingText}>
          (
          {data.reviews.length}
          customer review
          <span className={styles.span}>s</span>
          )
        </p>
      </div>
      <p className={styles.descShort}>{data.description.short}</p>
      <p className={styles.price}>
        {data.currentPrice.toFixed(2)}
        $
      </p>
      <div className={styles.buttonWrapper}>
        <Button
          type="button"
          className={cN({
            orangeBtn: !isExistInCart,
            whiteBtn_active: isExistInCart,
          })}
          text={isExistInCart ? 'Remove from cart' : 'Add to cart'}
          onClick={() => toggleCartWithLoginHandler()}
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
          <span className={styles.value}>
            {data.cbd}
            %
          </span>
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
    _id: PropTypes.string.isRequired,
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
      }),
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

/*eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import cN from 'classnames';

import CartIcon from '../../UI/CartIcon';
import FavouriteIcon from '../../UI/FavouriteIcon';
import EyeIcon from '../../UI/EyeIcon';
import RatingStars from '../../RatingStars/RatingStars';

import styles from './PopularSwiperSlide.module.scss';

function PopularSwiperSlide(props) {

    const {
        products: productItem,
    } = props

    return (
        <div className={styles.wpapper}>
            <div className={styles.media}>
                {productItem.previousPrice !== productItem.currentPrice && (
                    <span className={styles.mediaSale}>Sale</span>
                )}
                <div className={styles.mediaOverlay}>
                    <ul className={styles.actionList}>
                        <li className={styles.listItem}>
                            <button
                                type="button"
                                className={styles.actionLink}
                                onClick={() => toggleCartHandler(productItem._id, tokenReduxStore)}
                            >
                                <CartIcon className={styles.styleIcon} />
                            </button>
                        </li>
                        <li className={styles.listItem}>
                            <button
                                type="button"
                                className={styles.actionLink}
                                onClick={() => { }}
                            >
                                <FavouriteIcon className={styles.styleIcon} />
                            </button>
                        </li>
                        <li className={styles.listItem}>
                            <button
                                type="button"
                                className={styles.actionLink}
                                onClick={() => { }}
                            >
                                <EyeIcon className={styles.styleIcon} />
                            </button>
                        </li>
                    </ul>
                </div>
                <picture>
                    <img
                        className={styles.mediaImg}
                        src={productItem.imageUrls[0]}
                        alt={productItem.name}
                    />
                </picture>
            </div>
            <div className={styles.main}>
                <RatingStars rate={productItem.rate} />
                <Link
                    className={styles.mainTitle}
                    to={`/product/${productItem.itemNo}`}
                >
                    {productItem.name}
                </Link>
                <div className={styles.mainPrice}>
                    {productItem.previousPrice !== productItem.currentPrice && (
                        <span className={cN(styles.price, styles.priceOld)}>
                            $
                            {productItem.previousPrice.toFixed(2)}
                        </span>
                    )}
                    <span className={styles.price}>
                        $
                        {productItem.currentPrice.toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default PopularSwiperSlide;

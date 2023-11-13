/* eslint-disable */
import React from 'react'
import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import cN from 'classnames';
// COMPONENT IMPORTS: 
import CartIcon from '../../UI/CartIcon';
import FavouriteIcon from '../../UI/FavouriteIcon';
import EyeIcon from '../../UI/EyeIcon';
import RatingStars from '../../RatingStars/RatingStars';

import styles from './PopularSwiperSlide.module.scss'

function PopularSwiperSlide(props) {
    /* --------------------------- INIT PROPS: --------------------------- */
    const {
        product,
    } = props;

    return (
        <SwiperSlide className={styles.slide}>
            <div className={styles.wpapper}>
                <div className={styles.media}>
                    {product.previousPrice !== product.currentPrice && (
                        <span className={styles.mediaSale}>Sale</span>
                    )}
                    <div className={styles.mediaOverlay}>
                        <ul className={styles.actionList}>
                            <li className={styles.listItem}>
                                <button
                                    type="button"
                                    className={styles.actionLink}
                                    onClick={() => toggleCartHandler(product._id, tokenReduxStore)}
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
                            src={product.imageUrls[0]}
                            alt={product.name}
                        />
                    </picture>
                </div>
                <div className={styles.main}>
                    <RatingStars rate={product.rate} />
                    <Link
                        className={styles.mainTitle}
                        to={`/product/${product.itemNo}`}
                    >
                        {product.name}
                    </Link>
                    <div className={styles.mainPrice}>
                        {product.previousPrice !== product.currentPrice && (
                            <span className={cN(styles.price, styles.priceOld)}>
                                $
                                {product.previousPrice.toFixed(2)}
                            </span>
                        )}
                        <span className={styles.price}>
                            $
                            {product.currentPrice.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    )
}

export default PopularSwiperSlide
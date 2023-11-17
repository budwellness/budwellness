/* eslint-disable */
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// COMPONENT IMPORTS:
import Container from '../../components/Container/Container';
import PagePreviewHeader from '../../components/PagePreviewHeader/PagePreviewHeader';
// import ButtonCount from '../../components/ButtonCount/ButtonCount';
import RatingStars from '../../components/RatingStars/RatingStars';
import Button from '../../components/Button/Button';
import PopularProducts from '../../components/PopularProducts/PopularProducts';
import SingleProductSwiper from '../../components/SingleProductSwiper/SingleProductSwiper';
import Tabs from './Tabs/Tabs';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import FavouriteIcon from '../../components/UI/FavouriteIcon';
// PRODUCT IMPORTS:
import { useGetProductQuery } from '../../store/serverResponse/danitApi.products';

import styles from './SingleProductPage.module.scss';

const { log } = console;

function SingleProductPage() {
  /* --------------------------- INIT HOOKS: --------------------------- */
  const navigate = useNavigate();
  const { pathname } = useLocation();

  /* --------------------------- COMPONENT LOGIC: --------------------------- */
  const itemNo = pathname.split('/').at(-1);
  const {
    data: SingleProductData,
    isLoading,
    isSuccess,
  } = useGetProductQuery(itemNo);

  log('data: ', SingleProductData);

  return (
    <>
      {isLoading ? (
        <h2 className={styles.pre_loader}>
          <Container>Loading...</Container>
        </h2>
      ) : (
        <>
          <ScrollToTop />
          <PagePreviewHeader
            title="Buy now and enjoy"
            text="Discover nature's remedy for peace and balance"
          />
          <Container>
            <div className={styles.wrapper}>
              <div className={styles.swiperWrap}>
                <SingleProductSwiper images={SingleProductData.imageUrls} />
              </div>

              <div className={styles.infoWrapp}>
                <div className={styles.title_action}>
                  <h1 className={styles.title}>{SingleProductData.name}</h1>
                  <button className={styles.action} type="button">
                    <FavouriteIcon
                      className={styles.styleIcon}
                      onClick={() => {}}
                    />
                  </button>
                </div>
                <div className={styles.ratingWrapper}>
                  <RatingStars rate={SingleProductData.rate} />
                  <p className={styles.ratingText}>
                    ({SingleProductData.reviews.length} customer review
                    <span className={styles.span}>s</span>)
                  </p>
                </div>
                <p className={styles.descShort}>
                  {SingleProductData.description.short}
                </p>
                <p className={styles.price}>
                  ${SingleProductData.currentPrice}
                </p>
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
                    <span className={styles.value}>
                      {SingleProductData.categories}
                    </span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.property}>Size:</span>
                    <span className={styles.value}>
                      {SingleProductData.size}
                      {SingleProductData.sizeType}
                    </span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.property}>Plant Type:</span>
                    <span className={styles.value}>
                      {SingleProductData.plantType}
                    </span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.property}>THC:</span>
                    <span className={styles.value}>
                      {SingleProductData.thc}
                      mg/g
                    </span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.property}>CBD:</span>
                    <span className={styles.value}>
                      {SingleProductData.cbd}%
                    </span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.property}>Effects:</span>
                    <span className={styles.value}>
                      {SingleProductData.effects.join(', ')}
                    </span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.property}>Tags:</span>
                    <span className={styles.value}>
                      {SingleProductData.tags.join(', ')}
                    </span>
                  </li>
                  <li className={styles.item}>
                    <span className={styles.property}>SKU:</span>
                    <span className={styles.value}>
                      {SingleProductData.itemNo}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <Tabs data={SingleProductData} />
            <PopularProducts />
          </Container>
        </>
      )}
    </>
  );
}

export default SingleProductPage;

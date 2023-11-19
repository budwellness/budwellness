import React from 'react';
import { useLocation } from 'react-router-dom';
// COMPONENT IMPORTS:
import Container from '../../components/Container/Container';
import PagePreviewHeader from '../../components/PagePreviewHeader/PagePreviewHeader';
import PopularProducts from '../../components/PopularProducts/PopularProducts';
import SingleProductSwiper from '../../components/SingleProductSwiper/SingleProductSwiper';
import InfoProduct from './InfoProduct/InfoProduct';
import Tabs from './Tabs/Tabs';
// PRODUCT IMPORTS:
import { useGetProductQuery } from '../../store/serverResponse/danitApi.products';

import styles from './SingleProductPage.module.scss';

function SingleProductPage() {
  /* --------------------------- INIT HOOKS: --------------------------- */
  // const navigate = useNavigate();
  const { pathname } = useLocation();

  /* --------------------------- COMPONENT LOGIC: --------------------------- */
  const itemNo = pathname.split('/').at(-1);
  const { data: SingleProductData, isLoading } = useGetProductQuery(itemNo);

  log('data: ', SingleProductData);

  return (
    <div>
      {isLoading ? (
        <h2 className={styles.pre_loader}>
          <Container>Loading...</Container>
        </h2>
      ) : (
        <>
          <PagePreviewHeader
            title="Buy now and enjoy"
            text="Discover nature's remedy for peace and balance"
          />
          <Container>
            <div className={styles.wrapper}>
              <div className={styles.swiperWrap}>
                <SingleProductSwiper images={SingleProductData.imageUrls} />
              </div>
              <InfoProduct data={SingleProductData} />
            </div>
            <Tabs data={SingleProductData} />
            <PopularProducts />
          </Container>
        </>
      )}
    </div>
  );
}

export default SingleProductPage;

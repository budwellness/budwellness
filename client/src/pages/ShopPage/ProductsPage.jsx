import React from 'react';
import Container from '../../components/Container/Container';
import PopularProducts from '../../components/PopularProducts/PopularProducts';
import PagePreviewHeader from '../../components/PagePreviewHeader/PagePreviewHeader';
import Filter from '../../components/Filter/Filter';
import ProductList from '../../components/ProductList/ProductList';
import Sorting from '../../components/Sorting/Sorting';
import styles from './ProductsPage.module.scss';

function ProductsPage() {
  return (
    <>
      <PagePreviewHeader
        title="Shop"
        text="Immerse yourself in a unique shopping experience, where your choice is our priority"
      />
      <Container>
        <div className={styles.wrapperContainer}>
          <div className={styles.Sorting}>
            <Sorting />
          </div>
          <div className={styles.ProductList}>
            <ProductList />
          </div>
          <div className={styles.Filter}>
            <Filter />
          </div>
        </div>
        <PopularProducts />
      </Container>
    </>
  );
}

export default ProductsPage;

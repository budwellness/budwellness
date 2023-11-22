import React from 'react';
import Container from '../../components/Container/Container';
import PopularProducts from '../../components/PopularProducts/PopularProducts';
import PagePreviewHeader from '../../components/PagePreviewHeader/PagePreviewHeader';
import Filter from '../../components/Filter/Filter';
import ProductList from '../../components/ProductList/ProductList';
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
          <Filter />
          <ProductList />
        </div>
        <PopularProducts />
      </Container>
    </>
  );
}

export default ProductsPage;

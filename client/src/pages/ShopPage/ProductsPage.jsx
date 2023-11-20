import React from 'react';
import Container from '../../components/Container/Container';
import PopularProducts from '../../components/PopularProducts/PopularProducts';
import PagePreviewHeader from '../../components/PagePreviewHeader/PagePreviewHeader';
import ProductList from '../../components/ProductList/ProductList';
import styles from './ProductsPage.module.scss';

function ProductsPage() {
  return (
    <>
      <PagePreviewHeader
        title="Shop"
        text="Immerse yourself in a unique shopping experience, where your choice is our priority."
      />
      <Container>
        <main className={styles.shop__main_container}>
          <ProductList />
        </main>
        <PopularProducts />
      </Container>
    </>
  );
}

export default ProductsPage;

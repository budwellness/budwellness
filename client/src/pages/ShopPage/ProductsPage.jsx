import React from 'react';
import Container from '../../components/Container/Container';
import PopularProducts from '../../components/PopularProducts/PopularProducts';

import PagePreviewHeader from '../../components/PagePreviewHeader/PagePreviewHeader';
import Filter from '../../components/Filter/Filter';

function ProductsPage() {
  return (
    <>
      <PagePreviewHeader
        title="Shop"
        text="Immerse yourself in a unique shopping experience, where your choice is our priority."
      />
      <Container>
        <Filter />
        <PopularProducts />
      </Container>
    </>
  );
}

export default ProductsPage;

import React from 'react';
import Container from '../../components/Container/Container';
import PopularProducts from '../../components/PopularProducts/PopularProducts';
import Filter from '../../components/Filter/Filter';

function ProductsPage() {
  return (
    <Container>
      <Filter />
      <PopularProducts />
    </Container>
  );
}

export default ProductsPage;

import React from 'react';

import PagePrevievHeader from '../../components/PagePreviewHeader/PagePreviewHeader';
import Cart from '../../components/Cart/Cart';
import PopularProducts from '../../components/PopularProducts/PopularProducts';

function CartPage() {
  return (
    <>
      <PagePrevievHeader title="Cart page" />
      <main>
        <Cart />
        <PopularProducts />
      </main>
    </>
  );
}

export default CartPage;

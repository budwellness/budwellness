import React from 'react';

import PagePrevievHeader from '../../components/PagePreviewHeader/PagePreviewHeader';
import Cart from '../../components/Cart/Cart';
import PopularProducts from '../../components/PopularProducts/PopularProducts';

function CartPage() {
  return (
    <>
      <PagePrevievHeader
        title="Cart page"
        text="Explore a world of wellness products in your shopping cart at BadWellness. Elevate your self-care routine with our curated selection of premium items designed to enhance your well-being. Your journey to a healthier and happier you begins here!"
      />
      <main>
        <Cart />
        <PopularProducts />
      </main>
    </>
  );
}

export default CartPage;

import React from 'react';
import PagePreviewHeader from '../../components/PagePreviewHeader/PagePreviewHeader';
import Container from '../../components/Container/Container';

function WishlistPage() {
  return (
    <>
      <PagePreviewHeader
        title="Wishlist"
        text="Curate your Wishlist with the finest selection of products waiting to become your favorites!"
      />
      <Container>
        <div>wishList</div>
      </Container>
    </>
  );
}

export default WishlistPage;

import React from 'react';
import { useSelector } from 'react-redux';
import PagePreviewHeader from '../../components/PagePreviewHeader/PagePreviewHeader';
import Container from '../../components/Container/Container';
import ProductCard from '../../components/ProductCard/ProductCard';
import useToggleCart from '../../hooks/useToggleCart';
import useToggleWishlist from '../../hooks/useToggleWishlist';
import styles from './WishlistPage.module.scss';

function WishlistPage() {
  const { wishList: wishlistStoreData } = useSelector(
    (state) => state.wishlist,
  );
  const toggleCartHandler = useToggleCart();
  const toggleWishlistHandler = useToggleWishlist();

  return (
    <>
      <PagePreviewHeader
        title="Wishlist"
        text="Curate your Wishlist with the finest selection of products waiting to become your favorites!"
      />
      <Container>
        <main className={styles.container}>
          {Array.isArray(wishlistStoreData)
            && wishlistStoreData.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                actions={{
                  toggleWishlistHandler,
                  toggleCartHandler,
                }}
              />
            ))}
        </main>
      </Container>
    </>
  );
}

export default WishlistPage;

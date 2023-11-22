import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PagePreviewHeader from '../../components/PagePreviewHeader/PagePreviewHeader';
import Container from '../../components/Container/Container';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './WishlistPage.module.scss';
import { toggleWishlistAction } from '../../store/wishlist/wishList.slice';
import { addItemToCartAction } from '../../store/cart/cart.slice';

function WishlistPage() {
  const dispatch = useDispatch();
  const { wishList: wishlistStoreData } = useSelector(
    (state) => state.wishlist,
  );

  const toggleWishlistHandler = (productId) => {
    dispatch(toggleWishlistAction(productId));
  };

  const toggleCartHandler = (productId) => {
    dispatch(addItemToCartAction(productId));
  };

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
                  toggleWishlistHandler: () => toggleWishlistHandler(product._id),
                  toggleCartHandler: () => toggleCartHandler(product._id),
                }}
              />
            ))}
        </main>
      </Container>
    </>
  );
}

export default WishlistPage;

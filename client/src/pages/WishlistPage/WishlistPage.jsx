import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PagePreviewHeader from '../../components/PagePreviewHeader/PagePreviewHeader';
import Container from '../../components/Container/Container';
import ProductCard from '../../components/ProductCard/ProductCard';
import PopularProducts from '../../components/PopularProducts/PopularProducts';
// PRODUCT IMPORTS:
import useToggleCart from '../../hooks/useToggleCart';
import useToggleWishlist from '../../hooks/useToggleWishlist';
// MODAL IMPORTS:
import { selectProduct } from '../../store/product/product.slice';
import { isModalAddToCartAction } from '../../store/modal/modal.slice';

import styles from './WishlistPage.module.scss';

function WishlistPage() {
  /* --------------------------- REDUX STATE: --------------------------- */
  const { isModalAddToCart } = useSelector((state) => state.modal);
  const { wishList: wishlistStoreData } = useSelector(
    (state) => state.wishlist,
  );
  /* --------------------------- INIT HOOKS: --------------------------- */
  const dispatch = useDispatch();
  const {
    toggleCart: toggleCartHandler,
    toggleLocalCart: toggleLocalCartHandler,
  } = useToggleCart();
  const toggleWishlistHandler = useToggleWishlist();

  // MODAL:
  const handleSelectProduct = (selectedProduct) => {
    dispatch(selectProduct(selectedProduct));
  };

  const handleModalAddToCart = (product) => {
    dispatch(isModalAddToCartAction(!isModalAddToCart));
    handleSelectProduct(product);
  };

  return (
    <>
      <PagePreviewHeader
        title="Wishlist"
        text="Curate your Wishlist with the finest selection of products waiting to become your favorites!"
      />
      <Container>
        <main className={styles.container}>
          {Array.isArray(wishlistStoreData) && wishlistStoreData.length > 0 ? (
            wishlistStoreData.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                actions={{
                  toggleWishlistHandler,
                  toggleCartHandler,
                  toggleLocalCartHandler,
                }}
                handleModalAddToCart={() => handleModalAddToCart(product)}
              />
            ))
          ) : (
            <p className={styles.emptyWishlist}>Your wishlist is currently empty</p>
          )}
        </main>
        <PopularProducts />
      </Container>
    </>
  );
}

export default WishlistPage;

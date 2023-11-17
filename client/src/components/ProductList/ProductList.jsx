import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
// COMPONENT IMPORTS:
import ProductCard from '../ProductCard/ProductCard';
// PRODUCT IMPORTS:
import { useGetAllProductsQuery } from '../../store/serverResponse/danitApi.products';
// WISHLIST IMPORTS:
import {
  useAddProductToWishlistMutation,
  useRemoveFromWishlistMutation,
} from '../../store/serverResponse/danitApi.wishlist';
import {
  addItemToWishListAction,
  removeItemFromWishListAction,
} from '../../store/wishlist/wishList.slice';

// CART IMPORTS:
import {
  addItemToCartAction,
  removeItemFromCartAction,
} from '../../store/cart/cart.slice';

import styles from './ProductList.module.scss';
import { useAddToCartMutation, useRemoveFromCartMutation } from '../../store/serverResponse/danitApi.cart';

const { log } = console;

function ProductList() {
  /* --------------------------- INIT HOOKS: --------------------------- */
  const dispatch = useDispatch();

  /* --------------------------- REDUX STATE: --------------------------- */
  const { wishList: wishlistStoreData } = useSelector((state) => state.wishlist);
  const { cart: cartStoreData } = useSelector((state) => state.cart);

  /* --------------------------- RTK QUERY CUSTOM HOOKS: --------------------------- */
  // WISHLIST API:
  const [removeProductFromWishlist] = useRemoveFromWishlistMutation();
  const [addProductToWishlist] = useAddProductToWishlistMutation();

  // CART API:
  const [addProductToCart] = useAddToCartMutation();
  const [removeProductFromCart] = useRemoveFromCartMutation();

  /* --------------------------- COMPONENT HANDLERS: --------------------------- */
  const toggleWishlistHandler = (product, token) => {
    const isExist = wishlistStoreData.some((p) => p._id === product._id);

    if (isExist) {
      try {
        removeProductFromWishlist({ productId: product._id, token });
        dispatch(removeItemFromWishListAction(product));
      } catch (error) {
        log(error);
      }
    } else {
      try {
        addProductToWishlist({ productId: product._id, token });
        dispatch(addItemToWishListAction(product));
      } catch (error) {
        log(error);
      }
    }
  };

  /* ------------------------------------------------ */

  const toggleCartHandler = (product, token) => {
    const isExist = cartStoreData.some((p) => p.product._id === product._id);

    if (isExist) {
      try {
        removeProductFromCart({ productId: product._id, token });
        dispatch(removeItemFromCartAction(product._id));
        toast.warn('Product was removed from cart!');
      } catch (error) {
        log(error);
        toast.error('Something went wrong...');
      }
    } else {
      try {
        addProductToCart({ productId: product._id, token })
          .unwrap()
          .then((response) => {
            dispatch(addItemToCartAction(response.products));
            toast.success('Product was added to cart!');
          });
      } catch (error) {
        log(error);
        toast.error('Something went wrong...');
      }
    }
  };

  const {
    data: AllProductsData,
    isError: isErrorAllProductsData,
    // isLoading: isLoadingAllProductsData
  } = useGetAllProductsQuery();

  return (
    <div className={styles.list__products}>
      {isErrorAllProductsData ? (
        <div className={styles.list__products_error}>
          Oh no, there was an error
        </div>
      ) : (
        <div className={styles.list__products_wrapper}>
          {AllProductsData?.map((product) => (
            <ProductCard
              actions={
                {
                  toggleWishlistHandler,
                  toggleCartHandler,
                }
              }
              product={product}
              key={product._id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;

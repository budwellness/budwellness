import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// COMPONENT IMPORTS:
import ProductCard from '../ProductCard/ProductCard';
// PRODUCT IMPORTS:
import {
  useGetAllProductsQuery,
  useGetFilteredProductsQuery,
  useLazyGetFilteredProductsQuery
} from '../../store/serverResponse/danitApi.products';

import styles from './ProductList.module.scss';
import useToggleCart from '../../hooks/useToggleCart';
import useToggleWishlist from '../../hooks/useToggleWishlist';
import { useLocation } from 'react-router-dom';

const { log } = console;

function ProductList() {
  /* --------------------------- COMPONENT STATE: --------------------------- */
  const [productCards, setProductCards] = useState([]);

  /* --------------------------- INIT HOOKS: --------------------------- */
  const toggleCartHandler = useToggleCart();
  const toggleWishlistHandler = useToggleWishlist();

  /* --------------------------- REDUX STATE: --------------------------- */

  const { filterQueryString } = useSelector((state) => state.filter);

  // const {
  //   data: AllProductsData,
  //   isError: isErrorAllProductsData,
  // } = useGetAllProductsQuery();

  const {
    data: getFilteredProductsData,
    isLoading: isLoadingFilteredProducts,
    isError: isErrorFilteredProducts,
    isSuccess: isSuccessFilteredProducts,
  } = useGetFilteredProductsQuery(filterQueryString)

  useEffect(() => {
    if (isSuccessFilteredProducts) {
      setProductCards(
        < div className={styles.list__products_wrapper} >
          {
            getFilteredProductsData.products?.map((product) => (
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
            ))
          }
        </div >
      )
    }

    console.log('не успело');
  }, [filterQueryString, isSuccessFilteredProducts])

  return (
    <div className={styles.list__products}>
      {isLoadingFilteredProducts ? (
        <div className={styles.list__products_error}>
          {/* Oh no, there was an error */}
          Loading...
        </div>
      ) : productCards}
    </div>
  );
}

export default ProductList;

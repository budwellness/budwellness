/* eslint-disable */
import React, { useEffect, useState } from 'react';
// COMPONENT IMPORTS:
import { useParams, useSearchParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
// PRODUCT IMPORTS:
import {
  useLazyGetFilteredProductsQuery,
} from '../../store/serverResponse/danitApi.products';
import useToggleCart from '../../hooks/useToggleCart';
import useToggleWishlist from '../../hooks/useToggleWishlist';
import styles from './ProductList.module.scss';

const { log } = console;

function ProductList() {
  /* --------------------------- COMPONENT STATE: --------------------------- */
  const [productCards, setProductCards] = useState([]);

  /* --------------------------- INIT HOOKS: --------------------------- */
  const toggleCartHandler = useToggleCart();
  const toggleWishlistHandler = useToggleWishlist();
  // const { productSlug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  log(searchParams)


  /* --------------------------- REDUX STATE: --------------------------- */


  const filteredQueryString = (params) => {
    const filterStringArr = [];
    for (const [key, value] of params.entries()) {
      filterStringArr.push(`${key}=${value}`);
    }
    const filterString = filterStringArr.join('&')
    // if (filterStringArr[0] === 'categories=all' && filterString === 'categories-all') {
    //   return 'perPage=&startPage=1';
    // }
    if (filterStringArr[0] === 'categories=all' && filterString !== 'categories=all') {
      return `${filterStringArr.slice(1).join('&')}&perPage=8&startPage=1`;
    }
    return `${filterString}&perPage=8&startPage=1`

  };

  const [getFilteredProducts,
    {
      isLoading: isLoadingLazyFilteredProducts,
      isError: isErrorLazyFilteredProducts,
    },
  ] = useLazyGetFilteredProductsQuery();

  useEffect(() => {
    getFilteredProducts(filteredQueryString(searchParams))
      .unwrap()
      .then((response) => {
        try {
          setProductCards(
            <div className={styles.list__products_wrapper}>
              {
                response.products?.map((product) => (
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
            </div>,
          );
        } catch (error) {
          log(error, isErrorLazyFilteredProducts);
        }
      });
  }, [searchParams]);

  return (
    <div className={styles.list__products}>
      {isLoadingLazyFilteredProducts ? (
        <div className={styles.list__products_error}>
          {/* Oh no, there was an error */}
          Loading...
        </div>
      ) : productCards}
    </div>
  );
}

export default ProductList;

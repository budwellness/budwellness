import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// COMPONENT IMPORTS:
import { useLocation, useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
// PRODUCT IMPORTS:
import {
  useGetAllProductsQuery,
  useGetFilteredProductsQuery,
  useLazyGetFilteredProductsQuery,
} from '../../store/serverResponse/danitApi.products';

import styles from './ProductList.module.scss';
import useToggleCart from '../../hooks/useToggleCart';
import useToggleWishlist from '../../hooks/useToggleWishlist';

const { log } = console;

function ProductList() {
  /* --------------------------- COMPONENT STATE: --------------------------- */
  const [productCards, setProductCards] = useState([]);

  /* --------------------------- INIT HOOKS: --------------------------- */
  const toggleCartHandler = useToggleCart();
  const toggleWishlistHandler = useToggleWishlist();
  const { productSlug } = useParams();
  /* --------------------------- REDUX STATE: --------------------------- */



  const filteredQueryString = (string) => {
    // http://localhost:4000/api/products/filter/?categories=all&thc=10&cbd=minCbd=0&maxCbd=2&perPage=3&startPage=1
    const stringToArr = string.split('&');
    if (stringToArr[0] === 'categories=all' && string === 'categories=all') {
      return 'perPage=8&startPage=1';
    }
    if (stringToArr[0] === 'categories=all' && string !== 'categories=all') {
      // нужно откусить 0 элемент, и склеить с перпейдж, стартпейдж
      return `${stringToArr.slice(1).join('&')}&perPage=8&startPage=1`
    }
    return `${string}&perPage=8&startPage=1`;
  };

  const [getFilteredProducts,
    {
      data: getLazyFilteredProductsData,
      isLoading: isLoadingLazyFilteredProducts,
      isError: isErrorLazyFilteredProducts,
      isSuccess: isSuccessLazyFilteredProducts,
    }
  ] = useLazyGetFilteredProductsQuery();

  useEffect(() => {
    log(filteredQueryString(productSlug));
    getFilteredProducts(filteredQueryString(productSlug))
      .unwrap()
      .then((response) => {
        try {
          log('OTRABOTAL')
          log('response: ', response)
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
          )
        } catch (error) {
          log(error, isErrorLazyFilteredProducts)
        }
      });
  }, [productSlug]);

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

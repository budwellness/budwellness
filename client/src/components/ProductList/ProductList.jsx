import React, { useEffect, useState } from 'react';
// COMPONENT IMPORTS:
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import Preloader from '../Preloader/Preloader';
// PRODUCT IMPORTS:
import { useLazyGetFilteredProductsQuery } from '../../store/serverResponse/danitApi.products';
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
  const { productSlug } = useParams();
  /* --------------------------- REDUX STATE: --------------------------- */

  const filteredQueryString = (string) => {
    const stringToArr = string.split('&');
    if (stringToArr[0] === 'categories=all' && string === 'categories=all') {
      return 'perPage=8&startPage=1';
    }
    if (stringToArr[0] === 'categories=all' && string !== 'categories=all') {
      return `${stringToArr.slice(1).join('&')}&perPage=8&startPage=1`;
    }
    return `${string}&perPage=8&startPage=1`;
  };

  const [
    getFilteredProducts,
    {
      isLoading: isLoadingLazyFilteredProducts,
      isError: isErrorLazyFilteredProducts,
    },
  ] = useLazyGetFilteredProductsQuery();

  useEffect(() => {
    getFilteredProducts(filteredQueryString(productSlug))
      .unwrap()
      .then((response) => {
        try {
          setProductCards(
            <div className={styles.list__products_wrapper}>
              {response.products?.map((product) => (
                <ProductCard
                  actions={{
                    toggleWishlistHandler,
                    toggleCartHandler,
                  }}
                  product={product}
                  key={product._id}
                />
              ))}
            </div>,
          );
        } catch (error) {
          log(error, isErrorLazyFilteredProducts);
        }
      });
  }, [productSlug]);

  return (
    <div className={styles.list__products}>
      {isLoadingLazyFilteredProducts ? (
        <div className={styles.list__products_error}>
          {/* Oh no, there was an error */}
          {/* Loading... */}
          <Preloader />
        </div>
      ) : (
        productCards
      )}
    </div>
  );
}

export default ProductList;

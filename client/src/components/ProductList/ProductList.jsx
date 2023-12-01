import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// COMPONENT IMPORTS:
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import Pagination from './Pagination/Pagination';
// PRODUCT IMPORTS:
import { useLazyGetFilteredProductsQuery } from '../../store/serverResponse/danitApi.products';
import useToggleCart from '../../hooks/useToggleCart';
import useToggleWishlist from '../../hooks/useToggleWishlist';
import styles from './ProductList.module.scss';

const { log } = console;

function ProductList(props) {
  const { startPage, setStartPage } = props;
  /* --------------------------- COMPONENT STATE: --------------------------- */
  const [productCards, setProductCards] = useState([]);
  const [productsPerPage] = useState(3);
  const [totalProducts, setTotalProducts] = useState(null);

  /* --------------------------- INIT HOOKS: --------------------------- */
  const {
    toggleCart: toggleCartHandler,
    toggleLocalCart: toggleLocalCartHandler,
  } = useToggleCart();
  const toggleWishlistHandler = useToggleWishlist();
  // const { productSlug } = useParams();
  const [searchParams] = useSearchParams();

  /* --------------------------- REDUX STATE: --------------------------- */

  const filteredQueryString = (params, pageStart, perPage = 1) => {
    const filterStringArr = [];
    for (const [key, value] of params.entries()) {
      filterStringArr.push(`${key}=${value}`);
    }
    const filterString = filterStringArr.join('&');
    if (
      filterStringArr[0] === 'categories=all'
      && filterString !== 'categories=all'
    ) {
      return `${filterStringArr
        .slice(1)
        .join('&')}&perPage=${perPage}&startPage=${pageStart}`;
    }
    return `${filterString}&perPage=${perPage}&startPage=${pageStart}`;
  };

  const [
    getFilteredProducts,
    {
      isLoading: isLoadingLazyFilteredProducts,
      isError: isErrorLazyFilteredProducts,
    },
  ] = useLazyGetFilteredProductsQuery();

  useEffect(() => {
    getFilteredProducts(
      filteredQueryString(searchParams, startPage, productsPerPage),
    )
      .unwrap()
      .then((response) => {
        try {
          log(response);
          setTotalProducts(response.productsQuantity);
          setProductCards(
            <div className={styles.list__products_wrapper}>
              {response.products?.map((product) => (
                <ProductCard
                  actions={{
                    toggleWishlistHandler,
                    toggleCartHandler,
                    toggleLocalCartHandler,
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
  }, [searchParams, startPage]);

  return (
    <div className={styles.list__products}>
      {isLoadingLazyFilteredProducts ? (
        <div className={styles.list__products_error}>
          {/* Oh no, there was an error */}
          Loading...
        </div>
      ) : (
        productCards
      )}
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={totalProducts}
        setStartPage={setStartPage}
        startPage={startPage}
      />
    </div>
  );
}

ProductList.propTypes = {
  startPage: PropTypes.number.isRequired,
  setStartPage: PropTypes.func.isRequired,
};

export default ProductList;

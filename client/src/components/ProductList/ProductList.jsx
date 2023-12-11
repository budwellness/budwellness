import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// COMPONENT IMPORTS:
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import Pagination from './Pagination/Pagination';
// PRODUCT IMPORTS:
import { useLazyGetFilteredProductsQuery } from '../../store/serverResponse/danitApi.products';
import useToggleCart from '../../hooks/useToggleCart';
import useToggleWishlist from '../../hooks/useToggleWishlist';
// MODAL IMPORTS:
import { selectProduct } from '../../store/product/product.slice';
import { isModalAddToCartAction } from '../../store/modal/modal.slice';

import styles from './ProductList.module.scss';
import { setTotalProductsAction } from '../../store/filter/filter.slice';

const { log } = console;

function ProductList(props) {
  const { startPage, setStartPage } = props;

  /* --------------------------- COMPONENT STATE: --------------------------- */
  const [productCards, setProductCards] = useState([]);
  const [productsPerPage] = useState(3);

  /* --------------------------- INIT HOOKS: --------------------------- */
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const toggleWishlistHandler = useToggleWishlist();

  const {
    toggleCart: toggleCartHandler,
    toggleLocalCart: toggleLocalCartHandler,
  } = useToggleCart();

  const [
    getFilteredProducts,
    {
      isLoading: isLoadingLazyFilteredProducts,
      isError: isErrorLazyFilteredProducts,
    },
  ] = useLazyGetFilteredProductsQuery();

  /* --------------------------- REDUX STATE: --------------------------- */

  const { isModalAddToCart } = useSelector((state) => state.modal);
  const { queryString } = useSelector((state) => state.filter);

  /* --------------------------- COMPONENT HANDLERS: --------------------------- */

  // MODAL:
  const handleSelectProduct = (selectedProduct) => {
    dispatch(selectProduct(selectedProduct));
  };

  const handleModalAddToCart = (product) => {
    dispatch(isModalAddToCartAction(!isModalAddToCart));
    handleSelectProduct(product);
  };

  /* --------------------------- COMPONENT LOGIC: --------------------------- */

  useEffect(() => {
    setSearchParams(queryString);
  }, [queryString]);

  useEffect(() => {
    getFilteredProducts(queryString)
      .unwrap()
      .then((response) => {
        try {
          dispatch(setTotalProductsAction(response.productsQuantity));
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
                  handleModalAddToCart={() => handleModalAddToCart(product)}
                />
              ))}
            </div>,
          );
        } catch (error) {
          log(error, isErrorLazyFilteredProducts);
        }
      });
  }, [searchParams]);

  // useEffect(() => {
  //   getFilteredProducts(
  //     filteredQueryString(searchParams, startPage, productsPerPage),
  //   )
  //     .unwrap()
  //     .then((response) => {
  //       try {
  //         setTotalProducts(response.productsQuantity);
  //         setProductCards(
  //           <div className={styles.list__products_wrapper}>
  //             {response.products?.map((product) => (
  //               <ProductCard
  //                 actions={{
  //                   toggleWishlistHandler,
  //                   toggleCartHandler,
  //                   toggleLocalCartHandler,
  //                 }}
  //                 product={product}
  //                 key={product._id}
  //                 handleModalAddToCart={() => handleModalAddToCart(product)}
  //               />
  //             ))}
  //           </div>,
  //         );
  //       } catch (error) {
  //         log(error, isErrorLazyFilteredProducts);
  //       }
  //     });
  // }, [searchParams, startPage]);

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

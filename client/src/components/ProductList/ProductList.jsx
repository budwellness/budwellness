import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.scss';

function ProductList({ setShowModalAddToCart, products, error }) {
  // console.log(products);

  return (
    <div className={styles.productList}>
      {error ? (
        <div className={styles.productList__errorWrapper}>
          Oh no, there was an error
        </div>
      ) : (
        <div className={styles.productList__productsWrapper}>
          {products?.map((product) => (
            <ProductCard
              product={product}
              key={product.itemNo}
              setShowModalAddToCart={setShowModalAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

ProductList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  products: PropTypes.arrayOf(PropTypes.object),
  // eslint-disable-next-line react/require-default-props
  error: PropTypes.string,
  setShowModalAddToCart: PropTypes.bool.isRequired,
};

export default ProductList;

import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import ProductList from '../ProductList/ProductList';
import styles from './Footer.module.scss';
import DoneIcon from '../UI/DoneIcon';

function Footer(props) {
  // eslint-disable-next-line react/prop-types
  const { error, products } = props;
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.container__main}>
          <span>123</span>
          <div className={styles.container__main__content}>a</div>
          <DoneIcon className={styles.doneIcon} />
          <Button />
          <div className={styles.container__secondary}>secondary</div>
        </div>
        <ProductList products={products} error={error} />
      </div>
    </footer>
  );
}

ProductList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  products: PropTypes.arrayOf(PropTypes.object),
  // eslint-disable-next-line react/require-default-props
  error: PropTypes.string,
};

export default Footer;

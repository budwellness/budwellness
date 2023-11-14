import React from 'react';

import Button from '../Button/Button';
import ProductList from '../ProductList/ProductList';
import styles from './Footer.module.scss';
import DoneIcon from '../UI/DoneIcon';

function Footer() {
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
        <ProductList />
      </div>
    </footer>
  );
}

export default Footer;

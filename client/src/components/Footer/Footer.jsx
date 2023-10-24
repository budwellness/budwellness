import React from 'react';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <container className={styles.container}>
        <div className={styles.container__main}>
          <span>123</span>
          <div className={styles.container__main__content}>a</div>
        </div>
        <div className={styles.container__secondary}>secondary</div>
      </container>
    </footer>
  );
}

export default Footer;

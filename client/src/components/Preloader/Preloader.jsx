import React from 'react';
import styles from './Preloader.module.scss';

function Preloader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <span />
      </div>
      <div className={styles.loader}>
        <span />
      </div>

      <div className={styles.loader}>
        <i />
      </div>
      <div className={styles.loader}>
        <i />
      </div>
    </div>
  );
}

export default Preloader;

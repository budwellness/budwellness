import React from 'react';
import LogoIcon from '../UI/LogoIcon';
import styles from './Info.module.scss';

function Info() {
  return (
    <div className={styles.comp1}>
      <img src="./images/left.png" alt="left" className={styles['img-left']} />
      <img
        src="./images/right.png"
        alt="right"
        className={styles['img-rigth']}
      />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <LogoIcon className={styles.logo} />
        </div>
        <p className={styles.title}>
          Our doctors recommend the best THC to CBD ratio to look for in a
          marijuana strain and suggest the recommended dosage and route of
          administration
        </p>
      </div>
    </div>
  );
}

export default Info;

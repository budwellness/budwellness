import React from 'react';
import leftImg from './images/left.png';
import rightImg from './images/right.png';
import logo from './images/logo.png';

import styles from './Info.module.scss';

function Info() {
  return (
    <div className={styles.comp1}>
      <img src={leftImg} alt="left" className={styles['img-left']} />
      <img src={rightImg} alt="right" className={styles['img-rigth']} />
      <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo} />
        <p>
          Our doctors recommend the best THC to CBD ratio to look for in a
          marijuana strain and suggest the recommended dosage and route of
          administration
        </p>
      </div>
    </div>
  );
}

export default Info;

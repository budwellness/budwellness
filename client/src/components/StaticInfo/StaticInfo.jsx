import React from 'react';
import Container from '../Container/Container';
import styles from './StaticInfo.module.scss';

function StaticInfo() {
  return (
    <Container>
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <h2 className={styles.info__title}>
            Our knowledgeable team can help you design experiences tailored to
            your needs by accessing one of the flower selections
          </h2>
          <p className={styles.info__text}>
            Discover the art of personalized floral design. Allow us to craft
            unique experiences that cater specifically to your preferences. Dive
            into a diverse array of flower selections, ensuring your vision is
            beautifully brought to life.
          </p>
        </div>
        <img src="./images/about.png" alt="About" className={styles.img} />
      </div>
      <ul className={styles.stat}>
        <li className={styles.stat__item}></li>
        <li className={styles.stat__item}></li>
        <li className={styles.stat__item}></li>
        <li className={styles.stat__item}></li>
      </ul>
    </Container>
  );
}

export default StaticInfo;

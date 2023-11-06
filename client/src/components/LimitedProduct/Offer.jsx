import React from 'react';
import CountdownTimer from './CountdownTimer';
import styles from './Offer.module.scss';
import icon from './icons/serum.jpg';

const Offer=()=> {
  return (
    <div className={styles.header_container}>
      <section className={styles.hero}>
        <div className={styles.hero_container}>
          <div className={styles.hero_content}>
            <h1 className={styles.hero_title}>CBD Facial Serum: Anti-Aging +Daily Moisturizer</h1>
            <p className={styles.hero_text}>
              {' '}
              Accumsan sit amet nulla facilisi morbi tempus. Suscipit tellus
              mauris a diam maecenas sed enim ut sem. Turpis egestas
              maecenas pharetra convallis posuere
              {' '}
            </p>
            <div className={styles['product-price']}>
              <div className={styles['original-price']}>$48.97</div>
              <div className={styles['discounted-price']}>$27.97</div>
            </div>
            <CountdownTimer />
            <a href="#" className={styles['shop-now-button']}>Shop Now</a>
          </div>
          <div className="hero_img"><img src={icon} alt="Serum" /></div>

        </div>

      </section>

    </div>

  );
}
export default Offer;

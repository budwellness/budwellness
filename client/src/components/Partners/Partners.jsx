import React from 'react';
import styles from './Partners.module.scss';

function Partners() {
  return (
    <div className={styles.partners}>
      <a className={styles.partners__hemp} href="https://www.hempcare.it/en/">
        <img src="/images/partnerOne.png" alt="Hemp Care" />
      </a>
      <a className={styles.partners__green} href="https://www.gtigrows.com/">
        <img src="/images/partnerTwo.png" alt="Green Thumb" />
      </a>
      <a className={styles.partners__verano} href="https://www.verano.com/">
        <img src="/images/partnerThree.png" alt="Verano" />
      </a>
      <a className={styles.partners__holy} href="https://www.holyherb.com/">
        <img src="/images/partnerFour.png" alt="Holy Herb" />
      </a>
      <a className={styles.partners__cresco} href="https://www.crescolabs.com/">
        <img src="/images/partnerFive.png" alt="Cresco Labs" />
      </a>
    </div>
  );
}

export default Partners;

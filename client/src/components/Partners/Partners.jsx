import React from 'react';
import styles from './Partners.module.scss';

function Partners() {
  return (
    <div className={styles.partners}>
      <a className={styles.partnerHemp} href="https://www.hempcare.it/en/">
        <img src="/public/images/partnerOne.png" alt="Hemp Care" />
      </a>
      <a className={styles.partnerGreen} href="https://www.gtigrows.com/">
        <img src="/public/images/partnerTwo.png" alt="Green Thumb" />
      </a>
      <a className={styles.partnerVerano} href="https://www.verano.com/">
        <img src="/public/images/partnerThree.png" alt="Verano" />
      </a>
      <a className={styles.partnerHoly} href="https://www.holyherb.com/">
        <img src="/public/images/partnerFour.png" alt="Holy Herb" />
      </a>
      <a className={styles.partnerCresco} href="https://www.crescolabs.com/">
        <img src="/public/images/partnerFive.png" alt="Cresco Labs" />
      </a>
    </div>
  );
}

export default Partners;

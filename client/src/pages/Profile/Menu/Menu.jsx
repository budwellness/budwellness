import React from 'react';
import styles from './Menu.module.scss';

function Menu() {
  return (
    // <aside className={styles.menuContainer}>
    //   <ul className={styles.menu}>
    //     <li className={styles.menu__item}>Contact Information</li>
    //     <li className={styles.menu__item}>Address Book</li>
    //     <li className={styles.menu__item}>Wishlist</li>
    //     <li className={styles.menu__item}>Order History</li>
    //   </ul>
    // </aside>
    <ul className={styles.menu}>
      <li className={styles.menu__item}>Contact Information</li>
      <li className={styles.menu__item}>Address Book</li>
      <li className={styles.menu__item}>Wishlist</li>
      <li className={styles.menu__item}>Order History</li>
    </ul>
  );
}

export default Menu;

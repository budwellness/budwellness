import React from 'react';
import styles from './Menu.module.scss';

function Menu() {
  return (
    <aside className={styles.menuContainer}>
      <ul className={styles.menu}>
        <li className={styles.menu__item}>User Information</li>
        <li className={styles.menu__item}>Order History</li>
      </ul>
    </aside>
  );
}

export default Menu;

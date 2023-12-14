import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

function Menu() {
  return (
    <aside className={styles.menuContainer}>
      <ul className={styles.menu}>
        <li className={styles.menu__item}>
          <Link to="/profile/information" className={styles.menu__item}>User Information</Link>
        </li>
        <li className={styles.menu__item}>
          <Link to="/profile/password" className={styles.menu__item}>Change Password</Link>
        </li>
        <li className={styles.menu__item}>
          <Link to="/profile/history" className={styles.menu__item}>Order History</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Menu;

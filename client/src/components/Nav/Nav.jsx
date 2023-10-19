import React from 'react';


import styles from "./Nav.module.scss"
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>News</li>
        <li>Pages</li>
      </ul>
    </nav>
  );
};

export default Nav;

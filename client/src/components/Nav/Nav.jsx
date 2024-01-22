import React from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';

import PropTypes from 'prop-types';
import styles from './Nav.module.scss';

function Nav({ showBurger, setShowBurger }) {
  const closeBurgerMenu = () => {
    setShowBurger(false);
  };
  return (
    <nav className={cn(styles.nav, { [styles.active]: showBurger })}>
      <ul className={styles.list}>
        {}
        <li className={styles.item}>
          <Link to="/" className={styles.itemLink} onClick={closeBurgerMenu}>
            Home
          </Link>
        </li>
        {}
        <li className={styles.item}>
          <Link
            to="/shop"
            className={styles.itemLink}
            onClick={closeBurgerMenu}
          >
            Shop
          </Link>
        </li>

        <li className={styles.item}>
          <Link
            to="/team"
            className={styles.itemLink}
            onClick={closeBurgerMenu}
          >
            Team
          </Link>
        </li>

        <li className={styles.item}>
          <Link
            to="/contact"
            className={styles.itemLink}
            onClick={closeBurgerMenu}
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  showBurger: PropTypes.bool.isRequired,
  setShowBurger: PropTypes.func.isRequired,
};

export default Nav;

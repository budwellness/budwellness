import React from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';

import PropTypes from 'prop-types';
import styles from './Nav.module.scss';

function Nav({ showBurger, setShowBurger }) {
  return (
    <nav className={cn(styles.nav, { [styles.active]: showBurger })}>
      <ul className={styles.list}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <li className={styles.item} onClick={() => setShowBurger(false)}>
          <Link to="/" className={styles.itemLink}>Home</Link>
        </li>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <li className={styles.item} onClick={() => setShowBurger(false)}>
          <Link to="/shop" className={styles.itemLink}>Shop</Link>
        </li>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <li className={styles.item} onClick={() => setShowBurger(false)}>
          <Link to="/news" className={styles.itemLink}>News</Link>
        </li>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <li className={styles.item} onClick={() => setShowBurger(false)}>
          <Link to="/contact" className={styles.itemLink}>Contacts</Link>
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

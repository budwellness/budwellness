import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import LogoIcon from './icons/LogoIcon';
import SearchIcon from './icons/SearchIcon';
import WishlistIcon from './icons/WishlistIcon';
import CartIcon from './icons/CartIcon';
import LoginIcon from './icons/LoginIcon';
import Container from '../Container/Container';

import styles from './Header.module.scss';

function Header() {
  const [show, setShow] = useState(false);
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapp}>
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,max-len,jsx-a11y/no-static-element-interactions */}
          <span className={cn(styles.toggleBtn, { [styles.active]: show })} onClick={() => setShow(!show)}>
            <span className={cn(styles.line, styles.shortLine)} />
            <span className={styles.line} />
            <span className={cn(styles.line, styles.shortLine)} />
            <span className={styles.line} />
          </span>
          <Link to="/">
            <LogoIcon />
            <span className={styles.header_logoTitle}>Bud</span>
            <span className={cn(styles.header_logoTitle, styles.accentColor)}>Wellness</span>
          </Link>
          <nav className={`${show ? styles.mobileNav : styles.list}`}>
            <ul className={styles.header_navList}>
              <li className={styles.header_navItem}>
                <Link to="/">Home</Link>
              </li>
              <li className={styles.header_navItem}>
                <Link to="/shop">Shop</Link>
              </li>
              <li className={styles.header_navItem}>
                <Link to="/news">News</Link>
              </li>
              <li className={styles.header_navItem}>
                <Link to="/pages">Pages</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.header_user}>
            <form className={styles.header_userSearchForm}>
              <input className={styles.header_userSearchInput} type="text" placeholder="Search..." />
              {/* eslint-disable-next-line react/button-has-type */}
              <button className={styles.header_userSearchButton}>
                <SearchIcon />
              </button>
            </form>
            <Link to="/login" className={styles.header_userLink}>
              <LoginIcon />
            </Link>
            <Link to="/wishlist" className={styles.header_userLink}>
              <WishlistIcon />
            </Link>
            <Link to="/cart" className={styles.header_userLink}>
              <CartIcon />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;

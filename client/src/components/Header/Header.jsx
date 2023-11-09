/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import LogoIcon from './icons/LogoIcon';
import SearchIcon from './icons/SearchIcon';
import WishlistIcon from './icons/WishlistIcon';
import CartIcon from './icons/CartIcon';
import LoginIcon from './icons/LoginIcon';
import Container from '../Container/Container';
import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

import styles from './Header.module.scss';

function Header({ setShowCartModal }) {
  const [showBurger, setShowBurger] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;

      if (scrollY >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (scrollY >= 400) {
         
        setSticky(true);
      } else {
         
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [sticky, setSticky] = useState(false);

  // ========================================================

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <header
      className={cn(styles.header, {
        [styles.scrolled]: scrolled,
        [styles.sticky]: sticky,
      })}
    >
      <Container>
        <div className={styles.wrapp}>
          { }
          { }
          <span
            className={cn(styles.toggleBtn, { [styles.active]: showBurger })}
            onClick={() => setShowBurger(!showBurger)}
          >
            <span className={cn(styles.line, styles.shortLine)} />
            <span className={styles.line} />
            <span className={cn(styles.line, styles.shortLine)} />
            <span className={styles.line} />
          </span>
          <Link to="/">
            <LogoIcon />
            <span className={styles.header_logoTitle}>Bud</span>
            <span className={cn(styles.header_logoTitle, styles.accentColor)}>
              Wellness
            </span>
          </Link>
          <nav className={`${showBurger ? styles.mobileNav : styles.list}`}>
            <ul className={styles.header_navList}>
              { }
              <li
                className={styles.header_navItem}
                onClick={() => setShowBurger(false)}
              >
                <Link to="/">Home</Link>
              </li>
              { }
              <li
                className={styles.header_navItem}
                onClick={() => setShowBurger(false)}
              >
                <Link to="/shop">Shop</Link>
              </li>
              { }
              <li
                className={styles.header_navItem}
                onClick={() => setShowBurger(false)}
              >
                <Link to="/news">News</Link>
              </li>
              { }
              <li
                className={styles.header_navItem}
                onClick={() => setShowBurger(false)}
              >
                <Link to="/pages">Pages</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.header_user}>
            <form className={styles.header_userSearchForm}>
              <input
                className={styles.header_userSearchInput}
                type="text"
                placeholder="Search..."
              />
              { }
              <button className={styles.header_userSearchButton}>
                <SearchIcon />
              </button>
            </form>
            <Link
              to="/"
              className={styles.header_userLink}
              onClick={handleModal}
            >
              <LoginIcon />
            </Link>
            <Link to="/wishlist" className={styles.header_userLink}>
              <WishlistIcon />
            </Link>
            <Link
              to="/"
              className={styles.header_userLink}
              onClick={setShowCartModal}
            >
              <CartIcon />
            </Link>
          </div>
        </div>
      </Container>
      {/* <CartModal showCartModal={showCartModal} setShowCartModal={setShowCartModal} /> */}
      {showModal && (
        <Modal handleModal={handleModal}>
          <LoginForm setShowModal={setShowModal} />
        </Modal>
      )}
      {}
      { }
      {/* {showCartModal && <div className={styles.overLayCartModal} onClick={() => setShowCartModal(false)} />} */}
    </header>
  );
}

Header.propTypes = {
  setShowCartModal: () => {},
};

Header.defaultProps = {
  setShowCartModal: () => {},
};

export default Header;

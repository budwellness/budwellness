import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import LogoIcon from './icons/LogoIcon';
import WishlistIcon from './icons/WishlistIcon';
import CartIcon from './icons/CartIcon';
import LoginIcon from './icons/LoginIcon';
import Container from '../Container/Container';
import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

import styles from './Header.module.scss';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';

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
        // eslint-disable-next-line no-use-before-define
        setSticky(true);
      } else {
        // eslint-disable-next-line no-use-before-define
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
    <header className={cn(styles.header, { [styles.scrolled]: scrolled, [styles.sticky]: sticky })}>
      <Container>
        <div className={styles.wrapp}>
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
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
            <span className={cn(styles.header_logoTitle, styles.accentColor)}>Wellness</span>
          </Link>
          <Nav showBurger={showBurger} setShowBurger={setShowBurger} />
          <div className={styles.header_user}>
            <Search />
            <Link to="/" className={styles.header_userLink} onClick={handleModal}>
              <LoginIcon />
            </Link>
            <Link to="/wishlist" className={styles.header_userLink}>
              <WishlistIcon />
            </Link>
            <Link to="/" className={styles.header_userLink} onClick={setShowCartModal}>
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
      {/* eslint-disable-next-line max-len */}
      {/* {showCartModal && <div className={styles.overLayCartModal} onClick={() => setShowCartModal(false)} />} */}
    </header>
  );
}

Header.propTypes = {
  setShowCartModal: () => {
  },
};

Header.defaultProps = {
  setShowCartModal: () => {
  },
};

export default Header;

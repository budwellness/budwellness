import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import LogoIcon from './icons/LogoIcon';
import SearchIcon from './icons/SearchIcon';
import WishlistIcon from './icons/WishlistIcon';
import CartIcon from './icons/CartIcon';
import LoginIcon from './icons/LoginIcon';
import Container from '../Container/Container';

import styles from './Header.module.scss';
import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';
import CartModal from '../CartModal/CartModal';

function Header() {
  const [showBurger, setShowBurger] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  console.log(showCartModal);

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
  const handleCartModal = () => {
    setShowCartModal(!showCartModal);
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
          <Link to='/'>
            <LogoIcon />
            <span className={styles.header_logoTitle}>Bud</span>
            <span className={cn(styles.header_logoTitle, styles.accentColor)}>Wellness</span>
          </Link>
          <nav className={`${showBurger ? styles.mobileNav : styles.list}`}>
            <ul className={styles.header_navList}>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
              <li className={styles.header_navItem} onClick={() => setShowBurger(false)}>
                <Link to='/'>Home</Link>
              </li>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
              <li className={styles.header_navItem} onClick={() => setShowBurger(false)}>
                <Link to='/shop'>Shop</Link>
              </li>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
              <li className={styles.header_navItem} onClick={() => setShowBurger(false)}>
                <Link to='/news'>News</Link>
              </li>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
              <li className={styles.header_navItem} onClick={() => setShowBurger(false)}>
                <Link to='/pages'>Pages</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.header_user}>
            <form className={styles.header_userSearchForm}>
              <input className={styles.header_userSearchInput} type='text' placeholder='Search...' />
              {/* eslint-disable-next-line react/button-has-type */}
              <button className={styles.header_userSearchButton}>
                <SearchIcon />
              </button>
            </form>
            <Link to='/' className={styles.header_userLink} onClick={handleModal}>
              <LoginIcon />
            </Link>
            <Link to='/wishlist' className={styles.header_userLink}>
              <WishlistIcon />
            </Link>
            <Link to='/' className={styles.header_userLink} onClick={handleCartModal}>
              <CartIcon />
            </Link>
          </div>
        </div>
      </Container>
      <CartModal showCartModal={showCartModal} setShowCartModal={setShowCartModal}/>
      {showModal && (
        <Modal handleModal={handleModal}>
          <LoginForm setShowModal={setShowModal} />
        </Modal>
      )}
    </header>
  );
}

export default Header;

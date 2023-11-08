/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

// COMPONENTS IMPORT:
import Container from '../Container/Container';
import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

// ICONS IMPORT:
import LogoIcon from './icons/LogoIcon';
import SearchIcon from './icons/SearchIcon';
import WishlistIcon from './icons/WishlistIcon';
import CartIcon from './icons/CartIcon';
import LoginIcon from './icons/LoginIcon';

// USER IMPORTS:
import {
  userLoginUserAction,
  userLogutUserAction,
} from '../../store/user/user.slice';
import { useLoginUserMutation } from '../../store/serverResponse/danitApi.auth';

import styles from './Header.module.scss';

function Header(props) {
  const {
    actions: {
      setShowCartModal,
      getCart,
      getWishlist,
    },
  } = props;



  /* --------------------------- INIT HOOKS: --------------------------- */

  const dispatch = useDispatch();

  /* --------------------------- LOCAL STATE: --------------------------- */

  const [showBurger, setShowBurger] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* --------------------------- REDUX STATE: --------------------------- */
  const { wishList: wishlistStoreData } = useSelector(
    (state) => state.wishlist,
  );

  const { isUserLogin } = useSelector(
    (state) => state.user,
  );

  const { cart: cartStoreData } = useSelector((state) => state.cart);

  /* --------------------------- COMPONENT HELPER HANDLERS: --------------------------- */

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const logoutHandler = () => {
    localStorage.removeItem('token');
    dispatch(userLogutUserAction());
  };

  /* --------------------------- COMPONENT LOGIC: --------------------------- */

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
              {isUserLogin && wishlistStoreData.length > 0 && (
                <span className={styles.wishlistCounter}>{wishlistStoreData.length}</span>
              )}
            </Link>
            <Link className={styles.header_userLink} onClick={setShowCartModal}>
              <CartIcon />
              {isUserLogin && cartStoreData.length > 0 && (
                <span className={styles.wishlistCounter}>{cartStoreData.length}</span>
              )}
            </Link>
          </div>
        </div>
        {showModal && (
          isUserLogin
            ?
            <button className={styles.header_userMenu} onClick={logoutHandler}>Logout</button>
            :
            <Modal handleModal={handleModal}>
              <LoginForm actions={{ setShowModal, getCart, getWishlist }} />
            </Modal>
        )}
      </Container>
      {/* <CartModal showCartModal={showCartModal} setShowCartModal={setShowCartModal} /> */}
      { }
      {/* eslint-disable-next-line max-len */}
      {/* {showCartModal && <div className={styles.overLayCartModal} onClick={() => setShowCartModal(false)} />} */}
    </header>
  );
}

Header.propTypes = {
  setShowCartModal: () => { },
};

Header.defaultProps = {
  setShowCartModal: () => { },
};

export default Header;

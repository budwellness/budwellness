/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// COMPONENTS IMPORT:
import Container from '../Container/Container';
import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import ButtonHeader from '../ButtonHeader/ButtonHeader';

// ICONS IMPORT:
import LogoIcon from './icons/LogoIcon';
import WishlistIcon from './icons/WishlistIcon';
import CartIcon from './icons/CartIcon';
import LoginIcon from './icons/LoginIcon';

// USER IMPORTS:
import {
  userLogutUserAction,
} from '../../store/user/user.slice';

import { setModal } from '../../store/modal/modal.slice';
import { setCartModal } from '../../store/cartModal/cartModal.slice';

import styles from './Header.module.scss';

function Header(props) {
  const {
    actions: {
      getCart,
      getWishlist,
    },
  } = props;

  /* --------------------------- INIT HOOKS: --------------------------- */

  const dispatch = useDispatch();

  /* --------------------------- LOCAL STATE: --------------------------- */

  const [showBurger, setShowBurger] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [hide, setHide] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  /* --------------------------- REDUX STATE: --------------------------- */
  const { wishList: wishlistStoreData } = useSelector(
    (state) => state.wishlist,
  );

  const { isUserLogin } = useSelector(
    (state) => state.user,
  );

  const { cart: cartStoreData } = useSelector((state) => state.cart);
  const { isOpenModal } = useSelector((state) => state.modal);

  /* --------------------------- COMPONENT HELPER HANDLERS: --------------------------- */

  const logoutHandler = () => {
    localStorage.removeItem('token');
    dispatch(userLogutUserAction());
  };

  /* --------------------------- COMPONENT LOGIC: --------------------------- */

  /* --------------------------- COMPONENT Modal: --------------------------- */
  const handleModal = () => {
    dispatch(setModal(!isOpenModal));
  };

  const handleOpenCartModal = () => {
    dispatch(setCartModal(true));
  };

  // ========================================================

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;

      if (scrollY >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (scrollY >= 400) {
        setHide(true);
      } else {
        setHide(false);
      }

      if (scrollY < prevScrollY) {
        setHide(false);
      }

      setPrevScrollY(scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, prevScrollY]);

  //= ===================================================

  return (
    <header className={cn(styles.header, { [styles.scrolled]: scrolled, [styles.hide]: hide })}>
      <Container>
        <div className={styles.wrapper}>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <span
            className={cn(styles.toggleBtn, { [styles.active]: showBurger })}
            onClick={() => setShowBurger(!showBurger)}
          >
            <span className={cn(styles.line, styles.shortLine)} />
            <span className={styles.line} />
            <span className={cn(styles.line, styles.shortLine)} />
            <span className={styles.line} />
          </span>
          <Link to="/" className={styles.logoLink}>
            <LogoIcon />
            <span className={styles.header_logoTitle}>Bud</span>
            <span className={cn(styles.header_logoTitle, styles.accentColor)}>Wellness</span>
          </Link>
          <Nav showBurger={showBurger} setShowBurger={setShowBurger} />
          <div className={styles.header_user}>
            <Search />
            <ButtonHeader className={styles.header_userLink} onClick={handleModal}>
              <LoginIcon />
            </ButtonHeader>
            <Link to="/wishlist" className={styles.header_userLink}>
              <WishlistIcon />
              {isUserLogin && wishlistStoreData.length > 0 && (
                <span className={styles.wishlistCounter}>{wishlistStoreData.length}</span>
              )}
            </Link>
            <ButtonHeader className={styles.header_userLink} onClick={handleOpenCartModal}>
              <CartIcon />
              {isUserLogin && cartStoreData.length > 0 && (
                <span className={styles.wishlistCounter}>{cartStoreData.length}</span>
              )}
            </ButtonHeader>
          </div>
        </div>
        {isOpenModal && (
          isUserLogin
            ? <button type="button" className={styles.header_userMenu} onClick={logoutHandler}>Logout</button>
            : (
              <Modal handleModal={handleModal}>
                <LoginForm actions={{ handleModal, getCart, getWishlist }} />
              </Modal>
            )
        )}
      </Container>
    </header>
  );
}

Header.propTypes = {
  actions: PropTypes.shape({
    getCart: PropTypes.func.isRequired,
    getWishlist: PropTypes.func.isRequired,
  }),
};

Header.defaultProps = {
  actions: {
    getCart: () => {},
    getWishlist: () => {},
  },
};

export default Header;

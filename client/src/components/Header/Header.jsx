import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LogoIcon from './icons/LogoIcon';
import SearchIcon from './icons/SearchIcon';
import WishlistIcon from './icons/WishlistIcon';
import CartIcon from './icons/CartIcon';
import LoginIcon from './icons/LoginIcon';
import Container from '../Container/Container';

import './Header.scss';

function Header() {
  const [show, setShow] = useState(false);
  return (
    <header className="header">
      <Container>
        <div className="wrapp">
          {/* eslint-disable-next-line react/button-has-type */}
          <button className="toggleBtn" onClick={() => setShow(!show)}>
            {show ? <span className="fa fa-times">da</span>
              : <span className="fa fa-bars">net</span>}
          </button>
          <Link to="/">
            <LogoIcon />
            <span className="header_logo-title">Herba</span>
            <span className="header_logo-title accent-color">List</span>
          </Link>
          <nav className={`${show ? 'mobile-nav' : 'list'}`}>
            <ul className="header_nav-item">
              <li className="header_nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="header_nav-item">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="header_nav-item">
                <Link to="/news">News</Link>
              </li>
              <li className="header_nav-item">
                <Link to="/pages">Pages</Link>
              </li>
            </ul>
          </nav>
          <div className="header_user">
            <form className="header_user-search">
              <input className="header_user-serarch_input" type="text" />
              {/* eslint-disable-next-line react/button-has-type */}
              <button className="header_user-serarch_button">
                <SearchIcon />
              </button>
            </form>
            <Link to="/login">
              <LoginIcon />
            </Link>
            <Link to="/wishlist">
              <WishlistIcon />
            </Link>
            <Link to="/cart">
              <CartIcon />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import LogoIcon from './icons/LogoIcon';
import SearchIcon from './icons/SearchIcon';
import WishlistIcon from './icons/WishlistIcon';
import CartIcon from './icons/CartIcon';
import LoginIcon from './icons/LoginIcon';

function Header() {
  const [show, setShow] = useState(false);
  return (
    <header>
      {/* eslint-disable-next-line react/button-has-type */}
      <button className='toggleBtn' onClick={() => setShow(!show)}>
        {show ? <span className='fa fa-times'>da</span>
          : <span className='fa fa-bars'>net</span>}
      </button>
      <Link to='/'>
        <LogoIcon />
        <span>Herba</span>
        <span>list</span>
      </Link>
      <nav className={`${show ? 'mobile-nav' : 'list'}`}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/shop'>Shop</Link>
          </li>
          <li>
            <Link to='/news'>News</Link>
          </li>
          <li>
            <Link to='/pages'>Pages</Link>
          </li>
        </ul>
      </nav>
      <div className='two'>
        <form>
          <input type='text' />
          <button type='button'>
            <SearchIcon />
          </button>
        </form>
        <Link to='/login'>
          <LoginIcon />
        </Link>
        <Link to='/wishlist'>
          <WishlistIcon />
        </Link>
        <Link to='/cart'>
          <CartIcon />
        </Link>
      </div>
    </header>
  );
}

export default Header;

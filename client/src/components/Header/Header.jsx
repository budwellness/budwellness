import React from 'react';

import styles from "./Header.module.scss"
import {Link} from "react-router-dom";
import Nav from "../Nav/Nav.jsx";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
      <Link to={"/"}>
        <span>logo svg</span>
        <span>herba</span>
        <span>list</span>
      </Link>
      <Nav/>
      <div>
        <form>
          <input type="text"/>
          <button>button</button>
        </form>
        <Link to={"/"}>Login</Link>
        <Link to={"/"}>Wishlist</Link>
        <Link to={"/"}>Cart</Link>
      </div>
      </div>
    </header>
  );
};

export default Header;

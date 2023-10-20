import React from 'react';


import styles from "./Nav.module.scss"
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/"}>Shop</Link>
        </li>
        <li>
          <Link to={"/"}>News</Link>
        </li>
        <li>
          <Link to={"/"}>Pages</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

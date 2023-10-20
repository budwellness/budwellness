import React from 'react';

import styles from './Header.module.scss';
import Nav from '../Nav/Nav';
import Container from '../Container/Container';

function Header() {
  return (
    <Container>
      <header className={styles.header}>
        <div className="container">
          <button type='button' className={styles.button}>
            <span />
            <span />
            <span />
            <span />
          </button>

          {/* <Link to={"/"}> */}
          {/*  Logo */}
          {/*  <span>Herba</span> */}
          {/*  <span>list</span> */}
          {/* </Link> */}
          <Nav />
          {/* <div> */}
          {/*  <form action=""> */}
          {/*    <input type="text" placeholder={"search..."}/> */}
          {/*    <button>search</button> */}
          {/*  </form> */}
          {/*  <Link to={"/"}>Login</Link> */}
          {/*  <Link to={"/"}>Wishlis</Link> */}
          {/*  <Link to={"/"}>Cart</Link> */}
          {/* </div> */}
        </div>
      </header>
    </Container>
  );
}

export default Header;

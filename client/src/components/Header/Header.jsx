import styles from "./Header.module.scss"


const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        {/*<div className={styles.button}>*/}
        {/*  <span></span>*/}
        {/*  <span></span>*/}
        {/*  <span></span>*/}
        {/*  <span></span>*/}
        {/*</div>*/}

        <button className={styles.button}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        {/*<Link to={"/"}>*/}
        {/*  Logo*/}
        {/*  <span>Herba</span>*/}
        {/*  <span>list</span>*/}
        {/*</Link>*/}
        {/*<Nav/>*/}
        {/*<div>*/}
        {/*  <form action="">*/}
        {/*    <input type="text" placeholder={"search..."}/>*/}
        {/*    <button>search</button>*/}
        {/*  </form>*/}
        {/*  <Link to={"/"}>Login</Link>*/}
        {/*  <Link to={"/"}>Wishlis</Link>*/}
        {/*  <Link to={"/"}>Cart</Link>*/}
        {/*</div>*/}
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import PopularProducts from '../../components/PopularProducts/PopularProducts';
import styles from './NotFoundPage.module.scss';

function NotFoundPage() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <img src="/images/404.png" alt="Error" className={styles.errorImg} />
        <div className={styles.errorMain}>
          <h2 className={styles.title}>Page not Found</h2>
          <p className={styles.text}>
            <span>The page you are looking for doesn&apos;t exist.</span>
            <span>Looks like you are in the wrong place.</span>
            <span>Let us guide you back!</span>
          </p>
          <div className={styles.btnWrrap}>
            <NavLink to="/" className={styles.link}>
              <Button
                type="button"
                text="Back to Home Page"
                className="orangeBtn"
                onClick={() => {}}
              />
            </NavLink>
          </div>
        </div>
        <PopularProducts />
      </Container>
    </div>
  );
}

export default NotFoundPage;

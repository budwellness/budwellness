import React from 'react';
import styles from './Profile.module.scss';
import Container from '../../components/Container/Container';
import Menu from './Menu/Menu';
import FormData from './FormData/FormData';

function Profile() {
  return (
    <Container>
      <div className={styles.profileContainer}>
        <Menu />
        {/* <aside className={styles.menuContainer}>
          <ul className={styles.menu}>
            <li className={styles.menu__item}>Contact Information</li>
            <li className={styles.menu__item}>Address Book</li>
            <li className={styles.menu__item}>Wishlist</li>
            <li className={styles.menu__item}>Order History</li>
          </ul>
        </aside> */}
        <FormData />
      </div>
    </Container>
  );
}
export default Profile;

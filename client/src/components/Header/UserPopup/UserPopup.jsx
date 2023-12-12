import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../Container/Container';
// import Button from '../../Button/Button';
import styles from './UserPopup.module.scss';

function UserPopup() {
  return (
    <Container>
      <div className={styles.popupContainer}>
        {/* <div className={styles.buttonWrap}>
          <Button type="button" text="Profile" className="orangeBtn" />
          <Button type="button" text="Logout" className="orangeBtn" />
        </div> */}
        <ul className={styles.popupList}>
          <li className={styles.popupList__item}>
            <Link to="/" className={styles.popupList__link}>
              Profile
            </Link>
          </li>
          <li className={styles.popupList__item}>
            <Link to="/" className={styles.popupList__link}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default UserPopup;

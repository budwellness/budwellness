import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserPopup.module.scss';

function UserPopup() {
  return (
    // <div className={styles.popupContainer}>
    //   <ul className={styles.popupList}>
    //     <li className={styles.popupList__item}>
    //       <Link to="/" className={styles.popupList__link}>
    //         Profile
    //       </Link>
    //     </li>
    //     <li className={styles.popupList__item}>
    //       <Link to="/" className={styles.popupList__link}>
    //         Logout
    //       </Link>
    //     </li>
    //   </ul>
    // </div>
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
  );
}

export default UserPopup;

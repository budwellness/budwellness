import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { clearLocalCartAction } from '../../../store/cart/cart.slice';
import { isPopupOpenAction } from '../../../store/modal/modal.slice';

import styles from './UserPopup.module.scss';

function UserPopup({ logoutHandler }) {
  const dispatch = useDispatch();

  const isPopupOpen = useSelector((store) => store.modal.isPopupOpen);

  if (!isPopupOpen) {
    return null;
  }
  return (
    <ul className={styles.popupList}>
      <li className={styles.popupList__item}>
        <Link
            to="/profile"
            className={styles.popupList__link}
        onClick={()=> {
            dispatch(isPopupOpenAction(false));
        }}
        >
          Profile
        </Link>
      </li>
      <li className={styles.popupList__item}>
        <Link
          to="/"
          className={styles.popupList__link}
          onClick={() => {
            dispatch(clearLocalCartAction());
            dispatch(isPopupOpenAction(false));
            logoutHandler();
          }}
        >
          Logout
        </Link>
      </li>
    </ul>
  );
}

UserPopup.propTypes = {
  logoutHandler: PropTypes.func,
};

UserPopup.defaultProps = {
  logoutHandler: () => {},
};

export default UserPopup;

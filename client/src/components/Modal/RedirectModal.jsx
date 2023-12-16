import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Modal.module.scss';

function RedirectModal({ children }) {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        {children}
      </div>
    </div>
  );
}

RedirectModal.defaultProps = {
  children: null,
};

RedirectModal.propTypes = {
  children: PropTypes.node,
};

export default RedirectModal;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';
import CloseIcon from '../../assets/icons/CloseIcon';

function Modal({ handleModal, children }) {
  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      handleModal();
    }
  };
  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={styles.modalWrapper} onClick={handleCloseModal}>
      <div className={styles.modal}>
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <span className={styles.close} onClick={handleModal}>
          <CloseIcon />
        </span>
        {children}
      </div>
    </div>
  );
}

Modal.defaultProps = {
  children: null,
};

Modal.propTypes = {
  handleModal: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;

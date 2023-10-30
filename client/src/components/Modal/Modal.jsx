import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

function Modal({ handleModal, children }) {
  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      handleModal();
    }
  };
  return (
    <div className={styles.modalWrapper} onClick={handleCloseModal}>
      <div className={styles.modal}>
       <span className={styles.close} onClick={handleModal}>
          &times;
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

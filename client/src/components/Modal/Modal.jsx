import React from 'react';

import styles from './Modal.module.scss';


function Modal({ closeModal }) {
  const handleOutSideModal = ({ target }) => {
    if (!target.closest('.modal')) {
      return closeModal();
    }
  };
  return (
    <div className={styles.modalWrapper} onClick={(event) => handleOutSideModal(event)}>
      <div className={styles.modal}>
        <span className="close">&times;</span>
      </div>
    </div>
  );
}

export default Modal;

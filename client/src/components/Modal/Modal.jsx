import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {useDispatch} from 'react-redux';
import CloseIcon from '../../assets/icons/CloseIcon';
import styles from './Modal.module.scss';

function Modal({classNames, handleModal, children}) {
    const dispatch = useDispatch();

    const handleOutSideModal = ({target}) => {
        if (!target.closest(`.${styles.modal}`)) {
            return dispatch(handleModal(false));
        }
        return null;
    };


    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        // eslint-disable-next-line max-len
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div className={styles.modalWrapper} onClick={(e) => handleOutSideModal(e)}>
            <div className={cn(styles.modal, styles[classNames])}>
                {/* eslint-disable-next-line max-len */}
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <span className={styles.close} onClick={handleModal}>
          <CloseIcon/>
        </span>
                {children}
            </div>
        </div>
    );
}

Modal.defaultProps = {
    children: null,
    classNames: '',
};

Modal.propTypes = {
    handleModal: PropTypes.func.isRequired,
    children: PropTypes.node,
    classNames: PropTypes.string,
};

export default Modal;

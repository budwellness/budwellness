/* eslint-disable */
import React from 'react';
import cn from 'classnames';
import {toast} from 'react-toastify';

// COMPONENTS: 
import CartWrapperModal from '../CartWrapperModal/CartWrapperModal';
import CloseIcon from '../../assets/icons/CloseIcon';

// CART IMPORTS:
import {useLazyGetCartQuery} from '../../store/serverResponse/danitApi.cart';

import styles from './CartModal.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {setCartModal} from "../../store/cartModal/cartModal.slice.js";


function CartModal() {
    const dispatch = useDispatch()

    /* --------------------------- REDUX STATE: --------------------------- */
    const {isCartModal} = useSelector((state) => state.cartModal);

    const handleOutSideModal = ({ target }) => {
        if (!target.closest(`.${styles.cartModal}`)) {
            return dispatch(setCartModal(false));
        }
        return null;
    };
    const handleCloseModal =()=> {
        dispatch(setCartModal(false))
    }

    return (
        <div className={cn(styles.cartModalWrapper, {[styles.openCart]: isCartModal})}
             onClick={(e) => handleOutSideModal(e)}>
            <div className={cn(styles.cartModal, {[styles.openCart]: isCartModal})}>
                <div className={styles.cartHeader}>
                    <h2 className={styles.cartTitle}>Cart</h2>
                    <button
                        className={styles.closeBtn}
                        type="button"
                        onClick={() => {
                            handleCloseModal()
                            toast.success('Woohoo')
                        }}
                    >
                        <CloseIcon/>
                    </button>
                </div>
                <CartWrapperModal/>
            </div>
        </div>
    );
}

export default CartModal;

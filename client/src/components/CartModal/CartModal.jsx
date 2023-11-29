/* eslint-disable */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { toast } from 'react-toastify';

// COMPONENTS: 
import CartWrapperModal from '../CartWrapperModal/CartWrapperModal';
import CloseIcon from '../../assets/icons/CloseIcon';

// CART IMPORTS:
import { useLazyGetCartQuery } from '../../store/serverResponse/danitApi.cart';

import styles from './CartModal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCartModal } from "../../store/cartModal/cartModal.slice.js";
import useFetchLocalCardProducts from '../../hooks/useFetchLocalCardProducts';


function CartModal() {
    const dispatch = useDispatch()


    const [fetchedLocalCardProducts, setFetchedLocalCardProducts] = useState([])
    /* --------------------------- REDUX STATE: --------------------------- */
    const { isCartModal } = useSelector((state) => state.cartModal);
    const { isUserLogin } = useSelector((state) => state.user)

    const fetchLocalCartProducts = useFetchLocalCardProducts();

    useEffect(() => {
        const fetchData = async () => {
            if (isCartModal && !isUserLogin) {
                // 1. вытащили ID продуктов из локальной корзины,
                // сделали на них запросы, отобразили в корзине
                const productsItemNo = JSON.parse(localStorage.getItem('localCart')).map(product => product.itemNo)
                // 2. Запихнули в локальный стейт и прокинули во враппер
                // setFetchedLocalCardProducts(fetchLocalCartProducts(productItemNo))
                // fetchLocalCartProducts(productsItemNo)
                const fetchedProducts = await fetchLocalCartProducts(productsItemNo)
                console.log(fetchedProducts)
                // setFetchedLocalCardProducts()
            }
        }
        fetchData();
    }, [isCartModal])



    const handleOutSideModal = ({ target }) => {
        if (!target.closest(`.${styles.cartModal}`)) {
            return dispatch(setCartModal(false));
        }
        return null;
    };
    const handleCloseModal = () => {
        dispatch(setCartModal(false))
    }

    return (
        <div className={cn(styles.cartModalWrapper, { [styles.openCart]: isCartModal })}
            onClick={(e) => handleOutSideModal(e)}>
            <div className={cn(styles.cartModal, { [styles.openCart]: isCartModal })}>
                <div className={styles.cartHeader}>
                    <h2 className={styles.cartTitle}>Cart</h2>
                    <button
                        className={styles.closeBtn}
                        type="button"
                        onClick={() => {
                            handleCloseModal()
                        }}
                    >
                        <CloseIcon />
                    </button>
                </div>
                <CartWrapperModal />
            </div>
        </div>
    );
}

export default CartModal;

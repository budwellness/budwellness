import React from 'react';
import cn from 'classnames';

import styles from './CartModal.module.scss';

function CartModal({ showCartModal, setShowCartModal }) {
  return (
    <div className={cn(styles.cartModal, { [styles.openCart]: showCartModal })}>
      <div className='cart__header'>
        <h2 className='nav__header'>Cart</h2>
        <button onClick={() => setShowCartModal(false)}>&times;</button>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        assumenda, cumque quibusdam quas libero molestiae temporibus rerum
        aperiam, inventore officia repellendus quo. Laudantium aspernatur iste
        ipsa! Reiciendis id laudantium recusandae voluptates deserunt dolorem
        iste quis, libero, voluptatem error, rerum voluptatibus excepturi
        similique quasi? A, quos? Dolores magni cumque deleniti recusandae.
      </p>
      <div className={styles.cartModalFooter}>footer</div>
    </div>
  );
}

export default CartModal;

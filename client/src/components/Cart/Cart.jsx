import React from 'react';

import Container from '../Container/Container';
import CartMain from './CartMain/CartMain';
import CartSummary from './CartSummary/CartSummary';

import styles from './Cart.module.scss';

export default function Cart() {
  return (
    <Container>
      <section className={styles.section_cart}>
        <div className={styles.cart_container}>
          <CartMain />
          <CartSummary />
        </div>
      </section>
    </Container>
  );
}

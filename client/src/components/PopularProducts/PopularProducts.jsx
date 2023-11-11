import React from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '../Container/Container';
import Button from '../Button/Button';
import styles from './PopularProducts.module.scss';
import PopularSwiper from './PopularSwiper/PopularSwiper';

export default function PopularProducts() {
  const navigate = useNavigate();

  return (
    <Container>
      <section className={styles.section_popular}>
        <div className={styles.popular_header}>
          <h2 className={styles.popular_headerTitle}>Popular Products</h2>
          <p className={styles.popular_headerText}>
            Medical marijuana can be beneficial in treating anxiety disorders
            and post-traumatic stress syndrome. Marijuana can help patients with
            depression and other mood-related conditions
          </p>
        </div>

        <PopularSwiper />

        <Button
          text="All Products"
          className="orangeBtn"
          onClick={() => {
            navigate('/shop');
          }}
        />
      </section>
    </Container>
  );
}

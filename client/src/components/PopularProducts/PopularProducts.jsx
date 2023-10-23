import React, { useState } from 'react';
import cN from 'classnames';
import Carousel from 'react-simply-carousel';
import styles from './PopularProducts.module.scss';

export default function PopularProducts() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <section className={cN(styles.popular, styles.section)}>
      <div className={styles.container}>
        <div className={styles.popular_header}>
          <h2 className={styles.popular_headerTitle}>Popular Products</h2>
          <p className={styles.popular_headerText}>
            Suscipit tellus mauris a diam maecenas sed enim ut sem. Turpis
            egestas maecenas pharetra convallis posuere
          </p>
        </div>
      </div>
      <Carousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={4}
        itemsToScroll={1}
        autoplay
        infinite
        delay={1500}
        speed={1000}
        easing="ease-in-out"
        containerProps={{
          style: {
            flexDirection: 'column',
            alignContent: 'center',
          },
        }}
        dotsNav={{
          show: true,
          containerProps: {
            style: {
              marginTop: 60,
              textAlign: 'center',
            },
          },
          itemBtnProps: {
            style: {
              width: 12,
              height: 12,
              background: '#9ebca6',
              marginRight: 25,
              borderRadius: '50%',
              border: 0,
            },
          },
          activeItemBtnProps: {
            style: {
              width: 12,
              height: 12,
              background: '#258f67',
              marginRight: 25,
              borderRadius: '50%',
              border: 0,
            },
          },
        }}
        forwardBtnProps={{
          show: false,
          style: {
            alignSelf: 'center',
            background: 'grey',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          show: false,
          style: {
            alignSelf: 'center',
            background: 'grey',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        // responsiveProps={[
        //   {
        //     itemsToShow: 2,
        //     itemsToScroll: 2,
        //     minWidth: 768,
        //   },
        // ]}
      >
        {Array.from({ length: 4 }).map((item, index) => (
          <div
            key={index}
            style={{
              background: 'lightgrey',
              width: 300,
              height: 200,
              borderRight: '15px solid red',
              textAlign: 'center',
              lineHeight: '200px',
              boxSizing: 'border-box',
            }}
          >
            {index}
          </div>
        ))}
      </Carousel>
    </section>
  );
}

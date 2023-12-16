/* eslint-disable */

import React from 'react';
import Container from '../../../../components/Container/Container';
import styles from './OrderHistoryItem.module.scss';

const mockData = {
  _id: '5dac4ecd6bbe0e05e487f0be',
  product: {
    enabled: true,
    imageUrls: [
      '/images/chocolate_brownies_1.png',
      '/images/chocolate_brownies_2.png',
      '/images/chocolate_brownies_3.png',
    ],
    quantity: 156,
    _id: '5da463678cca382250dd7bc7',
    name: 'updted product for testing purposes 222',
    currentPrice: 100,
    previousPrice: 250,
    categories: 'flowers',
    color: 'red',
    productUrl: '/flower',
    brand: 'braaaand',
    myCustomParam: 'some string or json for custom param',
    itemNo: '291759',
    date: '2019-10-14T12:00:39.679Z',
    __v: 0,
    oneMoreCustomParam: {
      description: 'blablabla',
      rate: 4.8,
      likes: 20,
    },
  },
  cartQuantity: 2,
};

function OrderHistoryItem() {
  return (
    <Container>
      <div className={styles.orderHistoryWrapper__item}>
        <div className={styles.elem}>
          <img
            src="/images/chocolate_brownies_1.png"
            alt="product"
            className={styles.img}
          />
          <div className={styles.mainInfo}>
            <h3 className={styles.title}>bhang milk chocolate</h3>
            <p className={styles.weight}>3.5mg</p>
          </div>
        </div>
        <div className={styles.quantity}>
          <span className={styles.quantityText}>2</span>
          <span className={styles.quantityText}>th</span>
        </div>
        <div className={styles.priceWrapper}>
          <p className={styles.priceText}>Subtotal</p>
          <p className={styles.price}>$29.96</p>
        </div>
      </div>
    </Container>
  );
}

export default OrderHistoryItem;

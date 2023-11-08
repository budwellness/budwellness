import React from 'react';
import PropTypes from 'prop-types';

import CartCard from '../CartCard/CartCard';

import styles from './CartList.module.scss';

export default function CartList({ items }) {
  const arrayItems = items.map((card) => (
    <CartCard key={card.itemNo} card={card} />
  ));

  return <ul className={styles.cart_mainList}>{arrayItems}</ul>;
}

CartList.propTypes = {
  items: PropTypes.arrayOf,
};
CartList.defaultProps = {
  items: [],
};

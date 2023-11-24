import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './Pagination.module.scss';

function Pagination(props) {
  const {
    productsPerPage,
    totalProducts,
    setStartPage,
    startPage,
  } = props;

  const pageNumbers = [];

  const setStartPageHandler = (num) => {
    setStartPage(num);
  };

  const isActiveHandler = (num) => (num === startPage);

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.pagination__container}>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={cn(styles.page_item, { [styles.page_item_active]: isActiveHandler(number) })}
            onClick={() => {
              setStartPageHandler(number);
            }}
            onKeyDown={() => { }}
          >
            <span className={styles.num}>
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  productsPerPage: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
  setStartPage: PropTypes.func.isRequired,
  startPage: PropTypes.number.isRequired,
};
export default Pagination;

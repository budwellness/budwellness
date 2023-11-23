import React from 'react';
import cn from 'classnames';

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
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={cn(styles.page_item, { [styles.page_item_active]: isActiveHandler(number) })}
            onClick={() => {
              setStartPageHandler(number);
            }}
          >
            <span className="page-btn">
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;

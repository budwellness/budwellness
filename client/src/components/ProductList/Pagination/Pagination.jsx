import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import styles from './Pagination.module.scss';
import { setStartPageAction } from '../../../store/filter/filter.slice';

function Pagination(props) {
  const {
    productsPerPage,
  } = props;

  const pageNumbers = [];
  const dispatch = useDispatch();

  /* --------------------------- REDUX STATE: --------------------------- */

  const { pagination } = useSelector((state) => state.filter);

  /* --------------------------- COMPONENT HANDLERS: --------------------------- */

  const setStartPageHandler = (num) => {
    dispatch(setStartPageAction(num));
  };

  const isActiveHandler = (num) => (num === pagination.startPage);

  for (let i = 1; i <= Math.ceil(pagination.totalProducts / productsPerPage); i += 1) {
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
};
export default Pagination;

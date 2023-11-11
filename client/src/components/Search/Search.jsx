import React from 'react';
import SearchIcon from '../Header/icons/SearchIcon';

import styles from './Search.module.scss';

function Search() {
  return (
    <form className={styles.header_userSearchForm}>
      <input className={styles.header_userSearchInput} type="text" placeholder="Search..." />
      {/* eslint-disable-next-line react/button-has-type */}
      <button className={styles.header_userSearchButton}>
        <SearchIcon />
      </button>
    </form>
  );
}

export default Search;

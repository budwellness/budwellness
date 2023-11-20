import React, { useEffect, useState } from 'react';
import SearchIcon from '../Header/icons/SearchIcon';

import styles from './Search.module.scss';
import useDebounced from '../../hooks/useDebounce';
import { useSearchForProductsMutation } from '../../store/serverResponse/danitApi.products';
import { Link } from 'react-router-dom';

function Search() {
  const [search, setSearch] = useState('');
  const [dropdown, setDropdown] = useState()
  const debounced = useDebounced(search);

  const [
    searchForProducts,
    {
      data,
      isError,
      isLoading,
      isSuccess
    }
  ] = useSearchForProductsMutation();
  useEffect(() => {
    if (debounced.length > 2) {
      searchForProducts(debounced)
        .unwrap()
        .then((response) => console.log(response))
    }
  }, [debounced]);

  useEffect(() => {
    setDropdown(debounced.length > 2 && data?.length > 0);
  });
  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.header_userSearchForm}>
      <input
        className={styles.header_userSearchInput}
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {/* eslint-disable-next-line react/button-has-type */}
      <button className={styles.header_userSearchButton}>
        <SearchIcon />
      </button>
      {dropdown && (
        <ul className={styles.header_userSearchDropdown}>
          {isLoading && <p>Loading...</p>}
          {data?.map((item) => (
            <li
              className={styles.userSearchItem}
              key={item._id}
            >
              <Link
                to={`/product/${item.itemNo}`}
                onClick={() => setSearch('')}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default Search;

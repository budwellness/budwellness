import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '../Header/icons/SearchIcon';

import styles from './Search.module.scss';
import useDebounced from '../../hooks/useDebounce';
import { useSearchForProductsMutation } from '../../store/serverResponse/danitApi.products';

function Search() {
  const [search, setSearch] = useState('');
  const [dropdown, setDropdown] = useState();
  const debounced = useDebounced(search);
  const [isError, setIsError] = useState(false);

  const [
    searchForProducts,
    {
      data,
      isLoading,
    },
  ] = useSearchForProductsMutation();

  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    setDropdown(false);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    if (debounced.length > 2) {
      searchForProducts(debounced);
    }
  }, [debounced]);

  useEffect(() => {
    setDropdown(debounced.length > 2 && data?.length > 0);
  }, [debounced, data]);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.header_userSearchForm}>
      <input
        className={styles.header_userSearchInput}
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setIsError(false); // Reset error state when typing
        }}
      />
      <button type="button" className={styles.header_userSearchButton}>
        <SearchIcon />
      </button>
      {dropdown && (
        <div ref={dropdownRef}>
          {isError ? (
            <p>{isError}</p>
          ) : (
            <ul className={styles.header_userSearchDropdown}>
              {isLoading && <p>Loading...</p>}
              {data?.map((item) => (
                <li className={styles.userSearchItem} key={item._id}>
                  <div>
                    <img
                      className={styles.userSearchItemLogo}
                      src={item.imageUrls[0]}
                      alt={item.name}
                    />
                  </div>
                  <Link
                    className={styles.userSearchLink}
                    to={`/product/${item.itemNo}`}
                    onClick={() => {
                      setSearch('');
                      closeDropdown();
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </form>
  );
}

export default Search;

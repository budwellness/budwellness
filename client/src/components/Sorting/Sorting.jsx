import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sortingValues from '../../configs/sortingValues';
import styles from './Sorting.module.scss';
import { setSortingParamAction } from '../../store/filter/filter.slice';

const { log } = console;

function Sorting() {
  const [sortingOptions] = useState([
    'Default sorting',
    'Lowest First',
    'Highest First',
    'Most popular',
  ]);

  const [selectedSorting, setSelectedSorting] = useState(sortingOptions[0]);
  const [isSortingOpen, setIsSortingOpen] = useState(false);

  const dispatch = useDispatch();

  const { queryString } = useSelector((state) => state.filter);

  const handleSortingChange = (sorting) => {
    log('queryString', queryString.sorting);
    setSelectedSorting(sorting);

    // в зависимости от СОРТИН ВАЛЬЮ закидывать в редакс значение сортинг велью

    dispatch(setSortingParamAction(sortingValues[sorting]));
    setIsSortingOpen(false);
  };

  const handleKeyDown = (event, sorting) => {
    if (event.key === 'Enter') {
      handleSortingChange(sorting);
    }
  };

  const toggleSortingOptions = () => {
    setIsSortingOpen(!isSortingOpen);
  };

  return (
    <div className={styles.sorting}>
      <h4 className={styles.sorting__title}>Sorting:</h4>
      <div className={styles.sorting__container}>
        <button
          type="button"
          onClick={toggleSortingOptions}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              toggleSortingOptions();
            }
          }}
          className={styles.sorting__dropbtn}
        >
          {selectedSorting}
        </button>
        {isSortingOpen && (
          <div className={styles.sorting__dropdownContent}>
            {sortingOptions.map((option) => (
              <p
                key={option}
                onClick={() => handleSortingChange(option)}
                onKeyDown={(e) => handleKeyDown(e, option)}
                className={styles.sorting__desc}
              >
                {option}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Sorting;

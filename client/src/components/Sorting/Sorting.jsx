import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import sortingValues from '../../configs/sortingValues';
import { setSortingParamAction } from '../../store/filter/filter.slice';
import styles from './Sorting.module.scss';

function Sorting() {
  const [sortingOptions] = useState([
    'Default sorting',
    'Lowest Price',
    'Highest Price',
    'Most popular',
  ]);

  const [selectedSorting, setSelectedSorting] = useState(sortingOptions[0]);
  const [isSortingOpen, setIsSortingOpen] = useState(false);

  const dispatch = useDispatch();

  const handleSortingChange = (sorting) => {
    setSelectedSorting(sorting);
    setIsSortingOpen(false);
    dispatch(setSortingParamAction(sortingValues[sorting]));
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

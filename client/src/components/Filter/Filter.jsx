/*eslint-disable */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useRef, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Slider from 'rc-slider';
import { useDispatch } from 'react-redux';
import { addFilterTagAction, setSearchParamAction, setStartPageAction } from '../../store/filter/filter.slice';
import useDebounced from '../../hooks/useDebounce';
import debounce from 'lodash.debounce'

import 'rc-slider/assets/index.css';
import styles from './Filter.module.scss';

const { log } = console;

function Filter(props) {
  const { startPage, setStartPage, formRef } = props;
  /* --------------------------- INIT HOOKS: --------------------------- */
  const dispatch = useDispatch();
  const [isFilterOpen, setIsFilterOpen] = useState(false);


  /* --------------------------- COMPONENT STATE: --------------------------- */
  const [selectedPlantTypes, setSelectedPlantTypes] = useState('');
  const [selectedTHCRange, setSelectedTHCRange] = useState([]);
  const [selectedCBDRange, setSelectedCBDRange] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 200]);
  // const [debouncedPriceRange, setDebouncedPriceRange] = useState([0, 200]);


  /* --------------------------- COMPONENT HANDLERS: --------------------------- */
  const handleCategoryChange = (category) => {
    // setSelectedCategories(category);
  };
  const handlePlantTypeChange = (plantType) => {
    setSelectedPlantTypes(plantType);
  };
  const handlePriceChange = () => {
    setPriceRange(value);
    formHandlerToRedux();
  }

  const handleTHCChange = (thc) => {
    setSelectedTHCRange([thc]);
  };
  const handleCBDChange = (cbd) => {
    setSelectedCBDRange([cbd]);
  };
  const handleResize = () => {
    setIsFilterOpen(window.innerWidth >= 992);
  };

  /* --------------------------- COMPONENT LOGIC: --------------------------- */

  const formHandlerToRedux = () => {
    const filterDataArr = [];

    const filterData = new FormData(formRef.current);

    for (let [key, value] of filterData.entries()) {
      // if (key !== 'minPrice' && key !== 'maxPrice') {
      //   setSelectedCategories((prevValue) => ({ ...prevValue, [key]: value }));
      // }

      if (key === 'thc' || key === 'cbd') {
        const digits = value.match(/\d+/g);
        dispatch(addFilterTagAction({ [key]: `${key} ${digits[0]}%-${digits[1]}%` }))
        filterDataArr.push(`${value}`);
        continue;
      }
      dispatch(addFilterTagAction({ [key]: value }))
      if (key === 'categories' && value === 'all') {
        continue;
      }
      filterDataArr.push(`${key}=${value}`);
    }

    const [minPrice, maxPrice] = priceRange;

    filterDataArr.push(`minPrice=${minPrice}&maxPrice=${maxPrice}`);

    const filterQueryString = filterDataArr.join('&');

    dispatch(setStartPageAction(1))
    dispatch(setSearchParamAction(`${filterQueryString}`))
  };


  // const formHandler = () => {
  //   const filterDataArr = [];
  //   const filterData = new FormData(formRef.current);
  //   for (let [key, value] of filterData.entries()) {
  //     if (key !== 'minPrice' && key !== 'maxPrice') {
  //       setSelectedCategories((prevValue) => ({ ...prevValue, [key]: value }));
  //     }
  //     if (key === 'thc' || key === 'cbd') {
  //       filterDataArr.push(`${value}`);
  //       continue;
  //     }
  //     filterDataArr.push(`${key}=${value}`);
  //   }
  //   const [minPrice, maxPrice] = priceRange;
  //   filterDataArr.push(`minPrice=${minPrice}&maxPrice=${maxPrice}`);

  //   const filterQueryString = filterDataArr.join('&');
  //   setStartPage(1);
  //   setSearchParams(`${filterQueryString}`);
  // };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.filterContainer}>
      <div className={styles.cancel}>
        {' '}
      </div>
      <button onClick={toggleFilter} className={styles.filterButton}>
        Filters
      </button>
      {(window.innerWidth >= 992 || isFilterOpen) && (
        <form ref={formRef} onChange={() => { formHandlerToRedux() }} className={styles.container}>
          <div
            className={`${styles.filter__categories} ${styles.filter__item1}`}
          >
            <h4 className={styles.filter__name}>Product Categories</h4>
            <label htmlFor="All" className={styles.filter__label}>
              <input
                name="categories"
                type="radio"
                id="All"
                value="all"
                className={styles.filter__input}
                onChange={() => handleCategoryChange('All')}
              />
              All
            </label>
            <label htmlFor="Flowers" className={styles.filter__label}>
              <input
                name="categories"
                type="radio"
                id="Flowers"
                value="Flowers"
                className={styles.filter__input}
                onChange={() => handleCategoryChange('categories=Flowers')}
              />
              Flowers
            </label>
            <label htmlFor="Pre-Rolls" className={styles.filter__label}>
              <input
                name="categories"
                type="radio"
                id="Pre-Rolls"
                value="Pre-Rolls"
                className={styles.filter__input}
                onChange={() => handleCategoryChange('Pre-Rolls')}
              />
              Pre-Rolls
            </label>
            <label htmlFor="Edible" className={styles.filter__label}>
              <input
                name="categories"
                type="radio"
                id="Edible"
                value="Edible"
                className={styles.filter__input}
                onChange={() => handleCategoryChange('Edible')}
              />
              Edible
            </label>
            <label htmlFor="Oils" className={styles.filter__label}>
              <input
                name="categories"
                type="radio"
                id="Oils"
                value="Oils"
                className={styles.filter__input}
                onChange={() => handleCategoryChange('Oils')}
              />
              Oils
            </label>
            <label htmlFor="Beverage" className={styles.filter__label}>
              <input
                name="categories"
                type="radio"
                id="Beverage"
                value="Beverage"
                className={styles.filter__input}
                onChange={() => handleCategoryChange('Beverage')}
              />
              Beverage
            </label>
            <label htmlFor="Seeds" className={styles.filter__label}>
              <input
                name="categories"
                type="radio"
                id="Seeds"
                value="Seeds"
                className={styles.filter__input}
                onChange={() => handleCategoryChange('Seeds')}
              />
              Seeds
            </label>
          </div>

          <div className={styles.filter__categories}>
            <h4 className={styles.filter__name}>Plant Type</h4>
            <label htmlFor="indicaDominant" className={styles.filter__label}>
              <input
                name="plantType"
                type="radio"
                id="indicaDominant"
                value="Indica"
                className={styles.filter__input}
                onChange={() =>
                  handlePlantTypeChange('plantType=Indica-Dominant')
                }
              />
              Indica-Dominant
            </label>
            <label htmlFor="sativaDominant" className={styles.filter__label}>
              <input
                name="plantType"
                type="radio"
                id="sativaDominant"
                value="Sativa"
                className={styles.filter__input}
                onChange={() => handlePlantTypeChange('Sativa-Dominant')}
              />
              Sativa-Dominant
            </label>
            <label htmlFor="hybrid" className={styles.filter__label}>
              <input
                name="plantType"
                type="radio"
                id="hybrid"
                value="Hybrid"
                className={styles.filter__input}
                onChange={() => handlePlantTypeChange('Hybrid')}
              />
              Hybrid
            </label>
          </div>

          <div className={styles.filter__categories}>
            <h4 className={styles.filter__name}>Filter by Price</h4>
            <span>Min: {priceRange[0]}</span>
            <Slider
              min={0}
              max={200}
              step={1}
              value={priceRange}
              // обернуть в дебаунс
              onChange={handlePriceChange}
              range
            />
            <span>Max: {priceRange[1]}</span>
          </div>

          <div className={styles.filter__categories}>
            <h4 className={styles.filter__name}>THC</h4>
            <label htmlFor="zeroToTen" className={styles.filter__label}>
              <input
                name="thc"
                type="radio"
                id="zeroToTen"
                value="minThc=0&maxThc=10"
                className={styles.filter__input}
                onChange={() => handleTHCChange('0-10%')}
              />
              0% - 10%
            </label>
            <label htmlFor="elevenToTwenty" className={styles.filter__label}>
              <input
                name="thc"
                type="radio"
                id="elevenToTwenty"
                value="minThc=10&maxThc=20"
                className={styles.filter__input}
                onChange={() => handleTHCChange('10-20%')}
              />
              10% - 20%
            </label>
            <label htmlFor="twentyOneToThirty" className={styles.filter__label}>
              <input
                name="thc"
                type="radio"
                id="twentyOneToThirty"
                value="minThc=20&maxThc=30"
                className={styles.filter__input}
                onChange={() => handleTHCChange('20-30%')}
              />
              20% - 30%
            </label>
            <label htmlFor="thirtyOneToForty" className={styles.filter__label}>
              <input
                name="thc"
                type="radio"
                id="thirtyOneToForty"
                value="minThc=30&maxThc=50"
                className={styles.filter__input}
                onChange={() => handleTHCChange('30-50%')}
              />
              30% - 50%
            </label>
          </div>

          <div className={styles.filter__categories}>
            <h4 className={styles.filter__name}>CBD</h4>
            <label htmlFor="zeroToOne" className={styles.filter__label}>
              <input
                name="cbd"
                type="radio"
                id="zeroToOne"
                value="minCbd=0&maxCbd=10"
                className={styles.filter__input}
                onChange={() => handleCBDChange('0-10%')}
              />
              0% - 10%
            </label>
            <label htmlFor="twoToFive" className={styles.filter__label}>
              <input
                name="cbd"
                type="radio"
                id="twoToFive"
                value="minCbd=10&maxCbd=20"
                className={styles.filter__input}
                onChange={() => handleCBDChange('10-20%')}
              />
              10% - 20%
            </label>
            <label htmlFor="sixToTwenty" className={styles.filter__label}>
              <input
                name="cbd"
                type="radio"
                id="sixToTwenty"
                value="minCbd=20&maxCbd=30"
                className={styles.filter__input}
                onChange={() => handleCBDChange('20-30%')}
              />
              20% - 30%
            </label>
            <label htmlFor="twentyOneToFifty" className={styles.filter__label}>
              <input
                name="cbd"
                type="radio"
                id="twentyOneToFifty"
                value="minCbd=30&maxCbd=50"
                className={styles.filter__input}
                onChange={() => handleCBDChange('30-50%')}
              />
              30% - 50%
            </label>
          </div>
        </form>
      )}
    </div>
  );
}

export default Filter;

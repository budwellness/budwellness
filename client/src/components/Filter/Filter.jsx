/*eslint-disable */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useRef, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Filter.module.scss';

const { log } = console;

function Filter(props) {
  const { startPage, setStartPage } = props;
  /* --------------------------- INIT HOOKS: --------------------------- */
  const navigate = useNavigate();
  const formRef = useRef();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  /* --------------------------- COMPONENT STATE: --------------------------- */
  const [selectedCategories, setSelectedCategories] = useState('All');
  const [selectedPlantTypes, setSelectedPlantTypes] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [selectedTHCRange, setSelectedTHCRange] = useState([]);
  const [selectedCBDRange, setSelectedCBDRange] = useState([]);

  // const clearCategory = (category) => {
  //   const updatedCategories = selectedCategories
  //     .split(' ')
  //     .filter((cat) => cat !== category)
  //     .join(' ');
  //   setSelectedCategories(updatedCategories);
  // };

  const selectedCategoriesArray = selectedCategories.split(' ');

  /* --------------------------- COMPONENT HANDLERS: --------------------------- */
  const handleCategoryChange = (category) => {
    setSelectedCategories(category);
    setSelectedCategories((prevCategories) => `${prevCategories} ${category}`);
  };
  const handlePlantTypeChange = (plantType) => {
    setSelectedPlantTypes(plantType);
    setSelectedCategories((prevCategories) => `${prevCategories} ${plantType}`);
  };
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange({ ...priceRange, [name]: Number(value) });
  };
  const handleTHCChange = (thc) => {
    setSelectedTHCRange([thc]);
    setSelectedCategories((prevCategories) => `${prevCategories} ${thc}`);
  };
  const handleCBDChange = (cbd) => {
    setSelectedCBDRange([cbd]);
    setSelectedCategories((prevCategories) => `${prevCategories} ${cbd}`);
  };
  const handleResize = () => {
    setIsFilterOpen(window.innerWidth >= 992);
  };

  /* --------------------------- COMPONENT LOGIC: --------------------------- */

  const formHandler = () => {
    const filterDataArr = [];
    const filterData = new FormData(formRef.current);
    for (let [key, value] of filterData.entries()) {
      if (key === 'thc' || key === 'cbd') {
        filterDataArr.push(`${value}`);
        continue;
      }
      filterDataArr.push(`${key}=${value}`);
    }
    const filterQueryString = filterDataArr.join('&');
    setStartPage(1);
    setSearchParams(`${filterQueryString}`);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  return (
    <div className={styles.filterContainer}>
      <button onClick={toggleFilter} className={styles.filterButton}>
        Filters
      </button>
      {(window.innerWidth >= 992 || isFilterOpen) && (
        <form ref={formRef} onChange={formHandler} className={styles.container}>
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
                checked={selectedCategories.includes('All')}
                onChange={() => handleCategoryChange('All')}
              />
              All
            </label>
            <label htmlFor="OnSale" className={styles.filter__label}>
              <input
                name="categories"
                type="radio"
                id="OnSale"
                value="sale"
                className={styles.filter__input}
                checked={selectedCategories.includes('On Sale')}
                onChange={() => handleCategoryChange('On Sale')}
              />
              On Sale
            </label>
            <label htmlFor="Flowers" className={styles.filter__label}>
              <input
                name="categories"
                type="radio"
                id="Flowers"
                value="Flowers"
                className={styles.filter__input}
                checked={selectedCategories.includes('Flowers')}
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
                checked={selectedCategories.includes('Pre-Rolls')}
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
                checked={selectedCategories.includes('Edible')}
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
                checked={selectedCategories.includes('Oils')}
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
                checked={selectedCategories.includes('Beverage')}
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
                checked={selectedCategories.includes('Seeds')}
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
                checked={selectedPlantTypes.includes('Indica-Dominant')}
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
                checked={selectedPlantTypes.includes('Sativa-Dominant')}
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
                checked={selectedPlantTypes.includes('Hybrid')}
                onChange={() => handlePlantTypeChange('Hybrid')}
              />
              Hybrid
            </label>
          </div>

          <div className={styles.filter__categories}>
            <h4 className={styles.filter__name}>Filter by Price</h4>
            <label>
              <input
                type="number"
                name="minPrice"
                value={priceRange.min}
                className={`${styles.filter__label} ${styles.filter__price}`}
                onChange={handlePriceChange}
              />
            </label>
            <label>
              <input
                type="number"
                name="maxPrice"
                value={priceRange.max}
                className={`${styles.filter__label} ${styles.filter__price}`}
                onChange={handlePriceChange}
              />
            </label>
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
                checked={selectedTHCRange.includes('0-10%')}
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
                checked={selectedTHCRange.includes('10-20%')}
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
                checked={selectedTHCRange.includes('20-30%')}
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
                checked={selectedTHCRange.includes('30-50%')}
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
                checked={selectedCBDRange.includes('0-10%')}
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
                checked={selectedCBDRange.includes('10-20%')}
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
                checked={selectedCBDRange.includes('20-30%')}
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
                checked={selectedCBDRange.includes('30-50%')}
                onChange={() => handleCBDChange('30-50%')}
              />
              30% - 50%
            </label>
          </div>

          <div className={styles.selectedCategories}>
  {selectedCategoriesArray.length > 0 &&
    selectedCategoriesArray.map((category) => (
      <button
        key={category}
        onClick={() => clearCategory(category)}
        className={styles.clearButton}
      >
        {category} <span>&times;</span>
      </button>
    ))}
</div>
        </form>
      )}
    </div>
  );
}

export default Filter;


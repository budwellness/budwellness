/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import styles from './Filter.module.scss';

function Filter() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPlantTypes, setSelectedPlantTypes] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [selectedTHCRange, setSelectedTHCRange] = useState([]);
  const [selectedCBDRange, setSelectedCBDRange] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategories([category]);
  };
  const handlePlantTypeChange = (plantType) => {
    setSelectedPlantTypes([plantType]);
  };
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange({ ...priceRange, [name]: Number(value) });
  };
  const handleTHCChange = (thc) => {
    setSelectedTHCRange([thc]);
  };
  const handleCBDChange = (cbd) => {
    setSelectedCBDRange([cbd]);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.filter__categories} ${styles.filter__item1}`}>
        <h4 className={styles.filter__name}>Product Categories</h4>
        <label htmlFor="All" className={styles.filter__label}>
          <input
            type="radio"
            id="All"
            value="All"
            className={styles.filter__input}
            checked={selectedCategories.includes('All')}
            onChange={() => handleCategoryChange('All')}
          />
          All
        </label>
        <label htmlFor="On Sale" className={styles.filter__label}>
          <input
            type="radio"
            id="On Sale"
            value="On Sale"
            className={styles.filter__input}
            checked={selectedCategories.includes('On Sale')}
            onChange={() => handleCategoryChange('On Sale')}
          />
          On Sale
        </label>
        <label htmlFor="Flowers" className={styles.filter__label}>
          <input
            type="radio"
            id="Flowers"
            value="Flowers"
            className={styles.filter__input}
            checked={selectedCategories.includes('Flowers')}
            onChange={() => handleCategoryChange('Flowers')}
          />
          Flowers
        </label>
        <label htmlFor="Pre-Rolls" className={styles.filter__label}>
          <input
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
            type="radio"
            id="indicaDominant"
            value="Indica-Dominant"
            className={styles.filter__input}
            checked={selectedPlantTypes.includes('Indica-Dominant')}
            onChange={() => handlePlantTypeChange('Indica-Dominant')}
          />
          Indica-Dominant
        </label>
        <label htmlFor="sativaDominant" className={styles.filter__label}>
          <input
            type="radio"
            id="sativaDominant"
            value="Sativa-Dominant"
            className={styles.filter__input}
            checked={selectedPlantTypes.includes('Sativa-Dominant')}
            onChange={() => handlePlantTypeChange('Sativa-Dominant')}
          />
          Sativa-Dominant
        </label>
        <label htmlFor="hybrid" className={styles.filter__label}>
          <input
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
            name="min"
            value={priceRange.min}
            className={styles.filter__label}
            onChange={handlePriceChange}
          />
        </label>
        <label>
          <input
            type="number"
            name="max"
            value={priceRange.max}
            className={styles.filter__label}
            onChange={handlePriceChange}
          />
        </label>
      </div>

      <div className={styles.filter__categories}>
        <h4 className={styles.filter__name}>THC</h4>
        <label htmlFor="zeroToTen" className={styles.filter__label}>
          <input
            type="radio"
            id="zeroToTen"
            value="0.2-10%"
            className={styles.filter__input}
            checked={selectedTHCRange.includes('0.2-10%')}
            onChange={() => handleTHCChange('0.2-10%')}
          />
          0.2-10%
        </label>
        <label htmlFor="elevenToTwenty" className={styles.filter__label}>
          <input
            type="radio"
            id="elevenToTwenty"
            value="11-20%"
            className={styles.filter__input}
            checked={selectedTHCRange.includes('11-20%')}
            onChange={() => handleTHCChange('11-20%')}
          />
          11-20%
        </label>
        <label htmlFor="twentyOneToThirty" className={styles.filter__label}>
          <input
            type="radio"
            id="twentyOneToThirty"
            value="21-30%"
            className={styles.filter__input}
            checked={selectedTHCRange.includes('21-30%')}
            onChange={() => handleTHCChange('21-30%')}
          />
          21-30%
        </label>
        <label htmlFor="thirtyOneToForty" className={styles.filter__label}>
          <input
            type="radio"
            id="thirtyOneToForty"
            value="31-40%"
            className={styles.filter__input}
            checked={selectedTHCRange.includes('31-40%')}
            onChange={() => handleTHCChange('31-40%')}
          />
          31-40%
        </label>
      </div>

      <div className={styles.filter__categories}>
        <h4 className={styles.filter__name}>CBD</h4>
        <label htmlFor="zeroToOne" className={styles.filter__label}>
          <input
            type="radio"
            id="zeroToOne"
            checked={selectedCBDRange.includes('0.1-1%')}
            value="0.1-1%"
            className={styles.filter__input}
            onChange={() => handleCBDChange('0.1-1%')}
          />
          0.1-1%
        </label>
        <label htmlFor="twoToFive" className={styles.filter__label}>
          <input
            type="radio"
            id="twoToFive"
            value="2-5%"
            className={styles.filter__input}
            checked={selectedCBDRange.includes('2-5%')}
            onChange={() => handleCBDChange('2-5%')}
          />
          2-5%
        </label>
        <label htmlFor="sixToTwenty" className={styles.filter__label}>
          <input
            type="radio"
            id="sixToTwenty"
            value="6-20%"
            className={styles.filter__input}
            checked={selectedCBDRange.includes('6-20%')}
            onChange={() => handleCBDChange('6-20%')}
          />
          6-20%
        </label>
        <label htmlFor="twentyOneToFifty" className={styles.filter__label}>
          <input
            type="radio"
            id="twentyOneToFifty"
            value="21-50%"
            className={styles.filter__input}
            checked={selectedCBDRange.includes('21-50%')}
            onChange={() => handleCBDChange('21-50%')}
          />
          21-50%
        </label>
      </div>
    </div>
  );
}

export default Filter;

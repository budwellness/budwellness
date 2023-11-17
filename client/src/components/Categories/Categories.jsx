import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Categories.module.scss';

const categoryData = [
  {
    id: 0,
    name: 'Pre-Rolls',
    image:
      'https://smokecones.com/cdn/shop/files/PreRoll_MegaMenu_560x.png?v=1650498552',
  },
  {
    id: 1,
    name: 'Flowers',
    image:
      'https://st4.depositphotos.com/27756932/40843/i/600/depositphotos_408434826-stock-photo-cannabis-leaf-pattern-green-hemp.jpg',
  },
  {
    id: 2,
    name: 'Edible',
    image:
      'https://plantsbeforepills.com/wp-content/uploads/2021/03/3-CBD-Baked-Treats-for-Easter.jpg',
  },
  {
    id: 3,
    name: 'Oils',
    image:
      'https://st4.depositphotos.com/27756932/40966/i/600/depositphotos_409664420-stock-photo-hemp-oil-serum-glass-dropper.jpg',
  },
  {
    id: 4,
    name: 'Beverage',
    image:
      'https://img.freepik.com/premium-photo/sbd-hemp-drink-different-glasses-creative-green-hard-shadow-background-relaxing-cannabis-cocktail_721474-1010.jpg?w=826',
  },
  {
    id: 5,
    name: 'Seeds',
    image:
      'https://www.mcclatchy-partners.com/paradise-media/health-wellness/wcutkc/picture274866971/alternates/LANDSCAPE_1140/Copy%20of%20seed-banks-4.png',
  },
];

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    navigate(`/products/${categoryName}`);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.content}>
        {categoryData.map((category) => (
          <li
            className={`${styles['content-categories']} ${
              selectedCategory === category.name ? styles.selected : ''
            }`}
            key={category.id}
            onClick={() => handleCategoryClick(category.name)}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                handleCategoryClick(category.name);
              }
            }}
          >
            <img
              className={styles['image-categories']}
              src={category.image}
              alt={category.name}
            />
            <h4 className={styles['text-categories']}>{category.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

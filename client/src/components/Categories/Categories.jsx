import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Categories.module.scss';
import Container from '../Container/Container';

const categoryData = [
  {
    id: 0,
    name: 'Pre-Rolls',
    image: '/images/pre-rolls.png',
  },
  {
    id: 1,
    name: 'Flowers',
    image: '/images/flowers.jpeg',
  },
  {
    id: 2,
    name: 'Edible',
    image: '/images/edible.jpeg',
  },
  {
    id: 3,
    name: 'Oils',
    image: '/images/oils.jpeg',
  },
  {
    id: 4,
    name: 'Beverage',
    image: '/images/beverage.jpg',
  },
  {
    id: 5,
    name: 'Seeds',
    image: '/images/seeds.png',
  },
];

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    navigate(`/shop?categories=${categoryName}`);
  };

  return (
    <Container>
      <div className={styles.container}>
        <ul className={styles.content}>
          {categoryData.map((category) => (
            <li
              className={`${styles['content-categories']} ${selectedCategory === category.name ? styles.selected : ''
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
    </Container>
  );
}

export default Categories;

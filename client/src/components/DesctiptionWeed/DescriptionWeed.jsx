import React from 'react';
import styles from './DescriptionWeed.module.scss';
import Button from '../Button/Button';
import Container from '../Container/Container';

function DescriptionWeed() {
  return (
    <Container>
      <div className={styles.containerWeed}>
        <div className={styles.descriptionWeed}>
          <div className={styles.textBlock}>
            <h2 className={styles.titleWeed}>
              Therapeutic Effects of Cannabis and Cannabinoids
            </h2>
            <p className={styles.textWeed}>
              Therapeutic benefits of cannabis and cannabinoids encompass pain
              management, nausea reduction, and alleviation of symptoms in
              conditions like multiple sclerosis or epilepsy.
            </p>
            <Button
              type="button"
              text="Our Products"
              className="orangeBtn"
              onClick={() => {}}
            />
          </div>
          <div className={styles.imageBlock}>
            <img
              src="https://html.merku.love/herbalist/img/index/effects.webp"
              alt="Weed"
            />
          </div>
          <ul className={styles.effectBlock}>
            <li className={styles.effectItem}>
              <h4 className={styles.effectName}>Relief of chronic pain</h4>
              <p className={styles.effectDescription}>
                Feugiat in fermentum posuere urna nec tincidunt praesent semper
                feugiat pulvinar proin
              </p>
            </li>
            <li className={styles.effectItem2}>
              <h4 className={styles.effectName}>Fight cancer</h4>
              <p className={styles.effectDescription}>
                Feugiat in fermentum posuere urna nec tincidunt praesent semper
                feugiat pulvinar proin
              </p>
            </li>
            <li className={styles.effectItem3}>
              <h4 className={styles.effectName}>Depression</h4>
              <p className={styles.effectDescription}>
                Feugiat in fermentum posuere urna nec tincidunt praesent semper
                feugiat pulvinar proin
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default DescriptionWeed;

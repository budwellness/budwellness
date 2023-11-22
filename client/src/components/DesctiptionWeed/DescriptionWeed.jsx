import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DescriptionWeed.module.scss';
import Button from '../Button/Button';
import Container from '../Container/Container';

function DescriptionWeed() {
  const navigate = useNavigate();

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
              onClick={() => {
                navigate('/shop');
              }}
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
                Discover relief for chronic pain in this section, offering
                practical solutions for improved well-being.
              </p>
            </li>
            <li className={styles.effectItem2}>
              <h4 className={styles.effectName}>Fight cancer</h4>
              <p className={styles.effectDescription}>
                Discover effective ways to combat cancer and find hope in
                cutting-edge treatments and support.
              </p>
            </li>
            <li className={styles.effectItem3}>
              <h4 className={styles.effectName}>Depression</h4>
              <p className={styles.effectDescription}>
                The Depression section provides support, info on symptoms and
                treatments, and a caring community for those facing this
                challenge.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default DescriptionWeed;

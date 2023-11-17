import React, { useEffect, useRef } from 'react';
import Container from '../Container/Container';
import styles from './StaticInfo.module.scss';

function StaticInfo() {
  const refNum = useRef(null);
  const refRate = useRef(null);

  useEffect(() => {
    const spanNum = refNum.current;
    const handleScroll = () => {
      const rect = spanNum.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        let number = 120;
        const time = 3000;
        const step = 2;
        const totalNumber = 180;
        const t = Math.round(time / (totalNumber / step));
        const interval = setInterval(() => {
          number += step;
          if (number >= totalNumber) {
            clearInterval(interval);
            number = totalNumber;
          }
          spanNum.innerText = `${number}+`;
        }, t);
        window.removeEventListener('scroll', handleScroll);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const spanRate = refRate.current;
    const handleScroll = () => {
      const rect = spanRate.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        let number = 60;
        const time = 3000;
        const step = 2;
        const totalNumber = 100;
        const t = Math.round(time / (totalNumber / step));
        const interval = setInterval(() => {
          number += step;
          if (number >= totalNumber) {
            clearInterval(interval);
            number = totalNumber;
          }
          spanRate.innerText = `${number}%`;
        }, t);
        window.removeEventListener('scroll', handleScroll);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container>
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <h2 className={styles.info__title}>
            Our knowledgeable team can help you design experiences tailored to
            your needs by accessing one of the flower selections
          </h2>
          <p className={styles.info__text}>
            Discover the art of personalized floral design. Allow us to craft
            unique experiences that cater specifically to your preferences. Dive
            into a diverse array of flower selections, ensuring your vision is
            beautifully brought to life.
          </p>
        </div>
        <img src="./images/about.png" alt="About" className={styles.img} />
      </div>

      <ul className={styles.dataSet}>
        <li className={styles.dataSet__item}>
          <span ref={refNum} className={styles.data} />
          <p className={styles.text}>
            New products to explore. We open and combine new products
          </p>
        </li>
        <li className={styles.dataSet__item}>
          <span className={styles.data}>3X</span>
          <p className={styles.text}>
            We carefully select, sort and create products
          </p>
        </li>
        <li className={styles.dataSet__item}>
          <span ref={refRate} className={styles.data} />
          <p className={styles.text}>
            Our result only the best.We work at our highest level
          </p>
        </li>
        <li className={styles.dataSet__item}>
          <span className={styles.data}>11K</span>
          <p className={styles.text}>
            Many happy сustomers. Many positive reviews
          </p>
        </li>
      </ul>
    </Container>
  );
}

export default StaticInfo;

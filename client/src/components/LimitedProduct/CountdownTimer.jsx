import React, { useState, useEffect } from 'react';
import styles from './Offer.module.scss';

function CountdownTimer() {
  const targetDate = new Date('2023-11-27T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const timeDifference = targetDate - currentDate;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeLeft({
          days, hours, minutes, seconds,
        });
      } else {
        // Если время истекло, можно выполнить какие-то дополнительные действия
        setTimeLeft({
          days: 0, hours: 0, minutes: 0, seconds: 0,
        });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles['countdown-timer']}>
      <div className={styles['countdown-item']}>
        <div className={styles['countdown-value']}>{String(timeLeft.days).padStart(2, '0')}</div>
        <div className={styles['countdown-label']}>days</div>
      </div>
      <div className={styles['countdown-item']}>
        <div className={styles['countdown-value']}>{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className={styles['countdown-label']}>hours</div>
      </div>
      <div className={styles['countdown-item']}>
        <div className={styles['countdown-value']}>{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className={styles['countdown-label']}>mins</div>
      </div>
      <div className={styles['countdown-item']}>
        <div className={styles['countdown-value']}>{String(timeLeft.seconds).padStart(2, '0')}</div>
        <div className={styles['countdown-label']}>secs</div>
      </div>
    </div>
  );
}

export default CountdownTimer;

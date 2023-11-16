import React from 'react';
import Container from '../Container/Container';
import DoneIcon from '../UI/DoneIcon';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.main__section}>
          <span>FOOTER</span>
          <div className={styles.main__content}>
            <DoneIcon className={styles.doneIcon} />
          </div>
        </div>
        <div className={styles.secondary__section}>secondary</div>
      </Container>
    </footer>
  );
}

export default Footer;

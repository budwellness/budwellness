import React from 'react';

import PagePreviewHeader from '../../components/PagePreviewHeader/PagePreviewHeader';
import Container from '../../components/Container/Container';
import SocialNetworks from './SocialNetworks/SocialNetworks';

import styles from './OurTeam.module.scss';

function OurTeam() {
  return (
    <>
      <PagePreviewHeader
        title="Our Team"
        text="Celebrating Unity in Diversity: Meet Our Team of Young Specialists"
      />
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.wrapper__person}>
            <div className={styles.personHover}>
              <SocialNetworks hover={styles.hoverClass} />
            </div>
            <img
              src="/images/Stanislav.png"
              alt="developer"
              className={styles.photoItem}
            />
            <h3 className={styles.name}>Stanislav Ostapushchenko</h3>
          </div>
          <div className={styles.wrapper__person}>
            <div className={styles.personHover}>
              <SocialNetworks hover={styles.hoverClass} />
            </div>
            <img
              src="/images/Diana.png"
              alt="developer"
              className={styles.photoItem}
            />
            <h3 className={styles.name}>Diana Liashenko</h3>
          </div>
          <div className={styles.wrapper__person}>
            <div className={styles.personHover}>
              <SocialNetworks hover={styles.hoverClass} />
            </div>
            <img
              src="/images/Serhii.png"
              alt="developer"
              className={styles.photoItem}
            />
            <h3 className={styles.name}>Serhii Sokol</h3>
          </div>
          <div className={styles.wrapper__person}>
            <div className={styles.personHover}>
              <SocialNetworks hover={styles.hoverClass} />
            </div>
            <img
              src="/images/Vitaliy.png"
              alt="developer"
              className={styles.photoItem}
            />
            <h3 className={styles.name}>Vitaliy Snezhkin</h3>
          </div>
          <div className={styles.wrapper__person}>
            <div className={styles.personHover}>
              <SocialNetworks hover={styles.hoverClass} />
            </div>
            <img
              src="/images/Ihor.png"
              alt="developer"
              className={styles.photoItem}
            />
            <h3 className={styles.name}>Ihor Toroshanko</h3>
          </div>
          <div className={styles.wrapper__person}>
            <div className={styles.personHover}>
              <SocialNetworks hover={styles.hoverClass} />
            </div>
            <img
              src="/images/Ruslan.png"
              alt="developer"
              className={styles.photoItem}
            />
            <h3 className={styles.name}>Ruslan Kulahin</h3>
          </div>
          <div className={styles.wrapper__person}>
            <div className={styles.personHover}>
              <SocialNetworks hover={styles.hoverClass} />
            </div>
            <img
              src="/images/Tanya.png"
              alt="developer"
              className={styles.photoItem}
            />
            <h3 className={styles.name}>Tetiana Naumchuk</h3>
          </div>
          <div className={styles.wrapper__person}>
            <div className={styles.personHover}>
              <SocialNetworks hover={styles.hoverClass} />
            </div>
            <img
              src="/images/Denis.png"
              alt="developer"
              className={styles.photoItem}
            />
            <h3 className={styles.name}>Denis Gavrilenko</h3>
          </div>
        </div>
      </Container>
    </>
  );
}

export default OurTeam;

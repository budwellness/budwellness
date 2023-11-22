/* eslint-disable */

import React from 'react';
// import { Link } from 'react-router-dom';
import PagePreviewHeader from '../../components/PagePreviewHeader/PagePreviewHeader';
import Container from '../../components/Container/Container';
import SocialNetworks from './SocialNetworks/SocialNetworks';
// import FaceBookIcon from '../../components/UI/FaceBookIcon';
// import InstaIcon from '../../components/UI/InstaIcon';
// import LinkedinIcon from '../../components/UI/LinkedinIcon';
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
            <SocialNetworks />
            <img
              src="/images/Ihor.jpg"
              alt="photo"
              className={styles.photoItem}
            />
            <div className={styles.wpapperLink}>{/* <SocialNetworks /> */}</div>
            <h3 className={styles.name}>Ihor Toroshanko</h3>
          </div>
          <div className={styles.wrapper__person}>
            <div className={styles.wpapper__photo}>
              <img
                src="/images/Ruslan.jpg"
                alt="photo"
                className={styles.photoItem}
              />
              <SocialNetworks />
            </div>
            <h3 className={styles.name}>Ruslan Kulahin</h3>
          </div>
          <div className={styles.wrapper__person}>
            <div className={styles.wpapper__photo}>
              <img
                src="/images/Tanya.jpg"
                alt="photo"
                className={styles.photoItem}
              />
              <SocialNetworks />
            </div>
            <h3 className={styles.name}>Tetiana Naumchuk</h3>
          </div>
          <div className={styles.wrapper__person}>
            <div className={styles.wpapper__photo}>
              <img
                src="/images/Tanya_2.jpg"
                alt="photo"
                className={styles.photoItem}
              />
              <SocialNetworks />
            </div>
            <h3 className={styles.name}>Tetiana Naumchuk</h3>
          </div>
          <div className={styles.wrapper__person}>
            <div className={styles.wpapper__photo}>
              <img
                src="/images/Tanya.jpg"
                alt="photo"
                className={styles.photoItem}
              />
              <SocialNetworks />
            </div>
            <h3 className={styles.name}>Tetiana Naumchuk</h3>
          </div>
          <div className={styles.wrapper__person}>
            <div className={styles.wpapper__photo}>
              <img
                src="/images/Ruslan.jpg"
                alt="photo"
                className={styles.photoItem}
              />
              <SocialNetworks />
            </div>
            <h3 className={styles.name}>Ruslan Kulahin</h3>
          </div>
          <div className={styles.wrapper__person}>
            <div className={styles.wpapper__photo}>
              <img
                src="/images/Ihor.jpg"
                alt="photo"
                className={styles.photoItem}
              />
              <SocialNetworks />
            </div>
            <h3 className={styles.name}>Ihor Toroshanko</h3>
          </div>
          <div className={styles.wrapper__person}>
            <div className={styles.wpapper__photo}>
              <img
                src="/images/Tanya_2.jpg"
                alt="photo"
                className={styles.photoItem}
              />
              <SocialNetworks />
            </div>
            <h3 className={styles.name}>Tetiana Naumchuk</h3>
          </div>
        </div>
      </Container>
    </>
  );
}

export default OurTeam;

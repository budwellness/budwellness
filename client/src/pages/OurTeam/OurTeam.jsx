/* eslint-disable */

import React from 'react';
import cN from 'classnames';
// import { Link } from 'react-router-dom';
import PagePreviewHeader from '../../components/PagePreviewHeader/PagePreviewHeader';
import Container from '../../components/Container/Container';
import SocialNetworks from './SocialNetworks/SocialNetworks';
// import FaceBookIcon from '../../components/UI/FaceBookIcon';
// import InstaIcon from '../../components/UI/InstaIcon';
// import LinkedinIcon from '../../components/UI/LinkedinIcon';
import styles from './OurTeam.module.scss';

function OurTeam() {
  // const hoverClass = 'hover';
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
              alt="photo"
              className={styles.photoItem}
            />
            <h3 className={styles.name}>Stanislav Ostapushchenko</h3>
          </div>
          <div className={styles.wrapper__person}>
            {/* <div className={styles.wpapper__photo}> */}
            <div className={styles.personHover}>
              <SocialNetworks hover={styles.hoverClass} />
            </div>
            <img
              src="/images/Diana.png"
              alt="photo"
              className={styles.photoItem}
            />
            {/* </div> */}
            <h3 className={styles.name}>Diana Liashenko</h3>
          </div>
          <div className={styles.wrapper__person}>
            {/* <div className={styles.wpapper__photo}> */}
            <div className={styles.personHover}>
              <SocialNetworks hover={styles.hoverClass} />
            </div>
            <img
              src="/images/Serhii.png"
              alt="photo"
              className={styles.photoItem}
            />
            {/* </div> */}
            <h3 className={styles.name}>Serhii Sokol</h3>
          </div>
          <div className={styles.wrapper__person}>
            {/* <div className={styles.wpapper__photo}> */}
            <div className={styles.personHover}>
              <SocialNetworks hover={styles.hoverClass} />
            </div>
            <img
              src="/images/Vitaliy.png"
              alt="photo"
              className={styles.photoItem}
            />
            {/* </div> */}
            <h3 className={styles.name}>Vitaliy Snezhkin</h3>
          </div>
          <div className={styles.wrapper__person}>
            {/* <div className={styles.wpapper__photo}> */}
            <div className={styles.personHover}>
              <SocialNetworks hover={styles.hoverClass} />
            </div>
            <img
              src="/images/Ihor.png"
              alt="photo"
              className={styles.photoItem}
            />
            {/* </div> */}
            <h3 className={styles.name}>Ihor Toroshanko</h3>
          </div>
          <div className={styles.wrapper__person}>
            {/* <div className={styles.wpapper__photo}> */}
            <div className={styles.personHover}>
              <SocialNetworks hover={styles.hoverClass} />
            </div>
            <img
              src="/images/Ruslan.png"
              alt="photo"
              className={styles.photoItem}
            />
            {/* </div> */}
            <h3 className={styles.name}>Ruslan Kulahin</h3>
          </div>
          <div className={styles.wrapper__person}>
            {/* <div className={styles.wpapper__photo}> */}
            <div className={styles.personHover}>
              <SocialNetworks hover={styles.hoverClass} />
            </div>
            <img
              src="/images/Tanya.png"
              alt="photo"
              className={styles.photoItem}
            />
            {/* </div> */}
            <h3 className={styles.name}>Tetiana Naumchuk</h3>
          </div>
          <div className={styles.wrapper__person}>
            {/* <div className={styles.wpapper__photo}> */}
            <div className={styles.personHover}>
              <SocialNetworks hover={styles.hoverClass} />
            </div>
            <img
              src="/images/Denis.png"
              alt="photo"
              className={styles.photoItem}
            />
            {/* </div> */}
            <h3 className={styles.name}>Denis Gavrilenko</h3>
          </div>
        </div>
      </Container>
    </>
  );
}

export default OurTeam;

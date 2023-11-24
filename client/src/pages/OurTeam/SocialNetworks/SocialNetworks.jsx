import React from 'react';
import { Link } from 'react-router-dom';
import FaceBookIcon from '../../../components/UI/FaceBookIcon';
import InstaIcon from '../../../components/UI/InstaIcon';
import LinkedinIcon from '../../../components/UI/LinkedinIcon';
import styles from './SocialNetworks.module.scss';

function SocialNetworks() {
  return (
    <div className={styles.wpapperLink}>
      <Link to="https://www.facebook.com/" className={styles.logoLink}>
        <FaceBookIcon className={styles.styleIcon} />
      </Link>
      <Link to="https://www.instagram.com/" className={styles.logoLink}>
        <InstaIcon className={styles.styleIcon} />
      </Link>
      <Link to="https://www.linkedin.com/" className={styles.logoLink}>
        <LinkedinIcon className={styles.styleIconLink} />
      </Link>
    </div>
  );
}

export default SocialNetworks;

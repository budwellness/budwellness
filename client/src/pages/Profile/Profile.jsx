import React from 'react';
import styles from './Profile.module.scss';
import Container from '../../components/Container/Container';
import Menu from './Menu/Menu';
import FormData from './FormData/FormData';

function Profile() {
  return (
    <Container>
      <div className={styles.profileContainer}>
        <Menu />
        <FormData />
      </div>
    </Container>
  );
}
export default Profile;

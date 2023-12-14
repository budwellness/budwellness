import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Profile.module.scss';
import Container from '../../components/Container/Container';
import Menu from './Menu/Menu';
import FormData from './FormData/FormData';

function Profile() {
  return (
    <Container>
      <div className={styles.profileContainer}>
        <Menu />
        {/* <FormData /> */}
        <Outlet />
      </div>
    </Container>
  );
}

export default Profile;

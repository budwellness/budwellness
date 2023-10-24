import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PagePreviewHeader.module.scss';

function PagePreviewHeader({ title, text }) {
  //   const { title, text } = props;
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
      <div className={styles.link}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        />
      </div>
    </>
  );
}

export default PagePreviewHeader;

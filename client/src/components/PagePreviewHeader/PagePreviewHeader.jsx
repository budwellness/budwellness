import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PagePreviewHeader.module.scss';

function PagePreviewHeader({ title, text }) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
      <div className={styles.linkWpapper}>
        <NavLink to="/" className={styles.link}>
          Home &nbsp;/
        </NavLink>
        <span>{title}</span>
      </div>
    </>
  );
}

export default PagePreviewHeader;

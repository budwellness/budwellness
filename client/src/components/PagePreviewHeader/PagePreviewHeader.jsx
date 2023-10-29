import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
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

PagePreviewHeader.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

PagePreviewHeader.defaultProps = {
  title: 'Shop',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, blanditiis.',
};

export default PagePreviewHeader;

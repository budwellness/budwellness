import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import styles from './PagePreviewHeader.module.scss';

function PagePreviewHeader({ title, text }) {
  return (
    <>
      <div className={styles.wrapper}>
        <Container>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>{text}</p>
        </Container>
      </div>
      <div className={styles.linkWpapper}>
        <Container>
          <NavLink to="/" className={styles.link}>
            Home &nbsp;/
          </NavLink>
          <span className={styles.span}>{title}</span>
        </Container>
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

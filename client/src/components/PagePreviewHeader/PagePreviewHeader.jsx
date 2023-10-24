import React from 'react';
import styles from './PagePreviewHeader.module.scss';

function PagePreviewHeader({ title, text }) {
  //   const { title, text } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}

export default PagePreviewHeader;

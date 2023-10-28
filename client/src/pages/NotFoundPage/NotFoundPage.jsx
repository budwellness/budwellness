import React from 'react';
import PagePreviewHeader from '../../components/PagePreviewHeader/PagePreviewHeader';
import Button from '../../components/Button/Button';
import styles from './NotFoundPage.module.scss';

function NotFoundPage() {
  return (
    <>
      <PagePreviewHeader
        title="Error Page"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, blanditiis."
      />
      <div className={styles.wrapper}>
        <img src="./images/404.webp" alt="Error" className={styles.errorImg} />
        <div className={styles.errorMain}>
          <h2 className={styles.title}>Page not Found</h2>
          <p className={styles.text}>
            <span>The page you are looking for doesn't exist.</span>
            <span>Looks like you are in the wrong place.</span>
            <span>Let us guide you back!</span>
          </p>
          <Button
            type="button"
            text="Back to Home Page"
            className="orangeBtn"
            onClick={() => {}}
          />
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;

import React from 'react';
import { Link } from 'react-router-dom';

// import LogoIcon from '../Header/icons/LogoIcon';
import FaceBookIcon from '../UI/FaceBookIcon';
import InstaIcon from '../UI/InstaIcon';
import TwitterIcon from '../UI/TwitterIcon';
import WhatsAppIcon from '../UI/WhatsAppIcon';
import styles from './Footer.module.scss';
import PhoneIcon from '../UI/PhoneIcon';
import LocationIcon from '../UI/LocationIcon';
import ClockIcon from '../UI/ClockIcon';
import Container from '../Container/Container';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__container}>
          <div className={styles.footer__content}>
            <div className={styles.about}>
              <Link to="/" className={styles.about__logoLink}>
                {/* <LogoIcon /> */}
                <span className={styles.about__logoTitle}>Bud</span>
                <span
                  className={`${styles.about__accentColor} ${styles.about__logoTitle}`}
                >
                  Wellness
                </span>
              </Link>
              <p className={styles.about__desc}>
                Seeds of Change is a multifaceted exploration of the cannabis
                industry and social justice.
              </p>
              <ul className={styles.about__list}>
                <li>
                  <a href="https://www.facebook.com/">
                    <span className={styles.visuallyHidden}>Facebook</span>
                    <FaceBookIcon fill="#efc368" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <span className={styles.visuallyHidden}>Instagram</span>
                    <InstaIcon fill="#efc368" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <span className={styles.visuallyHidden}>Twitter</span>
                    <TwitterIcon fill="#efc368" />
                  </a>
                </li>
                <li>
                  <a href="https://www.whatsapp.com/">
                    <span className={styles.visuallyHidden}>WhatsApp</span>
                    <WhatsAppIcon fill="#efc368" />
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.contacts}>
              <h4 className={styles.subtitle}>Contacts information</h4>
              <ul className={styles.contacts__list}>
                <li className={styles.contacts__item}>
                  <PhoneIcon className={styles.phoneImgFill} />
                  <div className={styles.contacts__desc}>
                    <a
                      className={styles.contacts__link}
                      href="tel:+380555555555"
                    >
                      +380-55-555-55-55
                    </a>
                    <a
                      className={styles.contacts__link}
                      href="tel:+380555555555"
                    >
                      +380-55-555-55-55
                    </a>
                  </div>
                </li>
                <li className={styles.contacts__item}>
                  <LocationIcon className={styles.locationImgFill} />
                  <div className={styles.contacts__desc}>
                    <p className={styles.contacts__link}>304 E 62nd St</p>
                    <p className={styles.contacts__link}>New York</p>
                  </div>
                </li>
                <li className={styles.contacts__item}>
                  <ClockIcon className={styles.clockImgFill} />
                  <div className={styles.contacts__desc}>
                    <span className={styles.contacts__link}>
                      9:00 am to 5:00 pm
                    </span>
                    <span className={styles.contacts__link}>
                      Monday to Saturday
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.shop}>
              <h4 className={styles.subtitle}>Shop Products</h4>
              <ul className={styles.shop__list}>
                <Link to="/products/Flowers" className={styles.shop__link}>Flowers</Link>
                <Link to="/products/Oils" className={styles.shop__link}>Oils</Link>
                <Link to="/products/Edible" className={styles.shop__link}>Edible</Link>
                <Link to="/products/Pre-Rolls" className={styles.shop__link}>Pre-Rolls</Link>
                <Link to="/products/Beverage" className={styles.shop__link}>Beverage</Link>
                <Link to="/products/Seeds" className={styles.shop__link}>Seeds</Link>
              </ul>
            </div>
            <div className={styles.instagram}>
              <h4 className={styles.subtitle}>Instagram</h4>
              <ul className={styles.instagram__list}>
                <li>
                  {' '}
                  <a href="https://www.instagram.com/">
                    {' '}
                    <img
                      className={styles.instagram__instaImage}
                      src="/images/footer-insta1.jpeg"
                      alt="instagram"
                    />
                  </a>
                </li>
                <li>
                  {' '}
                  <a href="https://www.instagram.com/">
                    {' '}
                    <img
                      className={styles.instagram__instaImage}
                      src="/images/footer-insta2.webp"
                      alt="instagram"
                    />
                  </a>
                </li>
                <li>
                  {' '}
                  <a href="https://www.instagram.com/">
                    {' '}
                    <img
                      className={styles.instagram__instaImage}
                      src="/images/footer-insta3.webp"
                      alt="instagram"
                    />
                  </a>
                </li>
                <li>
                  {' '}
                  <a href="https://www.instagram.com/">
                    {' '}
                    <img
                      className={styles.instagram__instaImage}
                      src="/images/footer-insta4.webp"
                      alt="instagram"
                    />
                  </a>
                </li>
                <li>
                  {' '}
                  <a href="https://www.instagram.com/">
                    {' '}
                    <img
                      className={styles.instagram__instaImage}
                      src="/images/footer-insta5.webp"
                      alt="instagram"
                    />
                  </a>
                </li>
                <li>
                  {' '}
                  <a href="https://www.instagram.com/">
                    {' '}
                    <img
                      className={styles.instagram__instaImage}
                      src="/images/footer-insta6.webp"
                      alt="instagram"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

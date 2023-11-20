/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import PagePreviewHeader from '../../components/PagePreviewHeader/PagePreviewHeader';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import PopularProducts from '../../components/PopularProducts/PopularProducts';
import styles from './ContactPage.module.scss';
import PhoneIcon from '../../components/UI/PhoneIcon';
import LocationIcon from '../../components/UI/LocationIcon';
import MessageIcon from '../../components/UI/MessageIcon';
import FaceBookIcon from '../../components/UI/FaceBookIcon';
import InstaIcon from '../../components/UI/InstaIcon';
import TwitterIcon from '../../components/UI/TwitterIcon';
import WhatsAppIcon from '../../components/UI/WhatsAppIcon';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

function ContactPage() {
  return (
    <>
      <PagePreviewHeader
        title="Our Contacts"
        text="We are always in touch with you"
      />
      <Container>
        <div className={styles.container}>
          <div className={styles.container__contentForm}>
            <h2 className={styles.title}>Have any Questions?</h2>
            <p className={styles.description}>
              We are here to provide answers and assistance. If you have any
              queries or uncertainties, feel free to reach out to us.
            </p>

            <Formik initialValues={initialValues} onSubmit={() => {}}>
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <div className={styles.form}>
                    <label htmlFor="name" className={styles.form__subtitle}>
                      Your Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className={styles.form__message}
                    />
                    <ErrorMessage name="name" component="div" />
                  </div>

                  <div className={styles.form}>
                    <label htmlFor="email" className={styles.form__subtitle}>
                      Your Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      className={styles.form__message}
                    />
                    <ErrorMessage name="email" component="div" />
                  </div>

                  <div className={styles.form}>
                    <label htmlFor="message" className={styles.form__subtitle}>
                      Message
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      placeholder="Type Your Message"
                      className={styles.form__messageText}
                    />
                    <ErrorMessage name="message" component="div" />
                  </div>

                  <Button
                    type="submit"
                    text="Send a Message"
                    className="orangeBtn"
                  />
                </Form>
              )}
            </Formik>
          </div>
          <div className={styles.container__content}>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056596.3992083236!2d-76.35384261862308!3d41.57016611795026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259c45d0398a7%3A0x290436033fa05c6e!2sQueen%20Cannabis%20NYC%20Marijuana%20Weed%20Dispensary!5e0!3m2!1sru!2sua!4v1699489211731!5m2!1sru!2sua"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.map}
              />
            </div>
            <ul className={styles.list}>
              <li className={styles.list__item}>
                <LocationIcon className={styles.locationImgFill} />
                <div className={styles.list__desc}>
                  <p className={styles.list__link}>304 E 62nd St</p>
                  <p className={styles.list__link}>New York</p>
                </div>
              </li>
              <li className={styles.list__item}>
                <PhoneIcon className={styles.phoneImgFill} />
                <div className={styles.list__desc}>
                  <a className={styles.list__link} href="tel:+380555555555">
                    +380-55-555-55-55
                  </a>
                  <a className={styles.list__link} href="tel:+380555555555">
                    +380-55-555-55-55
                  </a>
                </div>
              </li>
              <li className={styles.list__item}>
                <MessageIcon className={styles.messageImgFill} />
                <div className={styles.list__desc}>
                  <a
                    className={styles.list__link}
                    href="mailto:example@gmail.com"
                  >
                    budwellness@gmail.com
                  </a>
                  <a
                    className={styles.list__link}
                    href="mailto:example@ukr.net"
                  >
                    budwellness@ukr.net
                  </a>
                </div>
              </li>
            </ul>
            <ul className={styles.socialList}>
              <li>
                <a href="https://www.facebook.com/">
                  <span className={styles.visuallyHidden}>Facebook</span>
                  <FaceBookIcon fill="#214842" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <span className={styles.visuallyHidden}>Instagram</span>
                  <InstaIcon fill="#214842" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <span className={styles.visuallyHidden}>Twitter</span>
                  <TwitterIcon fill="#214842" />
                </a>
              </li>
              <li>
                <a href="https://www.whatsapp.com/">
                  <span className={styles.visuallyHidden}>WhatsApp</span>
                  <WhatsAppIcon fill="#214842" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <PopularProducts />
      </Container>
    </>
  );
}

export default ContactPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  EffectFade,
  Pagination,
  Autoplay,
  Controller,
} from 'swiper/core';
import Container from '../Container/Container';
import Button from '../Button/Button';
import PhoneIcon from '../UI/PhoneIcon';
import DoneIcon from '../UI/DoneIcon';
import styles from './Carousel.module.scss';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([EffectFade, Pagination, Autoplay, Controller]);

function Carousel() {
  const navigate = useNavigate();

  const images = [
    {
      src: './images/hero01.png',
      alt: 'Image 1',
    },
    {
      src: './images/hero02.png',
      alt: 'Image 2',
    },
    {
      src: './images/hero03.png',
      alt: 'Image 3',
    },
  ];

  const pagination = {
    clickable: true,
    bulletClass: styles.singleBullet,
    bulletActiveClass: styles.activeBullet,
    renderBullet(index, className) {
      return `<span class="${className}">0${index + 1}</span>`;
    },
  };
  return (
    <div className={styles.heroWrrap}>
      <Container>
        <div className={styles.hero}>
          <div className={styles.staticContainer}>
            <h1 className={styles.heroTitle}>
              Highest Quality Marijuana Seeds
            </h1>
            <p className={styles.staticText}>
              “Seeds of Change” is a multifaceted exploration of the cannabis
              industry and social justice. We’re on a mission to strengthen our
              industry through equity, and unlock economic empowerment. We will
              lead with, and be led by, justice for all
            </p>
            <Button
              type="button"
              text="Our Products"
              className="orangeBtn"
              onClick={() => {
                navigate('/shop');
              }}
            />
            <p className={styles.contactsMessage}>
              Our support team is available 24/7 to resolve any product issues
            </p>

            <div className={styles.contactInfo}>
              <span className={styles.phoneImg}>
                <PhoneIcon
                  className={styles.phoneImgFill}
                  fill="$secondary-green"
                />
              </span>
              <div className={styles.phoneNumText}>
                <span className={styles.tel}>Phone number</span>
                <a href="tel: +38(068)-548-46-98" className={styles.linkTel}>
                  +38(068)-548-46-98
                </a>
              </div>
            </div>
          </div>
          <div className={styles.dinamicContainer}>
            <Swiper
              modules={[EffectFade, Autoplay, Controller]}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              effect="fade"
              fadeEffect={{ crossFade: true }}
            >
              {images.map((image) => (
                <SwiperSlide key={image.src}>
                  <img
                    width={400}
                    className={styles.heroImg}
                    src={image.src}
                    alt={image.alt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              modules={[EffectFade, Autoplay, Pagination, Controller]}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              pagination={pagination}
            >
              <SwiperSlide>
                <div className={styles.paginationWrap}>
                  <h2 className={styles.title}>Purple Haze</h2>
                  <p className={styles.info}>
                    This sweet strain will infuses you with an invigorating
                    euphoria perfect for outdoor activities and social
                    gatherings
                  </p>
                  <ul className={styles.list}>
                    <div className={styles.link}>
                      <span className={styles.doneImg}>
                        <DoneIcon className={styles.doneImgFill} />
                      </span>
                      <li>Sativa-Dominant</li>
                    </div>
                    <div className={styles.link}>
                      <span className={styles.doneImg}>
                        <DoneIcon className={styles.doneImgFill} />
                      </span>
                      <li>THC 110.0-160.0mg/g</li>
                    </div>
                    <div className={styles.link}>
                      <span className={styles.doneImg}>
                        <DoneIcon className={styles.doneImgFill} />
                      </span>
                      <li>CBD 0.0-1.0mg/g</li>
                    </div>
                  </ul>
                  <p className={styles.aboutProduct}>About Product</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.paginationWrap}>
                  <h2 className={styles.title}>Sour Diesel</h2>
                  <p className={styles.info}>
                    This strain features a pungent smells like diesel. It helps
                    to relieve symptoms associated with depression, pain, and
                    stress
                  </p>
                  <ul className={styles.list}>
                    <div className={styles.link}>
                      <span className={styles.doneImg}>
                        <DoneIcon className={styles.doneImgFill} />
                      </span>
                      <li>Sativa-Dominant</li>
                    </div>
                    <div className={styles.link}>
                      <span className={styles.doneImg}>
                        <DoneIcon className={styles.doneImgFill} />
                      </span>
                      <li>THC 160.0-190.0mg/g</li>
                    </div>
                    <div className={styles.link}>
                      <span className={styles.doneImg}>
                        <DoneIcon className={styles.doneImgFill} />
                      </span>
                      <li>CBD 0.0-2.0mg/g</li>
                    </div>
                  </ul>
                  <p className={styles.aboutProduct}>About Product</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.paginationWrap}>
                  <h2 className={styles.title}>Northern Lights</h2>
                  <p className={styles.info}>
                    It relaxing muscles and easing the mind, help relieve
                    symptoms associated with depression, stress, pain and
                    insomnia
                  </p>
                  <ul className={styles.list}>
                    <div className={styles.link}>
                      <span className={styles.doneImg}>
                        <DoneIcon className={styles.doneImgFill} />
                      </span>
                      <li>Indica-Dominant</li>
                    </div>
                    <div className={styles.link}>
                      <span className={styles.doneImg}>
                        <DoneIcon className={styles.doneImgFill} />
                      </span>
                      <li>THC 170.0-180.0mg/g</li>
                    </div>
                    <div className={styles.link}>
                      <span className={styles.doneImg}>
                        <DoneIcon className={styles.doneImgFill} />
                      </span>
                      <li>CBD 0.0-1.0mg/g</li>
                    </div>
                  </ul>
                  <p className={styles.aboutProduct}>About Product</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Carousel;

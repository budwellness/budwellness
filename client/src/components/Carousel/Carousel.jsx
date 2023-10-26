import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import Button from '../Button/Button';
import phone from '../../assets/icons/phone-svg.svg';
import done from '../../assets/icons/done-svg.svg';
import styles from './Carousel.module.scss';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

function Carousel() {
  const images = [
    {
      src: './images/hero01.webp',
      alt: 'Image 1',
    },
    {
      src: './images/hero02.webp',
      alt: 'Image 2',
    },
    {
      src: './images/hero03.webp',
      alt: 'Image 3',
    },
  ];

  const pagination = {
    clickable: true,
    // el: styles.pagination,
    bulletClass: styles.singleBullet,
    bulletActiveClass: styles.activeBullet,
    renderBullet(index, className) {
      return `<span class="${className}">0${index + 1}</span>`;
    },
    // type: 'bullets',
  };

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.staticContainer}>
          <h1 className={styles.heroTitle}>Highest Quality Marijuana Seeds</h1>
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
            // className="whiteBtn"
            onClick={() => {}}
          />
          {/* <div className={styles.contactInfo}> */}
          <p className={styles.contactsMessage}>
            Our support team is available 24/7 to resolve any product issues
          </p>

          <div className={styles.contactInfo}>
            <img className={styles.phoneImg} src={phone} alt="phone" />
            <div className={styles.phoneNumText}>
              <span>Phone number</span>
              <a href="+38(068)-548-46-98" className={styles.linkTel}>
                +38(068)-548-46-98
              </a>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className={styles.dinamicContainer}>
          {/* <div className={styles.heroImgSwiper}> */}
          <Swiper
            modules={[EffectFade, Autoplay]}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            // className={styles.heroImgSwiper}
          >
            {images.map((image) => (
              <SwiperSlide key={image.src}>
                <img
                  className={styles.heroImg}
                  src={image.src}
                  alt={image.alt}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* </div> */}

          <Swiper
            modules={[EffectFade, Autoplay, Pagination]}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            pagination={pagination}
            breakpoints={{
              576: {
                // direction: 'vertical',
              },
            }}
            // className={styles.heroImgSwiper}
          >
            <SwiperSlide>
              <div className={styles.paginationWrap}>
                <h2 className={styles.title}>Purple Hawaiian Haze</h2>
                <p className={styles.info}>
                  This sweet strain will infuses you with an invigorating
                  euphoria perfect for outdoor activities and social gatherings
                </p>
                <ul className={styles.list}>
                  <div className={styles.link}>
                    <img className={styles.doneImg} src={done} alt="done" />
                    <li>Sativa-Dominant</li>
                  </div>
                  <div className={styles.link}>
                    <img className={styles.doneImg} src={done} alt="done" />
                    <li>THC 110.0-160.0mg/g</li>
                  </div>
                  <div className={styles.link}>
                    <img className={styles.doneImg} src={done} alt="done" />
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
                  This strain features a pungent flavor profile that smells like
                  diesel. It helps to help relieve symptoms associated with
                  depression, pain, and stress
                </p>
                <ul className={styles.list}>
                  <div className={styles.link}>
                    <img className={styles.doneImg} src={done} alt="done" />
                    <li>Sativa-Dominant</li>
                  </div>
                  <div className={styles.link}>
                    <img className={styles.doneImg} src={done} alt="done" />
                    <li>THC 160.0-190.0mg/g</li>
                  </div>
                  <div className={styles.link}>
                    <img className={styles.doneImg} src={done} alt="done" />
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
                  It relaxing muscles and easing the mind, help relieve symptoms
                  associated with depression, stress, pain and insomnia
                </p>
                <ul className={styles.list}>
                  <div className={styles.link}>
                    <img className={styles.doneImg} src={done} alt="done" />
                    <li>Indica-Dominant</li>
                  </div>
                  <div className={styles.link}>
                    <img className={styles.doneImg} src={done} alt="done" />
                    <li>THC 170.0-180.0mg/g</li>
                  </div>
                  <div className={styles.link}>
                    <img className={styles.doneImg} src={done} alt="done" />
                    <li>CBD 0.0-1.0mg/g</li>
                  </div>
                </ul>
                <p className={styles.aboutProduct}>About Product</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div />
    </>
  );
}

export default Carousel;

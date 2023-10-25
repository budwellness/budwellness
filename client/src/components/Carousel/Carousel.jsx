import React, { useState, useEffect } from 'react';
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
      text: {
        title: 'Purple Hawaiian Haze',
        info: 'Nisl vel pretium lectus quam id leo in vitae. Pellentesque adipiscing commodo elit at imperdiet',
        num: '01',
      },
    },
    {
      src: './images/hero02.webp',
      alt: 'Image 2',
      text: {
        title: 'Sour Diesel',
        info: 'Pellentesque adipiscing commodo elit at imperdiet. Nisl vel pretium lectus quam id leo in vitae',
        num: '02',
      },
    },
    {
      src: './images/hero03.webp',
      alt: 'Image 3',
      text: {
        title: 'Northern Lights',
        info: 'Pellentesque adipiscing commodo elit at imperdiet. Nisl vel pretium lectus quam id leo in vitae',
        num: '03',
      },
    },
  ];

  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Змінюємо індекс слайду кожні 3 секунди
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 3000);

  //   return () => {
  //     // Очищаємо інтервал при розмонтажі компонента
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.staticContainer}>
          <h1 className={styles.heroTitle}>Highest Quality Marijuana Seeds</h1>
          <p className={styles.staticText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            reprehenderit aliquid eaque eveniet! Delectus explicabo dignissimos
            in quibusdam sunt. Magni quod distinctio blanditiis impedit maiores
            quae dolore veniam corporis ullam!
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
          {/* <div className={styles.imgWrapper}>
            <img
              className={styles.heroImg}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
            />
          </div>
          <div className={styles.infoProductContainer}>
            <h2 className={styles.title}>{images[currentIndex].text.title}</h2>
            <p className={styles.info}>{images[currentIndex].text.info}</p>

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
          <div className={styles.textImgwrapper}>
            <p className={styles.textImg}>{images[currentIndex].text.num}</p>
          </div> */}

          <Swiper
            modules={[EffectFade, Pagination, Autoplay]}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            // pagination={{
            //   clickable: true,
            // }}
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
        </div>
      </div>
      <div />
    </>
  );
}

export default Carousel;

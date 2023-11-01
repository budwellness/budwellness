import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Thumbs } from 'swiper/core';
import SwiperCore, { Navigation, Thumbs } from 'swiper/core';
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Container from '../../components/Container/Container';
import PagePreviewHeader from '../../components/PagePreviewHeader/PagePreviewHeader';
import Button from '../../components/Button/Button';
import { useGetAllProductsQuery } from '../../store/serverResponse/fetchLocalJson';

import styles from './SingleProductPage.module.scss';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';

SwiperCore.use([Navigation, Thumbs]);

function SingleProductPage() {
  const { data, error } = useGetAllProductsQuery();
  console.log(data);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <PagePreviewHeader
        title="Single Product"
        text="Discover nature's remedy for peace and balance"
      />
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.swiperWrap}>
            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              className={styles.myMainSwiper}
            >
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={2}
              freeMode={true}
              watchSlidesVisibility={true}
              watchSlidesProgress={true}
              className={styles.mySwiper}
            >
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SingleProductPage;

/* eslint-disable */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs } from 'swiper/core';
import Container from '../../components/Container/Container';
import PagePreviewHeader from '../../components/PagePreviewHeader/PagePreviewHeader';
import Button from '../../components/Button/Button';
import PopularProducts from '../../components/PopularProducts/PopularProducts';
import { useGetAllProductsQuery } from '../../store/serverResponse/fetchLocalJson';
import ArrowPrevIcon from '../../components/UI/ArrowPrevIcon';
import ArrowNextIcon from '../../components/UI/ArrowNextIcon';
import FavouriteIcon from '../../components/UI/FavouriteIcon';
import MinusIcon from '../../components/UI/MinusIcon';
import PlusIcon from '../../components/UI/PlusIcon';

import styles from './SingleProductPage.module.scss';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation, Thumbs]);

const mockDataProduct = {
  enabled: true,
  imageUrls: [
    'https://ca.tokyosmoke.com/cdn/shop/products/e96a18b5991250526e86e1ead709a109_1000x.png?v=1599148085',
    'https://static.wixstatic.com/media/645e3f_38fbb2f262644fb3a766446abd5aeaad~mv2.webp',
    'https://static.wixstatic.com/media/645e3f_348a1920cbfc402986b118677e654431~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/645e3f_348a1920cbfc402986b118677e654431~mv2.png',
    'https://ocs.ca/cdn/shop/products/00851653000172_00_compress_330154_1024x1024.jpg?v=1694408215%22%20alt=%22Chocolate%20Brownies%20-%20%22',
    'https://ocs.ca/cdn/shop/products/00851653000172_01_compress_330154_e87fa6ae-8422-4ea3-aa6c-bd79df3dc07c_1024x1024.jpg?v=1694408215%22%20alt=%22Chocolate%20Brownies%20-%20%22',
    'https://images.dutchie.com/f0c735369143fdfbe99b17f82f827484?auto=format&fit=fill&fill=solid&ixlib=react-9.5.4&w=344&h=330&dpr=1&q=75',
    'https://nuleafnaturals.com/wp-content/uploads/2020/07/NLN_2021_CBD_Oil_Human_900_800px.jpg',
    'https://nuleafnaturals.com/wp-content/uploads/2020/07/NuLeaf-Oil-900mg-box-bottle.jpg',
    'https://nuleafnaturals.com/wp-content/uploads/2020/07/CL-2DH-NuLeaf-Bottle-Label-Human-15mL-1-24-22_web_sup_facts.png',
    'https://images.prom.ua/4209399693_w640_h640_4209399693.jpg',
    'https://images.prom.ua/4209399692_w640_h640_4209399692.jpg',
    'https://images.prom.ua/4209399694_w640_h640_4209399694.jpg',
    'https://ocs.ca/cdn/shop/products/00688083011092_a1cc_compressed_110016_1024x1024.jpg?v=1697463553%22',
    'https://w7a7p5v9.rocketcdn.me/wp-content/uploads/2023/05/doja-ucorn-cake-review-cannabis-photos-4-merry-jade-1024x1024.webp',
    'https://w7a7p5v9.rocketcdn.me/wp-content/uploads/2023/05/doja-ucorn-cake-review-cannabis-photos-5-merry-jade-1024x1024.webp',
    'https://www.bulkbuddy.co/wp-content/uploads/2023/10/buy-pink-diablo-strain-350x420.jpg',
    'https://www.bulkbuddy.co/wp-content/uploads/2023/10/buy-pink-diablo-weed-350x420.jpg',
    'https://kamikazi.cc/wp-content/uploads/2021/05/PINK-DIABLO-2KAMIKAZI-2_WEED-DELIVERY-TORONTO.jpg',
    'https://img.sensiseeds.com/en/research/purple-cookie-kush-feminized-xl.png',
    'https://img.sensiseeds.com/en/research/purple-cookie-kush-feminized-xl-4.png',
    'https://img.sensiseeds.com/en/research/purple-cookie-kush-feminized-xl-5.png',
    'https://img.sensiseeds.com/en/feminized-seeds/whitelabel/pure-power-plant-feminised-xl.png',
    'https://img.sensiseeds.com/en/feminized-seeds/whitelabel/pure-power-plant-feminised-xl-2.png',
    'https://img.sensiseeds.com/en/feminized-seeds/whitelabel/pure-power-plant-feminised-xl-3.png',
    'https://ca.tokyosmoke.com/cdn/shop/products/Deepspace_1000x.png?v=1594412862',
    'https://www.deepspace.com/content/dam/deep-space/OG_Cola_Image_1.png',
    'https://images.dutchie.com/bda075590ceaa7d8990f961a52f0aef7?auto=format&fit=fill&fill=solid&fillColor=%23fff&ixlib=react-9.0.2&w=1446',
  ],
  quantity: 6,
  _id: 1,
  rate: 4.4,
  category: 'Edible',
  name: 'Bhang Milk Chocolate',
  currentPrice: 25.0,
  previousPrice: 25.0,
  plantType: 'Sativa',
  thc: 10,
  cbd: 1,
  effects: ['Giggly', 'Relaxed', 'Sleepy'],
  tags: ['Cannabis', 'edible'],
  itemNo: 867443,
  description: {
    short:
      'Bhang® Milk Chocolate starts with sustainably-sourced and fair-trade cacao and is Powered by INDIVA™. Produced in Indiva’s state-of-the-art facility based in London, Ontario, and backed by a fifth generation chocolatier, Bhang® MilkChocolate offers a cannabis-free flavour that offer just the right hint of sweetness.',
    completion:
      'Cannabis-infused edible products combine cannabis distillate with premium ingredients. They offer the same delayed onset time and smoke-free experience of capsules and oils, packaged within a tasty snack..',
  },
  reviews: [
    {
      fullName: 'Bhang Milk Chocolate',
      reviewRating: 5,
      reviewDate: 'September 30, 2021 at 9:52 am',
      feedback:
        'Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.',
      benefit: 'In nulla posuere sollicitudin aliquam ultrices.',
      disadvantages:
        'Viverra aliquet eget sit amet tellus cras adipiscing enim.',
    },
    {
      fullName: 'Charles Sanchez',
      reviewRating: 5,
      reviewDate: 'October 1, 2021 at 11:52 am',
      reviewText:
        'I usually only eat a square and that’s good enough for me. It’s very potent',
      feedback:
        'I actually take a half of one cause the first time I took a full one and I felt a little too good lol but it’s very manageable with the half dose. Then I can still get stuff done and go about my day but I just enjoy it a little more.',
      benefit: '',
      disadvantages: '',
    },
  ],
  additionalInformation: {
    ingredients:
      'MILK CHOCOLATE (SUGAR, HYDROGENATED PALM KERNEL OIL, NONFAT DRY MILK, COCOA PROCESSED WITH ALKALI, SORBITAN MONOSTEARATE, LACTIC ACID ESTERS OF MONO AND DIGLYCERIDES WITH CITRIC ACID TO PROTECT FLAVOR, SOY LECITHIN (AN EMULSIFIER), ARTIFICIAL FLAVOR), MCT OIL, HEMP EXTRACT',
    flavors: 'MAY CONTAIN PEANUTS, TREE NUTS, MILK CHOCOLATE',
    recommendedUsage:
      'Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more.',
  },
};

function SingleProductPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [active, setActive] = useState(false);

  let count = 1;

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
              loop
              spaceBetween={10}
              navigation={{
                nextEl: '.next-button',
                prevEl: '.prev-button',
              }}
              thumbs={{ swiper: thumbsSwiper }}
              className={styles.myMainSwiper}
            >
              {mockDataProduct.imageUrls.map((image, index) => (
                <SwiperSlide key={index}>
                  <picture key={image}>
                    <img
                      className={styles.singleImg}
                      src={image}
                      alt="product"
                    />
                  </picture>
                </SwiperSlide>
              ))}
              <div className={`${styles.nextBtn} next-button`}>
                <ArrowNextIcon className={styles.arrowNext} />
              </div>
              <div className={`${styles.prevBtn} prev-button`}>
                <ArrowPrevIcon className={styles.arrowPrev} />
              </div>
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              loop
              spaceBetween={10}
              slidesPerView={2}
              freeMode
              watchSlidesVisibility
              watchSlidesProgress
              className={styles.mySwiper}
            >
              {mockDataProduct.imageUrls.map((image, index) => (
                <SwiperSlide key={index} className={styles['swiperSlide']}>
                  <picture key={image}>
                    <img
                      className={styles.singleImg}
                      src={image}
                      alt="product"
                    />
                  </picture>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.title_action}>
              <h1 className={styles.title}>{mockDataProduct.name}</h1>
              {/* <button className={styles.action}>
                <FavouriteIcon className={styles.styleIcon} />
              </button> */}
            </div>

            <div className={styles.countWrapper}>
              <button className={styles.countBtn}>
                <MinusIcon className={styles.countIcon} />
              </button>
              <span>{count}</span>
              <button className={styles.countBtn}>
                <PlusIcon className={styles.countIcon} />
              </button>
            </div>
          </div>
          {/* <PopularProducts /> */}
        </Container>
      </div>
    </>
  );
}

export default SingleProductPage;

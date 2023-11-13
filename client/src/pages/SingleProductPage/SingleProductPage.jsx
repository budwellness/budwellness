/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '../../components/Container/Container';
import PagePreviewHeader from '../../components/PagePreviewHeader/PagePreviewHeader';
// import ButtonCount from '../../components/ButtonCount/ButtonCount';
import RatingStars from '../../components/RatingStars/RatingStars';
import Button from '../../components/Button/Button';
import PopularProducts from '../../components/PopularProducts/PopularProducts';
import SingleProductSwiper from '../../components/SingleProductSwiper/SingleProductSwiper';
// import FormikField from './FormikField/FormikField';
import Tabs from './Tabs/Tabs';

import FavouriteIcon from '../../components/UI/FavouriteIcon';
// import ArrowDownIcon from '../../components/UI/ArrowDownIcon';

import styles from './SingleProductPage.module.scss';

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
  const navigate = useNavigate();

  // const [toggle, setToggle] = useState(1);

  // function updateToggle(index) {
  //   if (toggle === index) {
  //     setToggle(0);
  //   } else {
  //     setToggle(index);
  //   }
  // }

  return (
    <>
      <PagePreviewHeader
        title="Single Product"
        text="Discover nature's remedy for peace and balance"
      />
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.swiperWrap}>
            <SingleProductSwiper />
          </div>

          <div className={styles.infoWrapp}>
            <div className={styles.title_action}>
              <h1 className={styles.title}>{mockDataProduct.name}</h1>
              <button className={styles.action} type="button">
                <FavouriteIcon className={styles.styleIcon} />
              </button>
            </div>
            <div className={styles.ratingWrapper}>
              <RatingStars rate={mockDataProduct.rate} />
              <p className={styles.ratingText}>
                ({mockDataProduct.reviews.length} customer review
                <span className={styles.span}>s</span>)
              </p>
            </div>
            <p className={styles.descShort}>
              {mockDataProduct.description.short}
            </p>
            <p className={styles.price}>${mockDataProduct.currentPrice}</p>
            <div className={styles.buttonWrapper}>
              {/* <ButtonCount /> */}
              <Button
                type="button"
                text="Add to Cart"
                className="orangeBtn"
                onClick={() => {
                  navigate('/cart');
                }}
              />
            </div>
            <ul className={styles.infoLlist}>
              <li className={styles.item}>
                <span className={styles.property}>Category:</span>
                <span className={styles.value}>{mockDataProduct.category}</span>
              </li>
              <li className={styles.item}>
                <span className={styles.property}>Size:</span>
                <span className={styles.value}>30 ml</span>
                {/* тут має бути поле size */}
              </li>
              <li className={styles.item}>
                <span className={styles.property}>Plant Type:</span>
                <span className={styles.value}>
                  {mockDataProduct.plantType}
                </span>
              </li>
              <li className={styles.item}>
                <span className={styles.property}>THC:</span>
                <span className={styles.value}>
                  {mockDataProduct.thc}
                  mg/g
                </span>
              </li>
              <li className={styles.item}>
                <span className={styles.property}>CBD:</span>
                <span className={styles.value}>{mockDataProduct.cbd}%</span>
              </li>
              <li className={styles.item}>
                <span className={styles.property}>Effects:</span>
                <span className={styles.value}>
                  {mockDataProduct.effects.join(', ')}
                </span>
              </li>
              <li className={styles.item}>
                <span className={styles.property}>Tags:</span>
                <span className={styles.value}>
                  {mockDataProduct.tags.join(', ')}
                </span>
              </li>
              <li className={styles.item}>
                <span className={styles.property}>SKU:</span>
                <span className={styles.value}>{mockDataProduct.itemNo}</span>
              </li>
            </ul>
          </div>
        </div>
        {/* 
        <div className={styles.tabsWrapp}>
          <div className={styles.tabDesc}>
            <div
              className={
                toggle === 1
                  ? `${styles.tabTitleWrapp} ${styles.activeTabTitle}`
                  : styles.tabTitleWrapp
              }
              onClick={() => {
                updateToggle(1);
              }}
            >
              <h4 className={styles.tabTitle}>Description</h4>
              <ArrowDownIcon
                className={toggle === 1 ? styles.activeArrow : styles.arrow}
              />
            </div>
            <div
              className={toggle === 1 ? styles.showContent : styles.tabContent}
            >
              <p className={`${styles.text} ${styles.downAnimation}`}>
                {mockDataProduct.description.short} <br />
                <br />
                {mockDataProduct.description.completion}
              </p>
            </div>
          </div>

          <div className={styles.tabRev}>
            <div
              className={
                toggle === 2
                  ? `${styles.tabTitleWrapp} ${styles.activeTabTitle}`
                  : styles.tabTitleWrapp
              }
              onClick={() => {
                updateToggle(2);
              }}
            >
              <h4 className={styles.tabTitle}>
                Reviews({mockDataProduct.reviews.length})
              </h4>
              <ArrowDownIcon
                className={toggle === 2 ? styles.activeArrow : styles.arrow}
              />
            </div>
            <div
              className={toggle === 2 ? styles.showContent : styles.tabContent}
            >
              {mockDataProduct.reviews.map((review, index) => (
                <div
                  key={index}
                  className={`${styles.text} ${styles.downAnimation}`}
                >
                  <ul className={styles.reviewWrrap}>
                    <li className={styles.fullName}>{review.fullName}</li>
                    <li className={styles.reviewDate}>{review.reviewDate}</li>
                    <li>{review.feedback}</li>
                    {review.benefit && (
                      <li>
                        <span className={styles.span}>Benefits:</span>
                        <br />
                        {review.benefit}
                      </li>
                    )}
                    {review.disadvantages && (
                      <li>
                        <span className={styles.span}>Disadvantages:</span>
                        <br />
                        {review.disadvantages}
                      </li>
                    )}
                  </ul>
                  {index !== mockDataProduct.reviews.length - 1 && (
                    <hr className={styles.hrLine} />
                  )}{' '}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.tabAddInfo}>
            <div
              className={
                toggle === 3
                  ? `${styles.tabTitleWrapp} ${styles.activeTabTitle}`
                  : styles.tabTitleWrapp
              }
              onClick={() => {
                updateToggle(3);
              }}
            >
              <h4 className={styles.tabTitle}>Additional Information</h4>
              <ArrowDownIcon
                className={toggle === 3 ? styles.activeArrow : styles.arrow}
              />
            </div>
            <div
              className={toggle === 3 ? styles.showContent : styles.tabContent}
            >
              <table className={styles.table}>
                <tr className={styles.row}>
                  <td className={styles.rowTitle}>Ingredients:</td>
                  <td>{mockDataProduct.additionalInformation.ingredients}</td>
                </tr>
                <tr className={styles.row}>
                  <td className={styles.rowTitle}>Flavors:</td>
                  <td>{mockDataProduct.additionalInformation.flavors}</td>
                </tr>
                <tr className={styles.row}>
                  <td className={styles.rowTitle}>Recommended Usage:</td>
                  <td>
                    {mockDataProduct.additionalInformation.recommendedUsage}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div> */}

        <Tabs />

        {/* <div className={styles.tabsWrapp}>
          <div className={styles.title_content}>
            <div className={styles.titlesWrap}>
              <div
                className={
                  toggle === 1
                    ? `${styles.tabTitleWrapp} ${styles.activeTabTitle}`
                    : styles.tabTitleWrapp
                }
                onClick={() => {
                  updateToggle(1);
                }}
              >
                <h4 className={styles.tabTitle}>Description</h4>
                <ArrowDownIcon
                  className={toggle === 1 ? styles.activeArrow : styles.arrow}
                />
              </div>

              <div
                className={
                  toggle === 2
                    ? `${styles.tabTitleWrapp} ${styles.activeTabTitle}`
                    : styles.tabTitleWrapp
                }
                onClick={() => {
                  updateToggle(2);
                }}
              >
                <h4 className={styles.tabTitle}>
                  Reviews({mockDataProduct.reviews.length})
                </h4>
                <ArrowDownIcon
                  className={toggle === 2 ? styles.activeArrow : styles.arrow}
                />
              </div>
              <div
                className={
                  toggle === 3
                    ? `${styles.tabTitleWrapp} ${styles.activeTabTitle}`
                    : styles.tabTitleWrapp
                }
                onClick={() => {
                  updateToggle(3);
                }}
              >
                <h4 className={styles.tabTitle}>Additional Information</h4>
                <ArrowDownIcon
                  className={toggle === 3 ? styles.activeArrow : styles.arrow}
                />
              </div>
            </div>

            <hr className={styles.titlesWrapHr} />

            <div className={styles.contentsWrapp}>
              <div
                className={
                  toggle === 1 ? styles.showContent : styles.tabContent
                }
              >
                <p className={`${styles.text} ${styles.downAnimation}`}>
                  {mockDataProduct.description.short} <br />
                  <br />
                  {mockDataProduct.description.completion}
                </p>
              </div>

              <div
                className={
                  toggle === 2 ? styles.showContent : styles.tabContent
                }
              >
                {mockDataProduct.reviews.map((review, index) => (
                  <div
                    key={index}
                    className={`${styles.text} ${styles.downAnimation}`}
                  >
                    <ul className={styles.reviewWrrap}>
                      <li className={styles.fullName}>{review.fullName}</li>
                      <li className={styles.reviewDate}>{review.reviewDate}</li>
                      <li>{review.feedback}</li>
                      {review.benefit && (
                        <li>
                          <span className={styles.span}>Benefits:</span>
                          <br />
                          {review.benefit}
                        </li>
                      )}
                      {review.disadvantages && (
                        <li>
                          <span className={styles.span}>Disadvantages:</span>
                          <br />
                          {review.disadvantages}
                        </li>
                      )}
                    </ul> */}
        {/* {index !== mockDataProduct.reviews.length - 1 && (
                      <hr className={styles.hrLine} />
                    )}{' '} */}
        {/* <hr className={styles.hrLine} />
                  </div>
                ))}
                <div className={styles.formReview}>
                  <h4 className={styles.formTitle}>Add Review</h4>
                  <FormikField />
                </div>
              </div>

              <div
                className={
                  toggle === 3 ? styles.showContent : styles.tabContent
                }
              >
                <table className={`${styles.table} ${styles.downAnimation}`}>
                  <tr className={styles.row}>
                    <td className={styles.rowTitle}>Ingredients:</td>
                    <td>
                      {mockDataProduct.additionalInformation.ingredients.toLocaleLowerCase()}
                    </td>
                  </tr>
                  <tr className={styles.row}>
                    <td className={styles.rowTitle}>Flavors:</td>
                    <td>
                      {mockDataProduct.additionalInformation.flavors.toLocaleLowerCase()}
                    </td>
                  </tr>
                  <tr className={styles.row}>
                    <td className={styles.rowTitle}>Recommended Usage:</td>
                    <td>
                      {mockDataProduct.additionalInformation.recommendedUsage.toLocaleLowerCase()}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div> */}
        <PopularProducts />
      </Container>
    </>
  );
}

export default SingleProductPage;

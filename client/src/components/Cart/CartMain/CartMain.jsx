import React from 'react';

import CartList from './CartList/CartList';
import LinkUnderline from '../../LinkUnderline/LinkUnderline';
import Button from '../../Button/Button';

import styles from './CartMain.module.scss';

export default function CartMain() {
  const currentCart = [
    {
      _id: 'somethingId_1',
      cartQuantity: 5,
      product: {
        size: 30,
        sizeType: 'ml',
        enabled: true,
        imageUrls: [
          'https://ca.tokyosmoke.com/cdn/shop/products/e96a18b5991250526e86e1ead709a109_1000x.png?v=1599148085',
          'https://static.wixstatic.com/media/645e3f_38fbb2f262644fb3a766446abd5aeaad~mv2.webp',
          'https://static.wixstatic.com/media/645e3f_348a1920cbfc402986b118677e654431~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/645e3f_348a1920cbfc402986b118677e654431~mv2.png',
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
      },
    },
    {
      _id: 'somethingId_2',
      cartQuantity: 3,
      product: {
        size: 3.5,
        sizeType: 'g',
        enabled: true,
        imageUrls: [
          'https://ocs.ca/cdn/shop/products/00851653000172_00_compress_330154_1024x1024.jpg?v=1694408215%22%20alt=%22Chocolate%20Brownies%20-%20%22',
          'https://ocs.ca/cdn/shop/products/00851653000172_01_compress_330154_e87fa6ae-8422-4ea3-aa6c-bd79df3dc07c_1024x1024.jpg?v=1694408215%22%20alt=%22Chocolate%20Brownies%20-%20%22',
          'https://images.dutchie.com/f0c735369143fdfbe99b17f82f827484?auto=format&fit=fill&fill=solid&ixlib=react-9.5.4&w=344&h=330&dpr=1&q=75',
        ],
        quantity: 10,
        _id: 2,
        rate: 3.6,
        category: 'Edible',
        name: 'Chocolate Brownies by Olli',
        currentPrice: 7.0,
        previousPrice: 10.0,
        plantType: 'Hybrid',
        thc: 10,
        cbd: 5,
        effects: ['Giggly', 'Relaxed', 'Sleepy'],
        tags: ['Cannabis', 'edible'],
        itemNo: 192929,
        description: {
          short:
            'Olli’s Chocolate Brownies are the perfect blend between culinary and cannabis. Each package contains two small batch, nut-free brownies made for sharing. Each brownie contains 5 mg THC and 2.5 mg CBD, uses thoughtful ingredients and provides a chewy, soft and decadent chocolate flavour curated by Olli’s Michelin-starred trained Executive Chef.',
          completion:
            'Olli’s Chocolate Brownies are the perfect blend between culinary and cannabis. Each package contains two small batch, nut-free brownies made for sharing. Each brownie contains 5 mg THC and 2.5 mg CBD, uses thoughtful ingredients and provides a chewy, soft and decadent chocolate flavour curated by Olli’s Michelin-starred trained Executive Chef. Soft and chewy, small batch, bite-sized brownies with a decadent chocolate flavour. Nut-free.',
        },
        reviews: [
          {
            fullName: 'Richard Dully ',
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
            reviewImage: [
              'https://static.wixstatic.com/media/645e3f_38fbb2f262644fb3a766446abd5aeaad~mv2.webp',
              'https://ca.tokyosmoke.com/cdn/shop/products/e96a18b5991250526e86e1ead709a109_1000x.png?v=1599148085',
            ],
            benefit: '',
            disadvantages: '',
          },
        ],
        additionalInformation: {
          ingredients:
            'Sugars (sucrose, glucose syrup, fructose, dextrose, cultured (cane) sugar), Enriched wheat flour (Wheat), Canola oil, Liquid whole eggs (Egg), Cocoa powder, Water, Glycerin, Soy lecithin (Soy), Natural and artificial flavour, Salt, Xanthan gum, Rosemary extract, Ascorbic acid, Sunflower oil, Cannabis distillate',
          flavors: 'soft and decadent chocolate',
          recommendedUsage:
            'We recommend starting with half the cake and after an hour if the effect is not enough, add the second half.',
        },
      },
    },
  ];

  return (
    <div className={styles.cart_main}>
      <h3 className={styles.cart_mainHeader}>
        Products
        <span>{currentCart.length} Items</span>
      </h3>
      <CartList items={currentCart} />
      <div className={styles.cart_mainAction}>
        <LinkUnderline to="/products">Keep Shopping</LinkUnderline>
        <Button text="Update cart" className="whiteBtn" onClick={() => {}} />
      </div>
    </div>
  );
}
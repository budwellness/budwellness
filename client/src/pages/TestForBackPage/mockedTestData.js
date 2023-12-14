// MOCKED USER DATA:
export const userMockData = {
  loginOrEmail: 'customer@gmail.com',
  password: '1111111',
};

export const mockProductBud = {
  enabled: true,
  imageUrls: [
    'https://ca.tokyosmoke.com/cdn/shop/products/e96a18b5991250526e86e1ead709a109_1000x.png?v=1599148085',
    'https://static.wixstatic.com/media/645e3f_38fbb2f262644fb3a766446abd5aeaad~mv2.webp',
    'https://static.wixstatic.com/media/645e3f_348a1920cbfc402986b118677e654431~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/645e3f_348a1920cbfc402986b118677e654431~mv2.png',
  ],
  quantity: 6,
  rate: 4.4,
  categories: ' Edible',
  name: 'Bhang Milk Chocolate',
  currentPrice: 25,
  previousPrice: 0,
  sale: 0,
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
export const mockProductApiExample = {
  name: 'new product for testing purposes',
  currentPrice: 199.99,
  previousPrice: 250,
  categories: 'men',
  imageUrls: [
    'img/products/men/001.png',
    'img/products/men/002.png',
    'img/products/men/003.png',
    'img/products/men/004.png',
  ],
  quantity: 100,
  color: 'red',
  productUrl: '/men',
  brand: 'braaaand',
  myCustomParam: 'some string or json for custom param',
};

export const productsJSON = [
  {
    enabled: true,
    imageUrls: [
      '/images/milk_chocolate_1.png',
      '/images/milk_chocolate_2.png',
      '/images/milk_chocolate_3.png',
    ],
    quantity: 6,
    rate: 4.4,
    categories: 'Edible',
    name: 'Bhang Milk Chocolate',
    size: 50,
    sizeType: 'g',
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
      complection:
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
          'Viverra aliquet eget sit amet tellus cras adipiscing enim',
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
        'Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more',
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/chocolate_brownies_1.png',
      '/images/chocolate_brownies_2.png',
      '/images/chocolate_brownies_3.png',
    ],
    quantity: 10,
    rate: 4.6,
    categories: 'Edible',
    name: 'Chocolate Brownies by Olli',
    size: 30,
    sizeType: 'g',
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
      complection:
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
        'We recommend starting with half the cake and after an hour if the effect is not enough, add the second half',
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/spectrum_oil_1.png',
      '/images/spectrum_oil_2.png',
      '/images/spectrum_oil_3.png',
    ],
    quantity: 7,
    rate: 2.3,
    categories: 'Oils',
    name: 'Full Spectrum CBD Oil',
    size: 30,
    sizeType: 'ml',
    currentPrice: 88.0,
    previousPrice: 88.0,
    plantType: 'Hybrid',
    thc: 10,
    cbd: 10,
    effects: ['Anesthetic', 'Relaxed', 'Sleepy'],
    tags: ['Cannabis', 'oil'],
    itemNo: 333221,
    description: {
      short:
        'CBD oil is a whole-plant extract containing a full spectrum of naturally occurring synergistic cannabinoids and terpenes with a potency of 60mg/mL. NuLeaf Naturals suggests a starting dose of ten drops (30mg) daily or as needed.',
      complection:
        'This cannabis oil oral spray features a blend of hybrid strains with balanced THC-to-CBD ratios. Good wd. No extras. Our oils are made with cannabis extract and non-GMO, coconut-derived MCT oil that cannot be smoked or vapourized.',
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
        benefit: '',
        disadvantages: '',
      },
    ],
    additionalInformation: {
      ingredients: 'Full Spectrum Hemp Extract, Organic Virgin Hemp Seed Oil',
      flavors: 'Earthy and musky, piney and herbal',
      recommendedUsage:
        'We recommend starting with half the cake and after an hour if the effect is not enough, add the second half',
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/spectrum_oil_4.png',
      '/images/spectrum_oil_5.png',
      '/images/spectrum_oil_6.png',
    ],
    quantity: 13,
    rate: 1.7,
    categories: 'Oils',
    name: 'Medipharm Labs CBD50 Plus Formula',
    size: 30,
    sizeType: 'ml',
    currentPrice: 90.0,
    previousPrice: 100.0,
    plantType: 'Hybrid',
    thc: 10,
    cbd: 30,
    effects: ['Aroused', 'Euphoric', 'Giggly'],
    tags: ['Cannabis', 'oil'],
    itemNo: 887686,
    description: {
      short:
        'Papa & Barkley’s tinctures are vegan and fast-metabolizing, with a customizable dosage experience, carefully crafted with whole-plant extraction. Our solventless, chemical-free infusion process preserves the plant’s full spectrum of cannabinoids, terpenes, and phytonutrients for maximum therapeutic benefits.',
      complection:
        'Our 30:1 tincture is high in CBD and low in THC and is great for those looking to ease daily stress and discomfort. Best for all cannabis consumers, especially new ones as there will be little to no psychoactive effect. Crafted with only two ingredients, MCT Oil and cannabis oil, and can be felt within 15 minutes, make it a perfect natural solution for those seeking a quick-acting, easy-to-use cannabis solution to improve both body and mind. Papa & Barkley’s tinctures are vegan and fast-metabolizing, with a customizable dosage experience, carefully crafted with whole-plant extraction. Our solventless, chemical-free infusion process preserves the plant’s full spectrum of cannabinoids, terpenes, and phytonutrients for maximum therapeutic benefits.',
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
      ingredients: 'MCT Oil, Cannabis',
      flavors: 'Tree Nut (Coconut)',
      recommendedUsage:
        'Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more',
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/doja_unicorn_1.png',
      '/images/doja_unicorn_2.png',
      '/images/doja_unicorn_3.png',
    ],
    quantity: 12,
    rate: 3.8,
    categories: 'Flowers',
    name: 'Doja Unicorn Cake',
    size: 250,
    sizeType: 'ml',
    currentPrice: 8.0,
    previousPrice: 8.0,
    plantType: 'Sativa',
    thc: 29,
    cbd: 0.1,
    effects: ['Relaxed', 'Euphoric', 'Hungry'],
    tags: ['Cannabis', 'flower'],
    itemNo: 423221,
    description: {
      short:
        'This exotic hybrid strain is a mix of Wedding Cake x Unicorn Poop with vanilla cake & kush aromas.',
      complection:
        'Doja Ucorn Cake, also known as Wedding Poop, is a high THC hybrid strain created by crossing Wedding Cake and Unicorn Poop. This cultivar is known to smell like vanilla cake and classic Kush. The dominant terpenes include myrcene and limonene. This cultivar produces forest green buds with dark orange hairs.',
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
      ingredients: 'Wedding Cake and Unicorn Poop',
      flavors: 'Citrus',
      recommendedUsage:
        'Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more',
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/pink_diablo_1.png',
      '/images/pink_diablo_2.png',
      '/images/pink_diablo_3.png',
    ],
    quantity: 4,
    rate: 3.4,
    categories: 'Flowers',
    name: 'Pink Diablo',
    size: 20,
    sizeType: 'g',
    currentPrice: 14.89,
    previousPrice: 20.0,
    plantType: 'Hybrid',
    thc: 27,
    cbd: 1,
    effects: ['Giggly', 'Relaxed', 'Anesthetic'],
    tags: ['Cannabis', 'flower'],
    itemNo: 978006,
    description: {
      short:
        'Pink Diablo Weed Strain is an Indica dominant hybrid marijuana that is popular for its sedative effects, stunning colouring and sweet, spicy flavour. It is a crossbreed of the famous Pink Kush and Diablo strains, with a high THC content of 25%.',
      complection:
        'Pink Diablo Weed Strain is an Indica dominant hybrid marijuana that is popular for its sedative effects, stunning colouring and sweet, spicy flavour. It is a crossbreed of the famous Pink Kush and Diablo strains, with a high THC content of 25%. Pink Diablo weed strain has a hybrid ratio of 70% Indica, and 30 % Sativa. The high of this strain hits you rapidly and lasts for hours. At first, you will experience an incredible clear-headed high, followed by a soft buzz that overcomes your body. This potent strain will later offer a relaxing body high, and before you realize it, you will have fallen into a deep slumber. The effects of this marijuana strain provide a suitable remedy for depression, loss of appetite, nausea, insomnia, and chronic pain.',
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
      ingredients: '70% Indica, 30 % Sativa',
      flavors: 'Candy / Earthy / Floral / Fruity / Gassy / Pungent / Sweet',
      recommendedUsage:
        "Many use this strain to help treat insomnia and aid them in getting a good night's rest",
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/bubba_kush_1.png',
      '/images/bubba_kush_2.png',
      '/images/bubba_kush_3.png',
    ],
    quantity: 9,
    rate: 2.9,
    categories: 'Pre-Rolls',
    name: 'Bubba Kush King-Sized Cone',
    size: 15,
    sizeType: 'g',
    currentPrice: 14.89,
    previousPrice: 14.89,
    plantType: 'Indica',
    thc: 17,
    cbd: 0.1,
    effects: ['Sleepy', 'Relaxed', 'Hungry'],
    tags: ['Cannabis', 'pre-rolls'],
    itemNo: 444666,
    description: {
      short:
        'Our king size pre-filled cones are filled with over a gram of high CBD hemp flower. We use fresh, premium buds with absolutely no trim or shake to provide the best overall smoking experience.',
      complection:
        'Our king size pre-filled cones are filled with over a gram of high CBD hemp flower. We use fresh, premium buds with absolutely no trim or shake to provide the best overall smoking experience. These giant cones contain top-shelf hemp flower, that was slow cured to keep all the rich cannabinoids and terpenes intact. All of our hemp flower strains are grown in the USA and are lab-tested.',
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
      ingredients: '100% Indica',
      flavors: 'round and deep notes of chocolate and coffee',
      recommendedUsage:
        "Many use this strain to help treat insomnia and aid them in getting a good night's rest",
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/purple_punch_1.png',
      '/images/purple_punch_2.png',
      '/images/purple_punch_3.png',
    ],
    quantity: 5,
    rate: 1.3,
    categories: 'Pre-Rolls',
    name: 'Purple Punch HHC Chillum',
    size: 15,
    sizeType: 'g',
    currentPrice: 45.0,
    previousPrice: 60.0,
    plantType: 'Indica',
    thc: 0.2,
    cbd: 16,
    effects: ['Energetic', 'Relaxed', 'Happy'],
    tags: ['Cannabis', 'pre-rolls'],
    itemNo: 534670,
    description: {
      short:
        'The infused pre-roll has evolved. The Habit Chillum is packed with 1 full gram of cannabis excellence.',
      complection:
        'Purple Punch is the sweet and sedating union of two indica-dominant classics. By breeding Larry OG with Granddaddy Purple, the astonishing trichome laden Purple Punch was born, smelling of grape candy, blueberry muffins, and tart Kool-Aid. The potency of this strain gives the consumer a one-two punch to the head and body, initially landing between the eyes and settling down into the limbs. Purple Punch is a delicious dessert strain that is best suited for after dinner. Its effects may help with managing nausea, stress, minor body aches, and sleeplessness.',
    },
    reviews: [
      {
        fullName: 'Michael',
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
      ingredients: '100% Indica',
      flavors: 'red wine, chocolate, and citrus',
      recommendedUsage:
        "Many use this strain to help treat insomnia and aid them in getting a good night's rest",
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/tropical_fruit_1.png',
      '/images/tropical_fruit_2.png',
      '/images/tropical_fruit_3.png',
    ],
    quantity: 11,
    rate: 4.9,
    categories: 'Beverage',
    name: 'XMG Tropical Fruit',
    size: 250,
    sizeType: 'ml',
    currentPrice: 7.0,
    previousPrice: 7.0,
    plantType: 'Sativa',
    thc: 10,
    cbd: 1,
    effects: ['Stimulating', 'Buzzy', 'Energetic'],
    tags: ['Cannabis', 'beverage'],
    itemNo: 123456,
    description: {
      short:
        'No messing around with this tropical fruit, high-intensity flavoured potion. 10 mg THC. Enjoy straight up, right out of the can.',
      complection:
        'These XMG drinks taste different but suffer the same flaws. Mango Pineapple is bright yellow, and Tropical Fruit is pinkish-red. Both smell fruity and sugary, and taste it too. Far and away the best part of these drinks is the effect—a happy buzzy head high. But first you have to choke down the taste.',
    },
    reviews: [
      {
        fullName: 'Michael',
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
        'Water, cane sugar, citric acid, cannabis emulsion (glycerin, ethyl alcohol, water, polysorbate 80, modified palm oil, sunflower lecithin, THC distillate), concentrates of carrot and blackcurrant (for colour), natural flavor',
      flavors: 'tropical fruit',
      recommendedUsage:
        "Many use this strain to help treat insomnia and aid them in getting a good night's rest",
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/deep_space_1.png',
      '/images/deep_space_2.png',
      '/images/deep_space_3.png',
    ],
    quantity: 2,
    rate: 3.5,
    categories: 'Beverage',
    name: 'Deep Space Carbonated',
    size: 250,
    sizeType: 'ml',
    currentPrice: 10.0,
    previousPrice: 15.0,
    plantType: 'Sativa',
    thc: 10,
    cbd: 1,
    effects: ['Euphoric', 'Hazy', 'Tipsy'],
    tags: ['Cannabis', 'beverage'],
    itemNo: 234567,
    description: {
      short:
        'Small, potent and ready-to-go. Prepare for the bold taste of this dark, full-flavoured 10mg THC, carbonated drink in a 222mL sleek can.',
      complection:
        'Deep Space by Tweed is a 10mg THC drink and cost $9.20 per 222 ml can.  Using nanoemulsions, Tweed drinks are designed to be fast acting in ten minutes as opposed to 45 minutes for edibles.  From our own personal consumption profile, we do not have a positive view on cannabis edibles and beverages as a meaningful consumption categories compared to dried flowers and concentrates.  That was before we discovered nanoemulsions.  Let’s check this out.',
    },
    reviews: [
      {
        fullName: 'Michael',
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
        'Carbonated water, Sugar, Distilled Cannabis™ Blend (Vegetable glycerin, Cannabis distillate, Monoglycerides, Soy lecithin, Sucrose monopalmitate), Citric acid, Potassium citrate, Caramel colour, Calcium disodium EDTA, Natural flavours',
      flavors: 'bold and mysterious',
      recommendedUsage:
        "Many use this strain to help treat insomnia and aid them in getting a good night's rest",
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/purple_cookie_seeds_1.png',
      '/images/purple_cookie_seeds_2.png',
      '/images/purple_cookie_seeds_3.png',
    ],
    quantity: 8,
    rate: 2.8,
    categories: 'Seeds',
    name: 'Purple Cookie Kush Feminized Seeds',
    size: 15,
    sizeType: 'g',
    currentPrice: 20.0,
    previousPrice: 20.0,
    plantType: 'Hybrid',
    thc: 22,
    cbd: 1,
    effects: ['Euphoric', 'Cerebral high', 'Relaxed'],
    tags: ['Cannabis', 'Seeds'],
    itemNo: 345678,
    description: {
      short:
        'Purple Cookie Kush Feminized seeds come from two well-known strains, Girl Scout Cookies and Purple Kush. The 60% indica / 40% sativa heritage leads to a well-balanced hybrid flower. Flavours range from grapes to sandalwood, and the terpene profile is a concoction of many complimentary aromas. Purple Cookie Kush Feminized is a short plant with good yields. Bud formation is dense, similar to many Kush strains.',
      complection:
        'Purple Cookie Kush Feminized takes the hottest GSC genetics and mashes them with a Purple Kush cultivar that was hand chosen for this project. No corners were cut in creating and selecting the right breeding stock for this fantastic strain. The result is a well-balanced hybrid that retains key qualities from its lineage. The Purple Kush parent of Purple Cookie Kush Feminized has a lot to contribute, as evidenced by the plant morphology. The compact nature and sturdy branching can be attributed to those indica-dominant genetics. Another area that the indica influence is evident is in the terpene profile, which includes scents of spicy hashish and earthiness.',
    },
    reviews: [
      {
        fullName: 'Michael',
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
      ingredients: '60% indica, 40% sativa plant',
      flavors: 'Creamy, flowery, pungent, sweet',
      recommendedUsage:
        "Many use this strain to help treat insomnia and aid them in getting a good night's rest",
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/seeds_white_label_1.png',
      '/images/seeds_white_label_2.png',
      '/images/seeds_white_label_3.png',
    ],
    quantity: 3,
    rate: 5.0,
    categories: 'Seeds',
    name: 'Pure Power Plant Feminized Seeds by White Label',
    size: 15,
    sizeType: 'g',
    currentPrice: 32.0,
    previousPrice: 40.0,
    plantType: 'Hybrid',
    thc: 22,
    cbd: 1,
    effects: ['Stimulating', 'Energetic', 'Happy'],
    tags: ['Cannabis', 'Seeds'],
    itemNo: 456789,
    description: {
      short:
        'Pure Power Plant Feminized by White Label is a fast-flowering 40% indica, 60% sativa strain. It produces abundant yields, and can be grown indoors, or outdoors in a warm climate. The plants produce a skunky, vanilla-wood aroma while growing, which is also evident in the taste. The sativa dominance results in a talkative, uplifting high.',
      complection:
        'White Label Pure Power Plant Feminized cannabis seeds are a potent hybrid; made up of 60% sativa and 40% indica. Its exact genetics have been kept a secret, though it’s known that the sativa parent plant is South African, and the indica originates from the US. The slight sativa dominance is evident in the high, which is energising and euphoric. This is a feminized strain, which means that it’s highly unlikely that any male plants will grow from the seeds. This means cultivation is much easier, making it a suitable option for novice growers. Pure Power Plant Feminized also has high resistance to mould, which is another advantage.',
    },
    reviews: [
      {
        fullName: 'Michael',
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
      ingredients: '40% indica, 60% sativa plant',
      flavors:
        'Pleasantly musky, citrussy aroma while growing, with a note of skunk',
      recommendedUsage:
        "Many use this strain to help treat insomnia and aid them in getting a good night's rest",
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/hero01.png',
      '/images/hawaiian_haze_2.png',
      '/images/hawaiin_haze_3.png',
    ],
    quantity: 3,
    rate: 4,
    categories: 'Flowers',
    name: 'Hawaiian Haze',
    size: 15,
    sizeType: 'g',
    currentPrice: 38.0,
    previousPrice: 45.0,
    plantType: 'Sativa',
    thc: 16,
    cbd: 1,
    effects: ['Energetic', 'Talkative', 'Uplifted'],
    tags: ['Pretty smooth', 'Flowers'],
    itemNo: 450389,
    description: {
      short:
        'This sweet strain will infuses you with an invigorating euphoria perfect for outdoor activities and social gatherings',
      complection:
        'Hawaiian Haze is a sativa marijuana strain that produces some high-quality sativa effects. A mix of Hawaiian and Haze genetics, these light, airy buds will have your head in the clouds. Many users also report that it makes them sociable and talkative. Hawaiian Haze’s floral smell and taste of tropical fruit might just have you daydreaming about an island vacation.',
    },
    reviews: [
      {
        fullName: 'Sara',
        reviewRating: 5,
        reviewDate: 'Novemver 21, 2022 at 11:44 am',
        feedback:
          'This strain is absolutely amazing. Not only does it taste great, but it hits pretty smooth too. Also, you dont need to smoke a lot to get high. I bought a quarter and normally that would last me a day, but I only had half a gram of it and I was flying.',
        benefit: 'Pretty smooth, absolutely amazing.',
        disadvantages: 'Dry eyes, paranoid.',
      },
      {
        fullName: 'Nikki Cala',
        reviewRating: 5,
        reviewDate: 'June 9, 2021 at 17:14 pm',
        reviewText:
          ' If you have things to do and need to be medicated.. This is the strain!',
        feedback:
          'The smell is what instantly hits you as you open the jar. Its like a blast of tropical fruits, or flowers, and the first taste of the vape follows suit. ',
        benefit: 'Amazing smell, euphoric',
        disadvantages: '',
      },
    ],
    additionalInformation: {
      ingredients: 'sativa plant',
      flavors: 'Mango, tropical, pineapple',
      recommendedUsage:
        'Recommend this strain to anyone with anxiety, depression, or insomnia',
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/hero02.png',
      '/images/sour-diesel_2.png',
      '/images/sour-diesel_3.png',
    ],
    quantity: 7,
    rate: 4.8,
    categories: 'Flowers',
    name: 'Sour Diesel',
    size: 20,
    sizeType: 'g',
    currentPrice: 35.0,
    previousPrice: 44.0,
    plantType: 'Sativa',
    thc: 19,
    cbd: 0,
    effects: ['Energetic', 'Happy', 'Relaxed'],
    tags: ['Sativa', 'Flowers'],
    itemNo: 418789,
    description: {
      short:
        'This strain features a pungent smells like diesel. It helps to relieve symptoms associated with depression, pain, and stress',
      complection:
        'Sour Diesel, also known as "Sour D" and "Sour Deez," is a popular sativa marijuana strain made by crossing Chemdawg and Super Skunk. Sour Diesel effects are dreamy, cerebral, fast-acting and energizing. This strain features a pungent flavor profile that smells like diesel. Medical marijuana patients choose Sour Diesel to help relieve symptoms associated with depression, pain, and stress. Fun fact: Sour Diesel first became popular in the early 1990s and has been legendary ever since.',
    },
    reviews: [
      {
        fullName: 'Naomi Vera',
        reviewRating: 5,
        reviewDate: 'March 17, 2021 at 11:49 am',
        feedback:
          'I have only smoked the flower version of sour diesel thus far and lately Ihave been smoking alot of wax, kief, and hash, so when I finally for the 1st time tried Sour Diesel (since Im normally an indica or hybrid guy), it took me awhile to finally get a chance to try sour d and all I could find at the dispensaries at the time here in Sacramento was the flower/buds, so I bought an 8th the 1st time and I got home and immediately packed a bowl with it and holy shit I was surprised and in a good way.',
        benefit:
          'Many medical cannabis users appreciate Sour Diesel for its potential to alleviate symptoms of stress, depression, and fatigue.',
        disadvantages: '',
      },
    ],
    additionalInformation: {
      ingredients: 'Sativa plant',
      flavors: 'Combination of earthy, diesel, and citrus flavors',
      recommendedUsage:
        'It helps to relieve symptoms associated with depression, pain, and stress',
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/hero03.png',
      '/images/northern_lights_2.png',
      '/images/northern_lights_3.png',
    ],
    quantity: 9,
    rate: 4.8,
    categories: 'Flowers',
    name: 'Northern Lights',
    size: 18,
    sizeType: 'g',
    currentPrice: 41.0,
    previousPrice: 50.0,
    plantType: 'Indica',
    thc: 18,
    cbd: 1,
    effects: ['Stimulating', 'Energetic', 'Happy'],
    tags: ['Indica', 'Flowers'],
    itemNo: 459279,
    description: {
      short:
        'It relaxing muscles and easing the mind, help relieve symptoms associated with depression, stress, pain and insomnia',
      complection:
        'Northern Lights, also known as "NL", is an indica marijuana strain made by crossing Afghani with Thai. Northern Lights produces euphoric effects that settle in firmly throughout the body, relaxing muscles and easing the mind. Consumers say this strain has a pungently sweet and spicy flavor profile that is smooth on the exhale.',
    },
    reviews: [
      {
        fullName: 'Ben Tierry',
        reviewRating: 5,
        reviewDate: 'February 15, 2022 at 19:10 pm',
        feedback:
          'Me and my friend hit this out of a bong one night in a hurry, some asshole played a joke on us and said the cops came right as we hit a giant nugget; what occurred next was legendary to us. We sat in my car, in a parking lot for 4 hours straight unable to move, and staring at the stars, after that time we drove (with great difficulty) to a restruant where we stared at our food for 2 hours before we came down. We have never even came close to being this high again, it was the strongest stuff I have ever came into contact with.',
        benefit: 'Euphoric effect',
        disadvantages: 'Dry mouth, dizzy',
      },
      {
        fullName: 'Penelopa',
        reviewRating: 5,
        reviewDate: 'April 11, 2021 at 08:14 am',
        reviewText:
          'The purple undertones add an extra layer of aesthetic appeal.',
        feedback:
          'I enjoy Northern Lights! Cannabis preferences can vary widely among individuals, and Northern Lights is known for its calming and relaxing effects.',
        benefit: 'Relaxed effeect',
        disadvantages: '',
      },
    ],
    additionalInformation: {
      ingredients: 'indica plant',
      flavors: 'Pine, herbal, earthy',
      recommendedUsage:
        'It help relieve symptoms associated with depression, stress, pain and insomnia',
    },
  },

  {
    enabled: true,
    imageUrls: [
      '/images/Doja_Ultra_Sour_1.jpeg',
      '/images/Doja_Ultra_Sour_2.jpeg',
      '/images/Doja_Ultra_Sour_3.jpeg',
    ],
    quantity: 10,
    rate: 4.9,
    categories: 'Pre-Rolls',
    name: 'Doja Ultra Sour',
    size: 0.5,
    sizeType: 'g',
    currentPrice: 55.0,
    previousPrice: 75.0,
    plantType: 'Sativa',
    thc: 26,
    cbd: 1,
    effects: ['Energetic', 'Happy', 'Inspired'],
    tags: ['Cannabis', 'pre-rolls'],
    itemNo: 887645,
    description: {
      short:
        '3 Masterfully pre-rolled 0.5g joints containing DOJA Ultra Sour: a sativa-dominant strain with a East Coast Sour Diesel x MK Ultra lineage, emitting pungent citrusy aromas.',
      complection:
        'These three masterfully rolled 0.5g pre-rolls contain DOJA 91K - an indica-dominant strain that delivers a high level of THC and minimal amounts of CBD. Doja 91K is bred from the Chemdawg 91 crossed with the infamous Captain Krypt OG.Together this lineage creates a strain that emits a deep, dank terpene profile that includes caryophyllene and limonene.These medium- sized nugs have a pungent, classic earthy smell, with distinct floral and musky undertones.',
    },
    reviews: [
      {
        fullName: 'Crutis',
        reviewRating: 5,
        reviewDate: 'September 31, 2022 at 21:52 am',
        feedback:
          'Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.',
        benefit: 'In nulla posuere sollicitudin aliquam ultrices.',
        disadvantages:
          'Viverra aliquet eget sit amet tellus cras adipiscing enim.',
      },
      {
        fullName: 'Sanchez',
        reviewRating: 4.5,
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
      ingredients: 'Dried Cannabis, Bubble Hash',
      flavors: 'These medium-sized nugs have a pungent, classic earthy smell, with distinct floral and musky undertones.',
      recommendedUsage:
        'Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more',
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/Dab_Bods_Limoncello_Resin_1.jpeg',
      '/images/Dab_Bods_Limoncello_Resin_2.jpeg',
      '/images/Dab_Bods_Limoncello_Resin_3.jpeg',
    ],
    quantity: 7,
    rate: 4.1,
    categories: 'Pre-Rolls',
    name: 'Dab Bods Limoncello Resin',
    size: 0.5,
    sizeType: 'g',
    currentPrice: 29.95,
    previousPrice: 29.95,
    plantType: 'Sativa',
    thc: 43,
    cbd: 0.30,
    effects: ['Giggly', 'Happy', 'Relaxing'],
    tags: ['Cannabis', 'pre-rolls'],
    itemNo: 848645,
    description: {
      short:
        'DAB Bods Resin Infused Pre-rolls featuring the popular strain “Limoncello”. Robust flavours of lemon with hints of mango, pine and pepper explode out of these 3 packs, providing a perfect combination of concentrate and pre roll.',
      complection:
        'DAB Bods resin infused joints are custom designed for people who truly love cannabis and only want the most out of their experience. Starting with Alberta`s locally grown craft bud and delicately infusing it with our top selling resin to provide a smooth smoke with the power kick of a concentrate.The resin infused pre rolls maintain all of the terpenes from the live plant and combines them with cured hand crafted flower in a convenient 0.5 gram format for individual consumption.These pre rolls feature the popular strain `Limoncello` - a hybrid strain that has been known to carry giggly, happy and relaxing body effects.Robust flavours of lemon with hints of mango, pine and pepper explode out of these 3 pack pre rolls.Providing you a perfect combination of concentrate and pre roll, Dab Bods infused pre rolls are a must have to share with friends.',
    },
    reviews: [
      {
        fullName: 'Alison',
        reviewRating: 5,
        reviewDate: 'September 31, 2022 at 21:52 am',
        feedback:
          'Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.',
        benefit: 'In nulla posuere sollicitudin aliquam ultrices.',
        disadvantages:
          'Viverra aliquet eget sit amet tellus cras adipiscing enim.',
      },
      {
        fullName: 'Stiv',
        reviewRating: 3,
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
      ingredients: 'Dried Cannabis, Cannabis Extract',
      flavors: 'Robust flavours of lemon with hints of mango, pine and pepper explode out of these 3 packs.',
      recommendedUsage:
        'Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more',
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/Embark_Hash_Hits_1.jpeg',
      '/images/Embark_Hash_Hits_2.jpeg',
      '/images/Embark_Hash_Hits_3.jpeg',
    ],
    quantity: 7,
    rate: 3.5,
    categories: 'Pre-Rolls',
    name: 'Embark Hash Hits',
    size: 0.2,
    sizeType: 'g',
    currentPrice: 92.33,
    previousPrice: 92.33,
    plantType: 'Indica',
    thc: 50,
    cbd: 0.50,
    effects: ['Relaxed', 'Sleepy', 'Happy'],
    tags: ['Cannabis', 'pre-rolls'],
    itemNo: 842635,
    description: {
      short:
        'Ready to use, on the go, Hash Hits is solventless hash that has been loaded into discrete single use pipes that are easy to use, just remove cap, light and inhale. Packed with a pure hash blend in a stainless steel bowl, and compostable pipe.',
      complection:
        'It is the destiny of mint to be crushed, just ask our Back Forty Kush Mint Infused Pre-Rolls. These infused pre-rolls by Back Forty are a remix of some of your favourite Back Forty products. Starting with our best selling Back Forty flower, we’ve taken it for a spin with our proprietary collision extraction process before combining it with Kush Mint THC distillate to hit potencies up to 32%. The result? Re-invigorating clouds of fresh and minty sweetness. Take a trip and explore the Back Forty.',
    },
    reviews: [
      {
        fullName: 'Jess',
        reviewRating: 2,
        reviewDate: 'September 31, 2022 at 21:52 am',
        feedback:
          'Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.',
        benefit: 'In nulla posuere sollicitudin aliquam ultrices.',
        disadvantages:
          'Viverra aliquet eget sit amet tellus cras adipiscing enim.',
      },
      {
        fullName: 'Misty',
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
      ingredients: 'Dried Cannabis, Cannabis Concentrate',
      flavors: 'This heets has a velvety taste with a special roasted tobacco touch.',
      recommendedUsage:
        'Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more',
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/Monjour_Berry_GoodDay_1.jpeg',
      '/images/Monjour_Berry_GoodDay_2.jpeg',
      '/images/Monjour_Berry_GoodDay_3.jpeg',
    ],
    quantity: 15,
    rate: 5,
    categories: 'Edible',
    name: 'Monjour Berry Good Day CBD (Gelatin Free)',
    size: 20,
    sizeType: 'g',
    currentPrice: 36.35,
    previousPrice: 22.99,
    plantType: 'Hybrid',
    thc: 1,
    cbd: 20,
    effects: ['Relaxed', 'Focused', 'Happy'],
    tags: ['Cannabis', 'edible'],
    itemNo: 842645,
    description: {
      short:
        'Greet the day and make it your own with a gummy that contains 20 mg CBD per piece. Monjour’s vegan gummies are available in 30-packs and feature a mix of Blueberry, Strawberry, and Wild Berry flavours. These gummies are made with CBD Isolate and natural flavours.',
      complection:
        'Berry Good Day Monjour vegan-friendly gummies are made with CBD isolate and come in an assortment of three mouth-watering natural flavours: blueberry, strawberry, and wild berry. Consistent and convenient (no measuring or droppers necessary), containing exactly 20 mg of CBD per gummy and available in 30-piece packs. Portable, discreet, and tasty. The perfect CBD edible to meet you wherever you are in your day.',
    },
    reviews: [
      {
        fullName: 'Mike',
        reviewRating: 5,
        reviewDate: 'September 31, 2022 at 21:52 am',
        feedback:
          'Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.',
        benefit: 'In nulla posuere sollicitudin aliquam ultrices.',
        disadvantages:
          'Viverra aliquet eget sit amet tellus cras adipiscing enim.',
      },
      {
        fullName: 'Ginger',
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
      ingredients: 'Sugars (sugar, glucose syrup, glucose), Water, Pectin, Citric acid, Natural flavours, Sodium citrate, Modified coconut oil, Cannabis extract, Anthocyanin (colour), Coconut oil, Carnauba wax, Propylene glycol, Alpha-tocopherol',
      flavors: 'Blueberry, strawberry, and wild berry.',
      recommendedUsage:
        'Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more',
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/Mint_Cookie_BLZRD_1.jpeg',
      '/images/Mint_Cookie_BLZRD_2.jpeg',
      '/images/Mint_Cookie_BLZRD_3.jpeg',
    ],
    quantity: 8,
    rate: 4.3,
    categories: 'Edible',
    name: 'Mint Cookie BLZRD White Chocolate',
    size: 10,
    sizeType: 'g',
    currentPrice: 5.99,
    previousPrice: 5.99,
    plantType: 'Hybrid',
    thc: 10,
    cbd: 0.1,
    effects: ['Energetic', 'Happy', 'Calm'],
    tags: ['Cannabis', 'edible'],
    itemNo: 842345,
    description: {
      short:
        'Happy St. Patrick’s Day Legends. Make it Legendary with some Mint Cookie BLZRD white chocolate bar!',
      complection:
        'Legend`s Mint flavoured, Organic Fairtrade white chocolate, with dark cookie crumble made without gluten, delivers an exceptional taste experience.This delicious chocolate comes with 10mg of THC, and utilizes MCT oil to improve the bioavailability of the cannabinoids in each mouth- watering bite.',
    },
    reviews: [
      {
        fullName: 'Chris',
        reviewRating: 4,
        reviewDate: 'September 31, 2022 at 21:52 am',
        feedback:
          'Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.',
        benefit: 'In nulla posuere sollicitudin aliquam ultrices.',
        disadvantages:
          'Viverra aliquet eget sit amet tellus cras adipiscing enim.',
      },
      {
        fullName: 'Bobby',
        reviewRating: 4.6,
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
      ingredients: 'Organic White Chocolate (organic cocoa butter, organic raw cane sugar, organic whole milk powder), chocolate cookie crumbles (Sugars (cane sugar, tapioca syrup), Non-hydrogenated shortening (palm oil, modified palm oil), Pea starch, Potato starch, White rice flour, Cocoa powder, Tapioca starch, Water, Pea protein, Salt, Natural flavour, Pea fibre, Sunflower lecithin, Inulin, Sodium bicarbonate, Modified cellulose), food colour preparation (tartrazine, brilliant blue FCF), peppermint flavour, cannabis distillate.',
      flavors: 'Chocolate, mint.',
      recommendedUsage:
        'Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more',
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/Blackberry_Lemonade_Gummies_1.jpeg',
      '/images/Blackberry_Lemonade_Gummies_2.jpeg',
      '/images/Blackberry_Lemonade_Gummies_3.jpeg',
    ],
    quantity: 22,
    rate: 4,
    categories: 'Edible',
    name: 'Blackberry Lemonade Gummies',
    size: 15,
    sizeType: 'g',
    currentPrice: 18.47,
    previousPrice: 18.47,
    plantType: 'Indica',
    thc: 10,
    cbd: 10,
    effects: ['Relaxed', 'Happy', 'Sleepy'],
    tags: ['Cannabis', 'edible'],
    itemNo: 841345,
    description: {
      short:
        'Blackberry Lemonade Pearls are infused with CBN, CBD and THC. Each soft chew contains 2 mg of CBN, 2 mg of CBD and 2 mg of THC. 5 soft chews per pack.',
      complection:
        'Blackberry Lemonade Pearls are infused with equal parts CBN, CBD and THC in a 1:1:1 ratio. Each sugar-coated pearl gives your tastebuds a tart pucker with blackberry lemonade flavours and contains 2 mg of CBN, 2 mg of CBD and 2 mg of THC. Pearls are bursting with natural flavour, and coated in sugar for a sweet treat no matter where you are. 5 soft chews per pack.',
    },
    reviews: [
      {
        fullName: 'Lory',
        reviewRating: 3,
        reviewDate: 'September 31, 2022 at 21:52 am',
        feedback:
          'Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.',
        benefit: 'In nulla posuere sollicitudin aliquam ultrices.',
        disadvantages:
          'Viverra aliquet eget sit amet tellus cras adipiscing enim.',
      },
      {
        fullName: 'Elif',
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
      ingredients: 'Sugars (sugar, glucose), Water, Gelatin, Citric acid, Coconut oil, Propylene glycol, Fumaric acid, Blackberry Powder, Cannabis extract, Natural flavour, artificial Color (FD&C Blue NO. 1, FD&C Red NO. 40, FD&C Red NO. 3, Propyl Paraben (preservative)).',
      flavors: 'Blackberry.',
      recommendedUsage:
        'Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more',
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/NightNight_Oil_1.jpeg',
      '/images/NightNight_Oil_2.jpeg',
      '/images/NightNight_Oil_3.jpeg',
    ],
    quantity: 20,
    rate: 3,
    categories: 'Oils',
    name: 'NightNight Full Spectrum Oil',
    size: 30,
    sizeType: 'ml',
    currentPrice: 32.25,
    previousPrice: 52.25,
    plantType: 'Sativa',
    thc: 0.28,
    cbd: 50,
    effects: ['Creative', 'Happy', 'Energetic'],
    tags: ['Cannabis', 'oil'],
    itemNo: 841645,
    description: {
      short:
        'NightNight Full Spectrum CBN+CBD Oil contains CBN and CBD without THC, in a tincture format. NightNight’s CBN+CBD formulation is combined with pharmaceutical-grade MCT oil and terpenes, resulting in a full-spectrum functional oil. All NightNight`s CBN products are enhanced with CBD and other natural ingredients to create consumer- focused products of unparalleled quality.',
      complection:
        'NightNight Full Spectrum CBN+CBD Oil contains 10mg/g of CBN, 30mg/g of CBD, and no THC, creating a new way to experience the synergistic effects of CBN and CBD in a familiar format. NightNight’s CBN+CBD formulation is combined with pharmaceutical-grade MCT and terpenes, resulting in a full spectrum functional oil ideal for nighttime use. All NightNight`s CBN products are enhanced with CBD and other natural ingredients to create consumer- focused products of unparalleled quality and utility.NightNight products are developed and manufactured by Purileaf in Niagara Falls, Ontario.Each lot is tested by accredited laboratory to ensure quality and consistency.',
    },
    reviews: [
      {
        fullName: 'Lory',
        reviewRating: 3,
        reviewDate: 'September 31, 2022 at 21:52 am',
        feedback:
          'Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.',
        benefit: 'In nulla posuere sollicitudin aliquam ultrices.',
        disadvantages:
          'Viverra aliquet eget sit amet tellus cras adipiscing enim.',
      },
      {
        fullName: 'Elif',
        reviewRating: 3.1,
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
      ingredients: '35% CBN, 50% CBD, 10% CBG, and 12 natural, indica-strain terpenes',
      flavors: 'Blackberry.',
      recommendedUsage:
        'Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more',
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/Reign_drops_oil_1.jpeg',
      '/images/Reign_drops_oil_2.jpeg',
      '/images/Reign_drops_oil_3.jpeg',
    ],
    quantity: 20,
    rate: 4.6,
    categories: 'Oils',
    name: 'Redecan Reign Drops Oil',
    size: 30,
    sizeType: 'ml',
    currentPrice: 31.25,
    previousPrice: 31.25,
    plantType: 'Hybrid',
    thc: 45,
    cbd: 50,
    effects: ['Calm', 'Energetic', 'Relaxed'],
    tags: ['Cannabis', 'oil'],
    itemNo: 841745,
    description: {
      short:
        'Redecan believes that everyone should be able to buy high quality cannabis products for reasonable prices.They remain one of the very few private, 100% Canadian owned and operated companies in the cannabis industry, and they maintain a family- oriented mindset towards staff and all of their patients and customers across the country. 100 % Canadian homegrown. 100 % Greenhouse grown. Natural growing conditions',
      complection:
        'Redecan’s golden-coloured oil drops are formulated in Niagara, Ont. The oil is made with a greenhouse-grown blend of cannabis, put through a state-of-the-art CO2 extraction process and diluted to the optimal concentration. It’s available in a 30 ml bottle and has a THC potency balanced with an even amount of CBD. All oil products sold at OCS.ca are meant for ingestion only. DO NOT smoke or vape these oils. Use as directed.',
    },
    reviews: [
      {
        fullName: 'Lory',
        reviewRating: 4.3,
        reviewDate: 'September 31, 2022 at 21:52 am',
        feedback:
          'Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.',
        benefit: 'In nulla posuere sollicitudin aliquam ultrices.',
        disadvantages:
          'Viverra aliquet eget sit amet tellus cras adipiscing enim.',
      },
      {
        fullName: 'Elif',
        reviewRating: 4.3,
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
      ingredients: 'MCT oil, Cannabis Extract',
      flavors: 'Caryophyllene - Peppery, Humulene Hoppy, Myrcene - Earthy',
      recommendedUsage:
        'Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more',
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/Reign_drops_oil_1.jpeg',
      '/images/Reign_drops_oil_2.jpeg',
      '/images/Reign_drops_oil_3.jpeg',
    ],
    quantity: 10,
    rate: 2.5,
    categories: 'Oils',
    name: 'Five Founders THC Oil',
    size: 30,
    sizeType: 'ml',
    currentPrice: 31.67,
    previousPrice: 31.67,
    plantType: 'Hybrid',
    thc: 30,
    cbd: 3,
    effects: ['Calm', 'Energetic', 'Relaxed'],
    tags: ['Cannabis', 'oil'],
    itemNo: 841755,
    description: {
      short:
        'Five Founders oils are high quality concentrates with premium olive oil as a carrier. Our oils are a convenient and discreet method of consumption.',
      complection:
        'Five Founders THC Oils are CO2 extracted from mid to high THC cannabis strains grown indoors in a state-of-the-art pharmaceutical grade facility. Five Founders` extraction process is designed to efficiently convert quality dried cannabis flower into a quality finished product using a premium olive oil as a carrier.',
    },
    reviews: [
      {
        fullName: 'Lory',
        reviewRating: 2,
        reviewDate: 'September 31, 2022 at 21:52 am',
        feedback:
          'Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.',
        benefit: 'In nulla posuere sollicitudin aliquam ultrices.',
        disadvantages:
          'Viverra aliquet eget sit amet tellus cras adipiscing enim.',
      },
      {
        fullName: 'Elif',
        reviewRating: 2.9,
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
      ingredients: 'MCT oil, Cannabis Extract',
      flavors: 'Coconut',
      recommendedUsage:
        'Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more',
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/Peach_Ginger_Tea_1.jpeg',
      '/images/Peach_Ginger_Tea_2.jpeg',
      '/images/Peach_Ginger_Tea_3.jpeg',
    ],
    quantity: 15,
    rate: 4,
    categories: 'Beverage',
    name: 'Decaffeinated Peach Ginger Green Tea',
    size: 10,
    sizeType: 'g',
    currentPrice: 14.99,
    previousPrice: 40.0,
    plantType: 'Hybrid',
    thc: 0,
    cbd: 20,
    effects: ['Calm', 'Energetic', 'Relaxed'],
    tags: ['Cannabis', 'beverage'],
    itemNo: 841775,
    description: {
      short:
        'Decaffeinated premium whole-leaf tea blend with notes of peach and a kick of ginger. Contains biodegradable tea bag sachets with 20mg CBD each. ',
      complection:
        'Peach Ginger Green Tea is a decaffeinated premium whole-leaf tea blend that brings together sweet notes of peach and a zesty kick of ginger for an exceptionally well-balanced taste. Each pack contains ten biodegradable pyramid tea bag sachets, each infused with 20mg of CBD.',
    },
    reviews: [
      {
        fullName: 'Lory',
        reviewRating: 4.7,
        reviewDate: 'September 31, 2022 at 21:52 am',
        feedback:
          'Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.',
        benefit: 'In nulla posuere sollicitudin aliquam ultrices.',
        disadvantages:
          'Viverra aliquet eget sit amet tellus cras adipiscing enim.',
      },
      {
        fullName: 'Elif',
        reviewRating: 4,
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
      ingredients: 'Decaffeinated green tea, Sugars (Cane sugar), Ginger, Sweet blackberry leaves, Natural flavour, Acacia gum, Modified coconut oil, Cannabis extract, Peach, Potassium sorbate, Sunflower lecithin',
      flavors: 'Peach',
      recommendedUsage:
        'Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more',
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/Kaleida_Blue_1.jpeg',
      '/images/Kaleida_Blue_2.jpeg',
      '/images/Kaleida_Blue_3.jpeg',
    ],
    quantity: 13,
    rate: 4,
    categories: 'Beverage',
    name: 'Kaleida Blue',
    size: 355,
    sizeType: 'ml',
    currentPrice: 6.95,
    previousPrice: 6.95,
    plantType: 'Hybrid',
    thc: 10,
    cbd: 1,
    effects: ['Calm', 'Energetic', 'Relaxed'],
    tags: ['Cannabis', 'beverage'],
    itemNo: 811775,
    description: {
      short:
        'This non-carbonated, ready-to-drink cannabis beverage is infused with 10 mg of THC and is bursting with blue! Serve cold and pour into a chilled glass. Almost no taste or smell of cannabis.',
      complection:
        'Peach Ginger Green Tea is a decaffeinated premium whole-leaf tea blend that brings together sweet notes of peach and a zesty kick of ginger for an exceptionally well-balanced taste. Each pack contains ten biodegradable pyramid tea bag sachets, each infused with 20mg of CBD.',
    },
    reviews: [
      {
        fullName: 'Lory',
        reviewRating: 4.7,
        reviewDate: 'September 31, 2022 at 21:52 am',
        feedback:
          'Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.',
        benefit: 'In nulla posuere sollicitudin aliquam ultrices.',
        disadvantages:
          'Viverra aliquet eget sit amet tellus cras adipiscing enim.',
      },
      {
        fullName: 'Elif',
        reviewRating: 4,
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
      ingredients: 'Water, cane sugar, citric acid, cannabis emulsion (glycerin, ethyl alcohol, water, polysorbate 80, modified palm oil, sunflower lecithin, THC distillate), concentrates of carrot and blackcurrant (for colour), natural flavor',
      flavors: 'Citrus and tropical, coconut.',
      recommendedUsage:
        'Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more',
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/Versus_Neon_1.jpeg',
      '/images/Versus_Neon_2.jpeg',
      '/images/Versus_Neon_3.jpeg',
    ],
    quantity: 14,
    rate: 4.8,
    categories: 'Beverage',
    name: 'Versus Neon Rush Cali Blast',
    size: 355,
    sizeType: 'ml',
    currentPrice: 6.99,
    previousPrice: 6.99,
    plantType: 'Hybrid',
    thc: 10,
    cbd: 5,
    effects: ['Calm', 'Focused', 'Relaxed'],
    tags: ['Cannabis', 'beverage'],
    itemNo: 821775,
    description: {
      short:
        'Versus Neon Rush Cali Blast is made with S?RSE® cannabis emulsion technology which delivers a consistent onset with almost no cannabis taste or smell. Containing 10mg of THC and 30mg of caffeine, this tropical-lime carbonated beverage tastes big, bold, and sweet.',
      complection:
        'Versus Neon Rush Cali Blast is made with SōRSE® cannabis emulsion technology which delivers a predictable and consistent onset with almost no cannabis taste or smell. Containing 10mg of THC and 30mg of caffeine, this tropical lime carbonated beverage tast',
    },
    reviews: [
      {
        fullName: 'Lory',
        reviewRating: 4.7,
        reviewDate: 'September 31, 2022 at 21:52 am',
        feedback:
          'Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.',
        benefit: 'In nulla posuere sollicitudin aliquam ultrices.',
        disadvantages:
          'Viverra aliquet eget sit amet tellus cras adipiscing enim.',
      },
      {
        fullName: 'Elif',
        reviewRating: 4,
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
      ingredients: 'Water, Sugar, Guarana seed extract, Cannabis extract, Modified coconut oil(medium chain triglycerides), Citric acid, Sodium benzoate, Ascorbic acid, Potassium sorbate, Calcium disodium EDTA, Sucrose acetate isobutyrate, Gluconic acid, Natural flavours, Tartrazine, Brilliant blue FCF, Allura red',
      flavors: 'Tropical lime.',
      recommendedUsage:
        'Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more',
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/Jamaican_Seeds_1.jpeg',
      '/images/Jamaican_Seeds_2.jpeg',
      '/images/Jamaican_Seeds_3.jpeg',
    ],
    quantity: 16,
    rate: 4.8,
    categories: 'Seeds',
    name: 'Jamaican Pearl Feminized Seeds',
    size: 10,
    sizeType: 'g',
    currentPrice: 61.0,
    previousPrice: 61.0,
    plantType: 'Sativa',
    thc: 18,
    cbd: 0,
    effects: ['Happy', 'Positive', 'Energetic'],
    tags: ['Cannabis', 'Seeds'],
    itemNo: 821745,
    description: {
      short:
        'Jamaican Pearl regular cannabis seeds become tall cannabis plants with a very large yield. The weed has a sweet fruity taste and gives a Sativa high.',
      complection:
        'With its fruity flavour and mood-lifting effect, Jamaican Pearl Feminized guarantees a good mood. Recreate the Caribbean in your lounge with this cannabis strain! This is one of the few tropical sativas that also thrives in cool climates. You’ll be amazed at how many resinous buds these seeds produce. The high may be less intensive than with certain resin types, but it is more controllable as a result.',
    },
    reviews: [
      {
        fullName: 'Lory',
        reviewRating: 4.7,
        reviewDate: 'September 31, 2022 at 21:52 am',
        feedback:
          'Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.',
        benefit: 'In nulla posuere sollicitudin aliquam ultrices.',
        disadvantages:
          'Viverra aliquet eget sit amet tellus cras adipiscing enim.',
      },
      {
        fullName: 'Elif',
        reviewRating: 4,
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
      ingredients: '85% Sativa, 15% Indica.',
      flavors: 'Fruity and earthy tones',
      recommendedUsage:
        'Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more',
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/Lockdown_Seeds_1.jpeg',
      '/images/Lockdown_Seeds_2.jpeg',
      '/images/Lockdown_Seeds_3.jpeg',
    ],
    quantity: 13,
    rate: 4.8,
    categories: 'Seeds',
    name: 'Lockdown Kush Feminized Seeds',
    size: 3,
    sizeType: 'seeds',
    currentPrice: 20.0,
    previousPrice: 20.0,
    plantType: 'Hybrid',
    thc: 20,
    cbd: 0.5,
    effects: ['Calm', 'Focused', 'Relaxed'],
    tags: ['Cannabis', 'Seeds'],
    itemNo: 831775,
    description: {
      short:
        'Lockdown Kush Feminized is a 40% indica / 60% sativa plant with a parental lineage of San Fernando Valley OG crossed with Afghani #1. Full body effects can be anticipated from the heavily potent flower. This strain will finish as a compact-sized plant with short flowering times and a sturdy structure. Citrus and pine aromas dominate the terpene profile of this medium-yielding cultivar. Lockdown Kush can be grown successfully in indoor and outdoor gardens, including colder continental climates.',
      complection:
        'Lockdown Kush Feminized swells with chunky and dense trichome-covered flowers. Multiple colas form a thick canopy that rises above the large, broad leaves below. The progeny of two heavy-hitting parents, Lockdown Kush gets you to the finish line faster with a blazing 55-to-60-day flowering period. Sharp and refreshing citrus aromas strike the nose first, followed by a shot of pungently pine terpenes. The effects start by changing the headspace and then migrate down into the body. This strain has something for everyone.',
    },
    reviews: [
      {
        fullName: 'Lory',
        reviewRating: 4.7,
        reviewDate: 'September 31, 2022 at 21:52 am',
        feedback:
          'Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.',
        benefit: 'In nulla posuere sollicitudin aliquam ultrices.',
        disadvantages:
          'Viverra aliquet eget sit amet tellus cras adipiscing enim.',
      },
      {
        fullName: 'Elif',
        reviewRating: 4,
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
      ingredients: '40% Indica / 60% Sativa',
      flavors: 'Sharp and refreshing citrus aromas strike the nose first, followed by a shot of pungently pine terpenes.',
      recommendedUsage:
        'Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more',
    },
  },
  {
    enabled: true,
    imageUrls: [
      '/images/Ruderalis_Seeds_1.jpeg',
      '/images/Ruderalis_Seeds_2.jpeg',
      '/images/Ruderalis_Seeds_3.jpeg',
    ],
    quantity: 16,
    rate: 4.8,
    categories: 'Seeds',
    name: 'Ruderalis Skunk Regular Seeds',
    size: 10,
    sizeType: 'seeds',
    currentPrice: 48.00,
    previousPrice: 63.35,
    plantType: 'Hybrid',
    thc: 18,
    cbd: 0,
    effects: ['Calm', 'Sleep', 'Relaxed'],
    tags: ['Cannabis', 'Seeds'],
    itemNo: 821765,
    description: {
      short:
        'Ruderalis Skunk Regular is 90% indica, 10% sativa. It combines several ruderalis landraces, and has the robustness of a typical ruderalis strain. It’s been bred to have a higher THC than other ruderalis varieties. The plants are relatively short in height, and they produce an earthy, sweet scent, with a hint of coffee. The stone is relaxing and calming, both physically and mentally.',
      complection:
        'Ruderalis Skunk Regular is 90% indica. It combines the strength and resiliance of a classic ruderalis, with the potency of Skunk #1. The plants are compact enough to be grown in even small indoor spaces, and can be grown outdoors in most climates, making them really easy to cultivate. Users claim that the high is relaxing and sedative, and the scent pleasantly skunky; earthy and sweet, with a touch of coffee and liquorice. This is a regular variant, which means that the seeds produce both female and male plants.',
    },
    reviews: [
      {
        fullName: 'Lory',
        reviewRating: 4.7,
        reviewDate: 'September 31, 2022 at 21:52 am',
        feedback:
          'Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.',
        benefit: 'In nulla posuere sollicitudin aliquam ultrices.',
        disadvantages:
          'Viverra aliquet eget sit amet tellus cras adipiscing enim.',
      },
      {
        fullName: 'Elif',
        reviewRating: 4,
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
      ingredients: '70% Indica / 30% Sativa',
      flavors: 'Earthy and rich, with notes of coffee beans and sweet liquorice',
      recommendedUsage:
        'Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more',
    },
  },
];

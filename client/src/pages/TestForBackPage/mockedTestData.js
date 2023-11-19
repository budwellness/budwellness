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
    rate: 3.6,
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
    rate: 4.8,
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
];

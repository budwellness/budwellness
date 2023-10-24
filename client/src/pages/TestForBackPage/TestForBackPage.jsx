/* eslint-disable */

import React from 'react';
import { loginUser, uploadSingleProduct } from '../../helpers/sendRequest';
import { useGetAllProductsQuery } from '../../store/serverResponse/danitApi.products';

const mockProductBud = {
  enabled: true,
  imageUrls: [
    "https://ca.tokyosmoke.com/cdn/shop/products/e96a18b5991250526e86e1ead709a109_1000x.png?v=1599148085",
    "https://static.wixstatic.com/media/645e3f_38fbb2f262644fb3a766446abd5aeaad~mv2.webp",
    "https://static.wixstatic.com/media/645e3f_348a1920cbfc402986b118677e654431~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/645e3f_348a1920cbfc402986b118677e654431~mv2.png"
  ],
  quantity: 6,
  rate: 4.4,
  categories: " Edible",
  name: "Bhang Milk Chocolate",
  currentPrice: 25,
  previousPrice: 0,
  sale: 0,
  plantType: "Sativa",
  thc: 10,
  cbd: 1,
  effects: [
    "Giggly",
    "Relaxed",
    "Sleepy"
  ],
  tags: [
    "Cannabis",
    "edible"
  ],
  itemNo: 867443,
  description: {
    short: "Bhang® Milk Chocolate starts with sustainably-sourced and fair-trade cacao and is Powered by INDIVA™. Produced in Indiva’s state-of-the-art facility based in London, Ontario, and backed by a fifth generation chocolatier, Bhang® MilkChocolate offers a cannabis-free flavour that offer just the right hint of sweetness.",
    completion: "Cannabis-infused edible products combine cannabis distillate with premium ingredients. They offer the same delayed onset time and smoke-free experience of capsules and oils, packaged within a tasty snack.."
  },
  reviews: [
    {
      fullName: "Bhang Milk Chocolate",
      reviewRating: 5,
      reviewDate: "September 30, 2021 at 9:52 am",
      feedback: "Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.",
      benefit: "In nulla posuere sollicitudin aliquam ultrices.",
      disadvantages: "Viverra aliquet eget sit amet tellus cras adipiscing enim."
    },
    {
      fullName: "Charles Sanchez",
      reviewRating: 5,
      reviewDate: "October 1, 2021 at 11:52 am",
      reviewText: "I usually only eat a square and that’s good enough for me. It’s very potent",
      feedback: "I actually take a half of one cause the first time I took a full one and I felt a little too good lol but it’s very manageable with the half dose. Then I can still get stuff done and go about my day but I just enjoy it a little more.",
      benefit: "",
      disadvantages: ""
    }
  ],
  additionalInformation: {
    ingredients: "MILK CHOCOLATE (SUGAR, HYDROGENATED PALM KERNEL OIL, NONFAT DRY MILK, COCOA PROCESSED WITH ALKALI, SORBITAN MONOSTEARATE, LACTIC ACID ESTERS OF MONO AND DIGLYCERIDES WITH CITRIC ACID TO PROTECT FLAVOR, SOY LECITHIN (AN EMULSIFIER), ARTIFICIAL FLAVOR), MCT OIL, HEMP EXTRACT",
    flavors: "MAY CONTAIN PEANUTS, TREE NUTS, MILK CHOCOLATE",
    recommendedUsage: "Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more."
  }
}
const mockProductApiExample = {
  name: "new product for testing purposes",
  currentPrice: 199.99,
  previousPrice: 250,
  categories: "men",
  imageUrls: [
    "img/products/men/001.png",
    "img/products/men/002.png",
    "img/products/men/003.png",
    "img/products/men/004.png"
  ],
  quantity: 100,
  color: "red",
  productUrl: "/men",
  brand: "braaaand",
  myCustomParam: "some string or json for custom param"
};

const productsJSON = [
  {
    "enabled": true,
    "imageUrls": [
      "https://ca.tokyosmoke.com/cdn/shop/products/e96a18b5991250526e86e1ead709a109_1000x.png?v=1599148085",
      "https://static.wixstatic.com/media/645e3f_38fbb2f262644fb3a766446abd5aeaad~mv2.webp",
      "https://static.wixstatic.com/media/645e3f_348a1920cbfc402986b118677e654431~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/645e3f_348a1920cbfc402986b118677e654431~mv2.png"
    ],
    "quantity": 6,
    "rate": 4.4,
    "categories": " Edible",
    "name": "Bhang Milk Chocolate",
    "currentPrice": 25.00,
    "previousPrice": 0,
    "sale": 0,
    "plantType": "Sativa",
    "thc": 10,
    "cbd": 1,
    "effects": [
      "Giggly",
      "Relaxed",
      "Sleepy"
    ],
    "tags": [
      "Cannabis",
      "edible"
    ],
    "itemNo": 867443,
    "description": {
      "short": "Bhang® Milk Chocolate starts with sustainably-sourced and fair-trade cacao and is Powered by INDIVA™. Produced in Indiva’s state-of-the-art facility based in London, Ontario, and backed by a fifth generation chocolatier, Bhang® MilkChocolate offers a cannabis-free flavour that offer just the right hint of sweetness.",
      "completion": "Cannabis-infused edible products combine cannabis distillate with premium ingredients. They offer the same delayed onset time and smoke-free experience of capsules and oils, packaged within a tasty snack.."
    },
    "reviews": [
      {
        "fullName": "Bhang Milk Chocolate",
        "reviewRating": 5,
        "reviewDate": "September 30, 2021 at 9:52 am",
        "feedback": "Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.",
        "benefit": "In nulla posuere sollicitudin aliquam ultrices.",
        "disadvantages": "Viverra aliquet eget sit amet tellus cras adipiscing enim."
      },
      {
        "fullName": "Charles Sanchez",
        "reviewRating": 5,
        "reviewDate": "October 1, 2021 at 11:52 am",
        "reviewText": "I usually only eat a square and that’s good enough for me. It’s very potent",
        "feedback": "I actually take a half of one cause the first time I took a full one and I felt a little too good lol but it’s very manageable with the half dose. Then I can still get stuff done and go about my day but I just enjoy it a little more.",
        "benefit": "",
        "disadvantages": ""
      }
    ],
    "additionalInformation": {
      "ingredients": "MILK CHOCOLATE (SUGAR, HYDROGENATED PALM KERNEL OIL, NONFAT DRY MILK, COCOA PROCESSED WITH ALKALI, SORBITAN MONOSTEARATE, LACTIC ACID ESTERS OF MONO AND DIGLYCERIDES WITH CITRIC ACID TO PROTECT FLAVOR, SOY LECITHIN (AN EMULSIFIER), ARTIFICIAL FLAVOR), MCT OIL, HEMP EXTRACT",
      "flavors": "MAY CONTAIN PEANUTS, TREE NUTS, MILK CHOCOLATE",
      "recommendedUsage": "Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more."
    }
  },
  {
    "enabled": true,
    "imageUrls": [
      "https://ocs.ca/cdn/shop/products/00851653000172_00_compress_330154_1024x1024.jpg?v=1694408215%22%20alt=%22Chocolate%20Brownies%20-%20%22",
      "https://ocs.ca/cdn/shop/products/00851653000172_01_compress_330154_e87fa6ae-8422-4ea3-aa6c-bd79df3dc07c_1024x1024.jpg?v=1694408215%22%20alt=%22Chocolate%20Brownies%20-%20%22",
      "https://images.dutchie.com/f0c735369143fdfbe99b17f82f827484?auto=format&fit=fill&fill=solid&ixlib=react-9.5.4&w=344&h=330&dpr=1&q=75"
    ],
    "quantity": 10,
    "rate": 4.4,
    "categories": " Edible",
    "name": "Chocolate Brownies by Olli",
    "currentPrice": 7.00,
    "previousPrice": 0,
    "sale": 10,
    "plantType": "Hybrid",
    "thc": 10,
    "cbd": 5,
    "effects": [
      "Giggly",
      "Relaxed",
      "Sleepy"
    ],
    "tags": [
      "Cannabis",
      "edible"
    ],
    "itemNo": 192929,
    "description": {
      "short": "Olli’s Chocolate Brownies are the perfect blend between culinary and cannabis. Each package contains two small batch, nut-free brownies made for sharing. Each brownie contains 5 mg THC and 2.5 mg CBD, uses thoughtful ingredients and provides a chewy, soft and decadent chocolate flavour curated by Olli’s Michelin-starred trained Executive Chef.",
      "completion": "Olli’s Chocolate Brownies are the perfect blend between culinary and cannabis. Each package contains two small batch, nut-free brownies made for sharing. Each brownie contains 5 mg THC and 2.5 mg CBD, uses thoughtful ingredients and provides a chewy, soft and decadent chocolate flavour curated by Olli’s Michelin-starred trained Executive Chef. Soft and chewy, small batch, bite-sized brownies with a decadent chocolate flavour. Nut-free."
    },
    "reviews": [
      {
        "fullName": "Richard Dully ",
        "reviewRating": 5,
        "reviewDate": "September 30, 2021 at 9:52 am",
        "feedback": "Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.",
        "benefit": "In nulla posuere sollicitudin aliquam ultrices.",
        "disadvantages": "Viverra aliquet eget sit amet tellus cras adipiscing enim."
      },
      {
        "fullName": "Charles Sanchez",
        "reviewRating": 5,
        "reviewDate": "October 1, 2021 at 11:52 am",
        "reviewText": "I usually only eat a square and that’s good enough for me. It’s very potent",
        "feedback": "I actually take a half of one cause the first time I took a full one and I felt a little too good lol but it’s very manageable with the half dose. Then I can still get stuff done and go about my day but I just enjoy it a little more.",
        "reviewImage": [
          "https://static.wixstatic.com/media/645e3f_38fbb2f262644fb3a766446abd5aeaad~mv2.webp",
          "https://ca.tokyosmoke.com/cdn/shop/products/e96a18b5991250526e86e1ead709a109_1000x.png?v=1599148085"
        ],
        "benefit": "",
        "disadvantages": ""
      }
    ],
    "additionalInformation": {
      "ingredients": "Sugars (sucrose, glucose syrup, fructose, dextrose, cultured (cane) sugar), Enriched wheat flour (Wheat), Canola oil, Liquid whole eggs (Egg), Cocoa powder, Water, Glycerin, Soy lecithin (Soy), Natural and artificial flavour, Salt, Xanthan gum, Rosemary extract, Ascorbic acid, Sunflower oil, Cannabis distillate",
      "flavors": "soft and decadent chocolate",
      "recommendedUsage": "We recommend starting with half the cake and after an hour if the effect is not enough, add the second half."
    }
  },
  {
    "enabled": true,
    "imageUrls": [
      "https://nuleafnaturals.com/wp-content/uploads/2020/07/NLN_2021_CBD_Oil_Human_900_800px.jpg",
      "https://nuleafnaturals.com/wp-content/uploads/2020/07/NuLeaf-Oil-900mg-box-bottle.jpg",
      "https://nuleafnaturals.com/wp-content/uploads/2020/07/CL-2DH-NuLeaf-Bottle-Label-Human-15mL-1-24-22_web_sup_facts.png"
    ],
    "quantity": 7,
    "rate": 4.4,
    "categories": " Oil",
    "name": "Full Spectrum CBD Oil",
    "currentPrice": 88.00,
    "previousPrice": 0,
    "sale": 0,
    "plantType": "Hybrid",
    "thc": 10,
    "cbd": 10,
    "effects": [
      "Anesthetic",
      "Relaxed",
      "Sleepy"
    ],
    "tags": [
      "Cannabis",
      "oil"
    ],
    "itemNo": 333221,
    "description": {
      "short": "CBD oil is a whole-plant extract containing a full spectrum of naturally occurring synergistic cannabinoids and terpenes with a potency of 60mg/mL. NuLeaf Naturals suggests a starting dose of ten drops (30mg) daily or as needed.",
      "completion": "This cannabis oil oral spray features a blend of hybrid strains with balanced THC-to-CBD ratios. Good wd. No extras. Our oils are made with cannabis extract and non-GMO, coconut-derived MCT oil that cannot be smoked or vapourized."
    },
    "reviews": [
      {
        "fullName": "Richard Dully ",
        "reviewRating": 5,
        "reviewDate": "September 30, 2021 at 9:52 am",
        "feedback": "Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.",
        "benefit": "In nulla posuere sollicitudin aliquam ultrices.",
        "disadvantages": "Viverra aliquet eget sit amet tellus cras adipiscing enim."
      },
      {
        "fullName": "Charles Sanchez",
        "reviewRating": 5,
        "reviewDate": "October 1, 2021 at 11:52 am",
        "reviewText": "I usually only eat a square and that’s good enough for me. It’s very potent",
        "feedback": "I actually take a half of one cause the first time I took a full one and I felt a little too good lol but it’s very manageable with the half dose. Then I can still get stuff done and go about my day but I just enjoy it a little more.",
        "benefit": "",
        "disadvantages": ""
      }
    ],
    "additionalInformation": {
      "ingredients": "Full Spectrum Hemp Extract, Organic Virgin Hemp Seed Oil",
      "flavors": "Earthy and musky, piney and herbal",
      "recommendedUsage": "We recommend starting with half the cake and after an hour if the effect is not enough, add the second half."
    }
  },
  {
    "enabled": true,
    "imageUrls": [
      "https://images.prom.ua/4209399693_w640_h640_4209399693.jpg",
      "https://images.prom.ua/4209399692_w640_h640_4209399692.jpg",
      "https://images.prom.ua/4209399694_w640_h640_4209399694.jpg"
    ],
    "quantity": 6,
    "rate": 4.4,
    "categories": " Oil",
    "name": "Medipharm Labs CBD50 Plus Formula",
    "currentPrice": 90.00,
    "previousPrice": 0,
    "sale": 10,
    "plantType": "Hybrid",
    "thc": 10,
    "cbd": 30,
    "effects": [
      "Aroused",
      "Euphoric",
      "Giggly"
    ],
    "tags": [
      "Cannabis",
      "oil"
    ],
    "itemNo": 887686,
    "description": {
      "short": "Papa & Barkley’s tinctures are vegan and fast-metabolizing, with a customizable dosage experience, carefully crafted with whole-plant extraction. Our solventless, chemical-free infusion process preserves the plant’s full spectrum of cannabinoids, terpenes, and phytonutrients for maximum therapeutic benefits.",
      "completion": "Our 30:1 tincture is high in CBD and low in THC and is great for those looking to ease daily stress and discomfort. Best for all cannabis consumers, especially new ones as there will be little to no psychoactive effect. Crafted with only two ingredients, MCT Oil and cannabis oil, and can be felt within 15 minutes, make it a perfect natural solution for those seeking a quick-acting, easy-to-use cannabis solution to improve both body and mind. Papa & Barkley’s tinctures are vegan and fast-metabolizing, with a customizable dosage experience, carefully crafted with whole-plant extraction. Our solventless, chemical-free infusion process preserves the plant’s full spectrum of cannabinoids, terpenes, and phytonutrients for maximum therapeutic benefits."
    },
    "reviews": [
      {
        "fullName": "Bhang Milk Chocolate",
        "reviewRating": 5,
        "reviewDate": "September 30, 2021 at 9:52 am",
        "feedback": "Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.",
        "benefit": "In nulla posuere sollicitudin aliquam ultrices.",
        "disadvantages": "Viverra aliquet eget sit amet tellus cras adipiscing enim."
      },
      {
        "fullName": "Charles Sanchez",
        "reviewRating": 5,
        "reviewDate": "October 1, 2021 at 11:52 am",
        "reviewText": "I usually only eat a square and that’s good enough for me. It’s very potent",
        "feedback": "I actually take a half of one cause the first time I took a full one and I felt a little too good lol but it’s very manageable with the half dose. Then I can still get stuff done and go about my day but I just enjoy it a little more.",
        "benefit": "",
        "disadvantages": ""
      }
    ],
    "additionalInformation": {
      "ingredients": "MCT Oil, Cannabis",
      "flavors": "Tree Nut (Coconut)",
      "recommendedUsage": "Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more."
    }
  },
  {
    "enabled": true,
    "imageUrls": [
      "https://ocs.ca/cdn/shop/products/00688083011092_a1cc_compressed_110016_1024x1024.jpg?v=1697463553%22",
      "https://w7a7p5v9.rocketcdn.me/wp-content/uploads/2023/05/doja-ucorn-cake-review-cannabis-photos-4-merry-jade-1024x1024.webp",
      "https://w7a7p5v9.rocketcdn.me/wp-content/uploads/2023/05/doja-ucorn-cake-review-cannabis-photos-5-merry-jade-1024x1024.webp"
    ],
    "quantity": 7,
    "rate": 4.4,
    "categories": " Flower",
    "name": "Doja Unicorn Cake",
    "currentPrice": 8.00,
    "previousPrice": 0,
    "sale": 10,
    "plantType": "Sativa",
    "thc": 29,
    "cbd": 0.1,
    "effects": [
      "Relaxed",
      "Euphoric",
      "Hungry"
    ],
    "tags": [
      "Cannabis",
      "flower"
    ],
    "itemNo": 423221,
    "description": {
      "short": "This exotic hybrid strain is a mix of Wedding Cake x Unicorn Poop with vanilla cake & kush aromas.",
      "completion": "Doja Ucorn Cake, also known as Wedding Poop, is a high THC hybrid strain created by crossing Wedding Cake and Unicorn Poop. This cultivar is known to smell like vanilla cake and classic Kush. The dominant terpenes include myrcene and limonene. This cultivar produces forest green buds with dark orange hairs."
    },
    "reviews": [
      {
        "fullName": "Bhang Milk Chocolate",
        "reviewRating": 5,
        "reviewDate": "September 30, 2021 at 9:52 am",
        "feedback": "Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.",
        "benefit": "In nulla posuere sollicitudin aliquam ultrices.",
        "disadvantages": "Viverra aliquet eget sit amet tellus cras adipiscing enim."
      },
      {
        "fullName": "Charles Sanchez",
        "reviewRating": 5,
        "reviewDate": "October 1, 2021 at 11:52 am",
        "reviewText": "I usually only eat a square and that’s good enough for me. It’s very potent",
        "feedback": "I actually take a half of one cause the first time I took a full one and I felt a little too good lol but it’s very manageable with the half dose. Then I can still get stuff done and go about my day but I just enjoy it a little more.",
        "benefit": "",
        "disadvantages": ""
      }
    ],
    "additionalInformation": {
      "ingredients": "Wedding Cake and Unicorn Poop",
      "flavors": "Citrus",
      "recommendedUsage": "Begin with a small portion, wait for the effects to kick in, and then decide if you want to consume more."
    }
  },
  {
    "enabled": true,
    "imageUrls": [
      "https://ca.tokyosmoke.com/cdn/shop/products/e96a18b5991250526e86e1ead709a109_1000x.png?v=1599148085",
      "https://static.wixstatic.com/media/645e3f_38fbb2f262644fb3a766446abd5aeaad~mv2.webp",
      "https://static.wixstatic.com/media/645e3f_348a1920cbfc402986b118677e654431~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/645e3f_348a1920cbfc402986b118677e654431~mv2.png"
    ],
    "quantity": 6,
    "rate": 4.4,
    "categories": "Flower",
    "name": "Pink Diablo",
    "currentPrice": 14.89,
    "previousPrice": 0,
    "sale": 35,
    "plantType": "Hybrid",
    "thc": 27,
    "cbd": 1,
    "effects": [
      "Giggly",
      "Relaxed",
      "Anesthetic"
    ],
    "tags": [
      "Cannabis",
      "flower"
    ],
    "itemNo": 978006,
    "description": {
      "short": "Pink Diablo Weed Strain is an Indica dominant hybrid marijuana that is popular for its sedative effects, stunning colouring and sweet, spicy flavour. It is a crossbreed of the famous Pink Kush and Diablo strains, with a high THC content of 25%.",
      "completion": "Pink Diablo Weed Strain is an Indica dominant hybrid marijuana that is popular for its sedative effects, stunning colouring and sweet, spicy flavour. It is a crossbreed of the famous Pink Kush and Diablo strains, with a high THC content of 25%. Pink Diablo weed strain has a hybrid ratio of 70% Indica, and 30 % Sativa. The high of this strain hits you rapidly and lasts for hours. At first, you will experience an incredible clear-headed high, followed by a soft buzz that overcomes your body. This potent strain will later offer a relaxing body high, and before you realize it, you will have fallen into a deep slumber. The effects of this marijuana strain provide a suitable remedy for depression, loss of appetite, nausea, insomnia, and chronic pain."
    },
    "reviews": [
      {
        "fullName": "Bhang Milk Chocolate",
        "reviewRating": 5,
        "reviewDate": "September 30, 2021 at 9:52 am",
        "feedback": "Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.",
        "benefit": "In nulla posuere sollicitudin aliquam ultrices.",
        "disadvantages": "Viverra aliquet eget sit amet tellus cras adipiscing enim."
      },
      {
        "fullName": "Charles Sanchez",
        "reviewRating": 5,
        "reviewDate": "October 1, 2021 at 11:52 am",
        "reviewText": "I usually only eat a square and that’s good enough for me. It’s very potent",
        "feedback": "I actually take a half of one cause the first time I took a full one and I felt a little too good lol but it’s very manageable with the half dose. Then I can still get stuff done and go about my day but I just enjoy it a little more.",
        "benefit": "",
        "disadvantages": ""
      }
    ],
    "additionalInformation": {
      "ingredients": "70% Indica, 30 % Sativa",
      "flavors": "Candy / Earthy / Floral / Fruity / Gassy / Pungent / Sweet",
      "recommendedUsage": "Many use this strain to help treat insomnia and aid them in getting a good night's rest."
    }
  },
  {
    "enabled": true,
    "imageUrls": [
      "https://leafly-public.imgix.net/products/photos/Yl1zwZDThmTFowPzrqJB_cbd-preroll-bubba-kush.jpg?auto=compress%2Cformat&w=1000&dpr=1",
      "https://leafly-public.imgix.net/products/photos/dlngcdEgRXaQAlVMxhCd_cbd-flower-king-sized-cone.png?auto=compress%2Cformat&w=1000&dpr=1",
      "https://136583061.cdn6.editmysite.com/uploads/1/3/6/5/136583061/s648976623680969287_p25_i10_w1080.png?width=800&optimize=medium"
    ],
    "quantity": 6,
    "rate": 4.4,
    "categories": "Pre-rolls",
    "name": "Bubba Kush King-Sized Cone",
    "currentPrice": 14.89,
    "previousPrice": 0,
    "sale": 35,
    "plantType": "Indica",
    "thc": 17,
    "cbd": 0.1,
    "effects": [
      "Sleepy",
      "Relaxed",
      "Hungry"
    ],
    "tags": [
      "Cannabis",
      "pre-rolls"
    ],
    "itemNo": 444666,
    "description": {
      "short": "Our king size pre-filled cones are filled with over a gram of high CBD hemp flower. We use fresh, premium buds with absolutely no trim or shake to provide the best overall smoking experience.",
      "completion": "Our king size pre-filled cones are filled with over a gram of high CBD hemp flower. We use fresh, premium buds with absolutely no trim or shake to provide the best overall smoking experience. These giant cones contain top-shelf hemp flower, that was slow cured to keep all the rich cannabinoids and terpenes intact. All of our hemp flower strains are grown in the USA and are lab-tested."
    },
    "reviews": [
      {
        "fullName": "Bhang Milk Chocolate",
        "reviewRating": 5,
        "reviewDate": "September 30, 2021 at 9:52 am",
        "feedback": "Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.",
        "benefit": "In nulla posuere sollicitudin aliquam ultrices.",
        "disadvantages": "Viverra aliquet eget sit amet tellus cras adipiscing enim."
      },
      {
        "fullName": "Charles Sanchez",
        "reviewRating": 5,
        "reviewDate": "October 1, 2021 at 11:52 am",
        "reviewText": "I usually only eat a square and that’s good enough for me. It’s very potent",
        "feedback": "I actually take a half of one cause the first time I took a full one and I felt a little too good lol but it’s very manageable with the half dose. Then I can still get stuff done and go about my day but I just enjoy it a little more.",
        "benefit": "",
        "disadvantages": ""
      }
    ],
    "additionalInformation": {
      "ingredients": "100% Indica",
      "flavors": "round and deep notes of chocolate and coffee",
      "recommendedUsage": "Many use this strain to help treat insomnia and aid them in getting a good night's rest."
    }
  },
  {
    "enabled": true,
    "imageUrls": [
      "https://www.coppermountainhemp.com/wp-content/uploads/2021/06/d8-preroll-purple-punch.jpg",
      "https://cbdworldmall.com/wp-content/uploads/2021/03/delta-8-THC-prerolls.jpeg",
      "https://delta8pro.com/wp-content/uploads/2022/05/Delta-8-Pro-D8-THC-Infused-Hemp-Pre-Roll-Relaxed.jpg"
    ],
    "quantity": 6,
    "rate": 4.4,
    "categories": "Pre-rolls",
    "name": "Purple Punch HHC Chillum",
    "currentPrice": 45.00,
    "previousPrice": 0,
    "sale": 0,
    "plantType": "Indica",
    "thc": 0.2,
    "cbd": 16,
    "effects": [
      "Energetic",
      "Relaxed",
      "Happy"
    ],
    "tags": [
      "Cannabis",
      "pre-rolls"
    ],
    "itemNo": 534670,
    "description": {
      "short": "The infused pre-roll has evolved. The Habit Chillum is packed with 1 full gram of cannabis excellence.",
      "completion": "Purple Punch is the sweet and sedating union of two indica-dominant classics. By breeding Larry OG with Granddaddy Purple, the astonishing trichome laden Purple Punch was born, smelling of grape candy, blueberry muffins, and tart Kool-Aid. The potency of this strain gives the consumer a one-two punch to the head and body, initially landing between the eyes and settling down into the limbs. Purple Punch is a delicious dessert strain that is best suited for after dinner. Its effects may help with managing nausea, stress, minor body aches, and sleeplessness."
    },
    "reviews": [
      {
        "fullName": "Michael",
        "reviewRating": 5,
        "reviewDate": "September 30, 2021 at 9:52 am",
        "feedback": "Convallis posuere morbi leo urna molestie at elementum. Quis auctor elit sed vulputate mi. In nulla posuere sollicitudin aliquam ultrices.",
        "benefit": "In nulla posuere sollicitudin aliquam ultrices.",
        "disadvantages": "Viverra aliquet eget sit amet tellus cras adipiscing enim."
      },
      {
        "fullName": "Charles Sanchez",
        "reviewRating": 5,
        "reviewDate": "October 1, 2021 at 11:52 am",
        "reviewText": "I usually only eat a square and that’s good enough for me. It’s very potent",
        "feedback": "I actually take a half of one cause the first time I took a full one and I felt a little too good lol but it’s very manageable with the half dose. Then I can still get stuff done and go about my day but I just enjoy it a little more.",
        "benefit": "",
        "disadvantages": ""
      }
    ],
    "additionalInformation": {
      "ingredients": "100% Indica",
      "flavors": "red wine, chocolate, and citrus.",
      "recommendedUsage": "Many use this strain to help treat insomnia and aid them in getting a good night's rest."
    }
  }
]

function TestForBackPage() {

  const loginHandler = async () => {
    console.log('loginHandler');
    const loginOrEmail = 'customer@gmail.com';
    const password = '1111111';
    const { token } = await loginUser(loginOrEmail, password)
    if (token) {
      localStorage.setItem('token', token)
    }
  }

  const uploadHandler = async () => {
    productsJSON.forEach(async (product) => await uploadSingleProduct(product))
    // console.log('loginHandler');
    // const response = await uploadSingleProduct(mockProductBud);
  }

  const checkHandler = () => {
    const token = localStorage.getItem('token')
    console.log('loginHandler token: ', token);
  }

  const checkToken = () => {
    console.log(localStorage.getItem('token'));
  }

  const getSlidesHandler = () => {

  }

  const { data } = useGetAllProductsQuery()

  console.log(data);

  return (
    <div>
      <button onClick={() => loginHandler()}>Login</button>
      {/* <button onClick={() => uploadHandler()}>Upload</button> */}
      <button onClick={() => checkHandler()}>Check</button>
      <button onClick={() => checkToken()}>Check TOKEN</button>
      <button onClick={() => getSlides()}>Check TOKEN</button>
    </div>
  );
}

export default TestForBackPage;

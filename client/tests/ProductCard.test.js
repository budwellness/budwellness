// /* eslint-disable react/jsx-filename-extension */
// /* eslint-disable no-undef */
// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from '../src/store';
// import { render, fireEvent } from '@testing-library/react';
// import ProductCard from '../src/components/ProductCard/ProductCard';

// describe('ProductCard Component', () => {
//   const product = {
//     imageUrls: ['image1.jpg'],
//     thc: 15,
//     cbd: 2,
//     sale: 0.9,
//     itemNo: 123,
//     previousPrice: 20,
//     currentPrice: 18,
//     rate: 4.5,
//     name: 'Sample Product',
//     classNames: 'custom-class',
//   };

//   test('should render the product card with provided details', () => {
//     const { getByText, getByAltText } = render(
//       <Provider store={store}>
//         <Router>
//           <ProductCard product={product} />
//         </Router>
//       </Provider>
//     );

//     const nameElement = getByText('Sample Product');
//     const thcElement = getByText('THC');
//     const cbdElement = getByText('CBD');
//     const thcCategoryElement = getByText('11.00-20.00%');
//     const cbdCategoryElement = getByText('2.00-5.00%');
//     const previousPriceElement = getByText('$20.00');
//     const currentPriceElement = getByText('$18.00');
//     const imageElement = getByAltText('Sample Product');

//     expect(nameElement).toBeInTheDocument();
//     expect(thcElement).toBeInTheDocument();
//     expect(cbdElement).toBeInTheDocument();
//     expect(thcCategoryElement).toBeInTheDocument();
//     expect(cbdCategoryElement).toBeInTheDocument();
//     expect(previousPriceElement).toBeInTheDocument();
//     expect(currentPriceElement).toBeInTheDocument();
//     expect(imageElement).toBeInTheDocument();
//   });

//   test('should apply custom classNames to the product card', () => {
//     const { container } = render(
//       <Router>
//         <ProductCard product={product} />
//       </Router>,
//     );
//     const cardElement = container.querySelector('.custom-class');
//     expect(cardElement).toBeInTheDocument();
//   });

//   test("should call the provided onClick function when 'Add to cart' button is clicked", () => {
//     const onClickMock = jest.fn();
//     const { getByText } = render(
//       <Router>
//         <ProductCard product={product} onClick={onClickMock} />
//       </Router>,
//     );
//     const addToCartButton = getByText('Add to cart');
//     fireEvent.click(addToCartButton);
//     expect(onClickMock).toHaveBeenCalledTimes(1);
//   });
// });

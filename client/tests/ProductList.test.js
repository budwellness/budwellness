// /* eslint-disable no-undef */
// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { render } from '@testing-library/react';
// import ProductList from '../src/components/ProductList/ProductList';
// import { Provider } from 'react-redux';
// import store from '../src/store';

// describe('ProductList Component', () => {
//   test('should render a list of products when there are products', () => {
//     const products = [
//       {
//         id: 1,
//         name: 'Product 1',
//         thc: 15,
//         cbd: 2,
//         sale: 0.9,
//         itemNo: 123,
//         previousPrice: 20,
//         currentPrice: 18,
//         rate: 4.5,
//         imageUrls: ['image1.jpg'],
//       },
//       {
//         id: 2,
//         name: 'Product 2',
//         thc: 10,
//         cbd: 5,
//         sale: 0.8,
//         itemNo: 124,
//         previousPrice: 25,
//         currentPrice: 22,
//         rate: 4.0,
//         imageUrls: ['image2.jpg'],
//       },
//     ];

//     const { getByText } = render(
//       // eslint-disable-next-line react/jsx-filename-extension
//       <Provider store={store}>
//         <Router>
//           <ProductList products={products} error={null} />
//         </Router>
//       </Provider>
//     );

//     const product1Name = getByText('Product 1');
//     const product2Name = getByText('Product 2');

//     expect(product1Name).toBeInTheDocument();
//     expect(product2Name).toBeInTheDocument();
//   });

//   test('should render an error message when there is an error', () => {
//     const error = 'An error occurred';
//     const { getByText } = render(<ProductList products={null} error={error} />);
//     const errorMessage = getByText('Oh no, there was an error');
//     expect(errorMessage).toBeInTheDocument();
//   });

//   test('should render no products when the products array is empty', () => {
//     const error = 'An error occurred';
//     const { container } = render(<ProductList products={[]} error={error} />);
//     const productsWrapper = container.querySelector(
//       '.productList__productsWrapper'
//     );
//     expect(productsWrapper).toBeNull();
//   });
// });

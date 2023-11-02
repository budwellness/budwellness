/* eslint-disable */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import PopularProducts from '../src/components/PopularProducts/PopularProducts';

jest.mock(
  '../src/components/PopularProducts/PopularSwiper/PopularSwiper',
  () => () => <div>PopularSwiper</div>
);
jest.mock('../src/components/Button/Button', () => () => (
  <button>Button</button>
));

describe('PopularProducts component Smoke test (Snapshot test)', () => {
  test('should PopularProducts render', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <PopularProducts />
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

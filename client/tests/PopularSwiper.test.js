/* eslint-disable */
import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/store';
import { render, screen } from '@testing-library/react';
import PopularSwiper from '../src/components/PopularProducts/PopularSwiper/PopularSwiper';

describe('PopularSwiper component test', () => {
  test('should render in the document', () => {
    const { container } = render(
      <Provider store={store}>
        <PopularSwiper />
      </Provider>
    );

    expect(container).toBeInTheDocument();
  });

  test('should displays popular product cards in swiper container', () => {
    const { container } = render(
      <Provider store={store}>
        <PopularSwiper />
      </Provider>
    );
    const swiperContainer = container.querySelector('.mySwiper');

    expect(swiperContainer).toBeInTheDocument();
  });
});

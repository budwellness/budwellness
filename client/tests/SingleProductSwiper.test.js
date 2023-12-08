/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';
import SingleProductSwiper from '../src/components/SingleProductSwiper/SingleProductSwiper';

describe('SingleProductSwiper testing', () => {
  test('should render SingleMainProductSwiper and be in the document', () => {
    const { container } = render(
      <SingleProductSwiper images={['image1.jpg', 'image2.jpg']} />
    );

    const component = container.querySelector('.myMainSwiper');

    expect(component).toBeInTheDocument();
  });

  test('should render SingleProductSwiper and be in the document', () => {
    const { container } = render(
      <SingleProductSwiper images={['image1.jpg', 'image2.jpg']} />
    );

    const component = container.querySelector('.mySwiper');

    expect(component).toBeInTheDocument();
  });
});

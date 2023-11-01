/* eslint-disable */
import React from 'react';
import { render, screen } from '@testing-library/react';
import RatingStars from '../src/components/RatingStars/RatingStars';

jest.mock('react-rating-stars-component', () => () => <div>ReactStars</div>);

describe('RatingStars component test', () => {
  test('should render in the document', () => {
    render(<RatingStars rate={3} edit={false} />);
    screen.debug();
    expect(screen.getByText('ReactStars')).toBeInTheDocument();
  });
});

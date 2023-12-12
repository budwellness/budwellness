/* eslint-disable */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../src/components/Button/Button';

describe('Button testing snapshot', () => {
  test('should Button match snapshot', () => {
    const { asFragment } = render(
      <Button text="BUTTON" backgroundColor="aqua" type="button" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Button works', () => {
  test('should Button render with provided text', () => {
    render(<Button text="BUTTON" backgroundColor="aqua" type="button" />);
    expect(screen.getByText('BUTTON')).toBeInTheDocument();
  });
  test('should onClick function call when clicked', () => {
    const onClickMock = jest.fn();
    render(
      <Button
        text="BUTTON"
        backgroundColor="aqua"
        type="button"
        onClick={onClickMock}
      />
    );
    const buttonElem = screen.getByText('BUTTON');
    fireEvent.click(buttonElem);
    expect(onClickMock).toHaveBeenCalled();
  });
});

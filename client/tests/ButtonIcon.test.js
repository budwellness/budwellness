/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonIcon from '../src/components/ButtonIcon/ButtonIcon';

describe('ButtonIcon Component', () => {
  test('should render the button with provided children', () => {
    const { getByText } = render(
      <ButtonIcon classNames="custom-class">Click Me</ButtonIcon>,
    );
    const buttonElement = getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
  });

  test('should apply custom classNames to the button', () => {
    const { container } = render(
      <ButtonIcon classNames="custom-class">Click Me</ButtonIcon>,
    );
    const buttonElement = container.querySelector('.custom-class');
    expect(buttonElement).toBeInTheDocument();
  });

  test('should call the provided onClick function when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <ButtonIcon classNames="custom-class" onClick={onClickMock}>
        Click Me
      </ButtonIcon>,
    );
    const buttonElement = getByText('Click Me');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('should have default onClick as a no-op function if not provided', () => {
    const { getByText } = render(
      <ButtonIcon classNames="custom-class">Click Me</ButtonIcon>,
    );
    const buttonElement = getByText('Click Me');
    fireEvent.click(buttonElement);
  });
});

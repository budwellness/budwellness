/* global  jest, describe, test, expect, beforeEach */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import ModalAddToCart from '../src/components/ModalAddToCart/ModalAddToCart';

describe('ModalAddToCart component', () => {
  const mockStore = configureStore(); // Создание макетного store
  const initialState = {
    // Инициализация вашего начального состояния Redux
    user: { isUserLogin: false, token: null },
    cart: { cartStoreData: [], localCartStoreData: [] },
    wishlist: { wishList: [] },
    products: {
      selectedProduct: {
        _id: '123',
        itemNo: '001',
        name: 'Product 1',
        description: { short: 'Short description of Product 1' },
        currentPrice: 123.45,
        rate: 4.5,
        imageUrls: ['/img/1.jpg', '/img/2.jpg'],
        reviews: [],
      },
    },
  };
  let store;

  beforeEach(() => {
    store = mockStore(initialState); // Создание нового store перед каждым тестом

    // Создание макета для localStorage
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
    };

    // Замена глобального localStorage на макетный объект
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true,
    });

    // Предоставление макетных данных для localStorage перед каждым тестом
    localStorageMock.getItem.mockReturnValue(
      JSON.stringify([{ itemNo: 'someItemNo' }]), // ваш макет данных в localStorage
    );
  });

  // Тестирование отображения компонента
  test('should render ModalAddToCart component correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalAddToCart />
        </BrowserRouter>
      </Provider>,
    );

    // Проверка, что компонент отрисован правильно
    expect(getByText('Add to cart')).toBeInTheDocument();
  });
});

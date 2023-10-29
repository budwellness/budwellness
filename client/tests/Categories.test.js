/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/store';
import Categories from '../src/components/Categories/Categories';

describe('Testing App component', () => {
  test('render to the document', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Categories />
        </BrowserRouter>
      </Provider>,
    );
  });
});

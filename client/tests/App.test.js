/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../src/store';
import App from '../src/App';

describe('Testing App component', () => {
  test('render to the document', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
});

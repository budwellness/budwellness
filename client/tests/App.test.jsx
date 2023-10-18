import { JSDOM } from 'jsdom';
import { render } from '@testing-library/react';
import App from '../src/App';
import { describe, test } from 'vitest';
// import React from 'react';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
// eslint-disable-next-line no-undef
global.document = dom.window.document;
// eslint-disable-next-line no-undef
global.window = dom.window;

describe('Testing App component', () => {
  test('render App', () => {
    render(<App />)
  });
});

/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';
import PagePreviewHeader from '../src/components/PagePreviewHeader/PagePreviewHeader.jsx';
import { Router } from 'express';

describe('PagePreviewHeader testing snapshot', () => {
  test('should PagePreviewHeader match snapshot', () => {
    const { asFragment } = render(
      <Router>
        <PagePreviewHeader text="TITLE" />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

import React from 'react';
import { screen } from '@testing-library/react';
import Loader from './Loader';
import renderWithProviders from '../../mockedData/test-utils';

describe('loading tests', () => {
  it('is spinner exist', () => {
    renderWithProviders(<Loader />);
    expect(screen.getByTitle('spinner')).toBeInTheDocument();
  });
});

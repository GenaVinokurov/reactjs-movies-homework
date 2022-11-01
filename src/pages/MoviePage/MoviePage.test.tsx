import { screen } from '@testing-library/react';
import React from 'react';
import renderWithProviders from '../../mockedData/test-utils';
import MoviePage from './MoviePage';

describe('Movie page tests', () => {
  it('img', () => {
    renderWithProviders(<MoviePage />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
});

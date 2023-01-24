import React from 'react';
import renderWithProviders from '../../mockedData/test-utils';
import MoviePage from '../../pages/MoviePage/MoviePage';

describe('Movie page tests', () => {
  it('test if we do not have date', () => {
    renderWithProviders(<MoviePage />);
    // expect(screen.getByText(/Do not have data/i)).toBeInTheDocument();
  });
});

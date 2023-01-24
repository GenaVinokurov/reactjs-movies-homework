import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithProviders from '../../mockedData/test-utils';
import PageNotFound from '../../pages/PageNotFound';

describe('PageNotFound', () => {
  it('PageNotFound exist', () => {
    renderWithProviders(<PageNotFound />);
    expect(screen.getByTitle('not found page')).toBeInTheDocument();
  });
});

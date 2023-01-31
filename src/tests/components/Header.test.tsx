import { screen } from '@testing-library/react';
import React from 'react';
import Header from '../../components/Header/Header';
import renderWithProviders from '../../mockedData/test-utils';

describe('test header', () => {
  it('exist title', () => {
    renderWithProviders(<Header />);
    expect(screen.getByText(/Movies/i)).toBeInTheDocument();
  });
});

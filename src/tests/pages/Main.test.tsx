import React from 'react';
import { screen } from '@testing-library/react';
import Main from '../../pages/Main/Main';
import renderWithProviders from '../../mockedData/test-utils';

describe('Main', () => {
  it('pagination', () => {
    renderWithProviders(<Main />);
    expect(screen.getByLabelText('pagination navigation')).toBeInTheDocument();
  });
});

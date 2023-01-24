import React from 'react';
import Main from '../../pages/Main/Main';
import renderWithProviders from '../../mockedData/test-utils';
import { screen } from '@testing-library/react';

describe('Main', () => {
  it('pagination', () => {
    renderWithProviders(<Main />);
    expect(screen.getByLabelText('pagination navigation')).toBeInTheDocument();
  });
});

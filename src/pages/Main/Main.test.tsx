import React from 'react';
import Main from './Main';
import renderWithProviders from '../../mockedData/test-utils';

describe('main tests', () => {
  it('pagination', () => {
    renderWithProviders(<Main />);
    // expect(screen.getByLabelText('pagination navigation')).toBeInTheDocument();
  });
});

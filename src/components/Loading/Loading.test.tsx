import { screen } from '@testing-library/react';
import React from 'react';
import Loading from './Loading';
import renderWithProviders from '../../mockedData/test-utils';

describe('loading tests', () => {
  it('is spinner exist', () => {
    renderWithProviders(<Loading />);
    expect(screen.getByTitle('spinner')).toBeInTheDocument();
  });
});

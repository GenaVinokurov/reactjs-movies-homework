import { screen } from '@testing-library/react';
import React from 'react';
import Card from './Card';
import data from '../../mockedData/data-movies.json';
import renderWithProviders from '../../mockedData/test-utils';

describe('card tests', () => {
  it('card content', () => {
    renderWithProviders(<Card {...data[0]} />);
    expect(screen.getByText(/first film/i)).toBeInTheDocument();
  });
});

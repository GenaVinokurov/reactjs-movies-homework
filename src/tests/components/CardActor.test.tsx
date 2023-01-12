import React from 'react';
import { screen } from '@testing-library/react';
import CardActor from '../../components/CardActor/CardActor';
import data from '../../mockedData/data-actor-card.json';
import renderWithProviders from '../../mockedData/test-utils';

describe('card tests', () => {
  it('card content name exist', () => {
    renderWithProviders(<CardActor {...data} />);
    expect(screen.getByText(/Actor Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Golym/i)).toBeInTheDocument();
  });
});

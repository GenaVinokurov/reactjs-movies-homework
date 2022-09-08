import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from './Card';
import data from '../../mockedData/data-movies.json';

describe('card tests', () => {
  it('card content', () => {
    render(<Card {...data[0]} />);
    expect(screen.getByText(/first film/i)).toBeInTheDocument();
  });
});

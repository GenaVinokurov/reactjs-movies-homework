import { render, screen } from '@testing-library/react';
import React from 'react';
import Main from './Main';

describe('mainTests', () => {
  it('exist all cards', async () => {
    render(<Main />);
    const cards = await screen.findAllByTitle('card');
    cards.forEach((el) => {
      expect(el).toBeInTheDocument();
    });
  });
  it('pagination', () => {
    render(<Main />);
    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });
});

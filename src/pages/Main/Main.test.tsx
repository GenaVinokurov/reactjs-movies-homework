import { render, screen } from '@testing-library/react';
import React from 'react';
import Main from './Main';

describe('main tests', () => {
  it('exist all cards', () => {
    render(<Main />);
    const cards = screen.getAllByTitle('card');
    cards.forEach((el) => {
      expect(el).toBeInTheDocument();
    });
  });
  it('pagination', () => {
    render(<Main />);
    expect(screen.getByLabelText('pagination navigation')).toBeInTheDocument();
  });
});

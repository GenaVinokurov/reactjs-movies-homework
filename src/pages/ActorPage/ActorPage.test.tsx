import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ActorPage from './ActorPage';

describe('mainTests', () => {
  it('exist all cards', async () => {
    render(<ActorPage />);
    const cards = await screen.findAllByTitle('card');
    cards.forEach((el) => {
      expect(el).toBeInTheDocument();
    });
  });
  it('img', async () => {
    render(<ActorPage />);
    const img = (await screen.findByTestId('img')) as HTMLImageElement;
    expect(img.src != '').toBe(true);
  });
});

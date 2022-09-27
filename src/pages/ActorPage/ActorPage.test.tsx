import { render, screen } from '@testing-library/react';
import React from 'react';
import ActorPage from './ActorPage';

describe('Actor page', () => {
  // it('exist all data', () => {
  //   render(<ActorPage />);
  //   const cards = screen.getAllByTitle('card');
  //   cards.forEach((el) => {
  //     expect(el).toBeInTheDocument();
  //   });
  // });
  it('img', () => {
    render(<ActorPage />);
    const img = screen.getByAltText('poster') as HTMLImageElement;
    expect(img).toBeInTheDocument();
  });
});

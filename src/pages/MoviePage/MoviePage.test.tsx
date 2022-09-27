import { render, screen } from '@testing-library/react';
import React from 'react';
import MoviePage from './MoviePage';

describe('Movie page tests', () => {
  // it('exist all data', () => {
  //   render(<MoviePage />);
  //   const cards = screen.getAllByTitle('card');
  //   cards.forEach((el) => {
  //     expect(el).toBeInTheDocument();
  //   });
  // });
  it('img', () => {
    render(<MoviePage />);
    const img = screen.getByAltText('poster') as HTMLImageElement;
    expect(img).toBeInTheDocument();
  });
});

import React from 'react';
import { screen } from '@testing-library/react';
import Card, { ICardProps } from './Card';
import data from '../../mockedData/data-movies.json';
import renderWithProviders from '../../mockedData/test-utils';

describe('card tests', () => {
  it('card content', () => {
    const { title, vote_average, genres_string, poster_path, id } = data[0] as ICardProps;
    renderWithProviders(
      <Card
        title={title}
        vote_average={vote_average}
        genres_string={genres_string}
        poster_path={poster_path}
        id={id}
      />
    );
    expect(screen.getByText(/first film/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card, { ICardProps } from './Card';
import data from '../../mockedData/data-movies.json';
import renderWithProviders from '../../mockedData/test-utils';
import { useAppDispatch } from '../../store/store';

jest.mock('../../store/store', () => ({
  __esModule: true,
  ...jest.requireActual('../../store/store'),
  useAppDispatch: jest.fn(),
}));

describe('Card', () => {
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
    expect(screen.getByText(/8.8/i)).toBeInTheDocument();
    expect(screen.getByText(/historical/i)).toBeInTheDocument();
  });
  it('button test click', () => {
    const dispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);
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
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});

//@ts-nocheck
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithProviders from '../../mockedData/test-utils';
import MoviePage from '../../pages/MoviePage/MoviePage';
import { useAppSelector } from '../../store/store';
import dataMovie from '../../mockedData/data-movie.json';
import dataRecommendations from '../../mockedData/data-recommendations.json';
import dataCast from '../../mockedData/data-cast.json';

jest.mock('../../store/store', () => ({
  __esModule: true,
  ...jest.requireActual('../../store/store'),
  useAppSelector: jest.fn(),
}));

describe('MoviePage', () => {
  beforeEach(() => {
    (useAppSelector as jest.Mock).mockReturnValue({
      lang: 'en',
      genresArray: [{ id: 0, name: 'test' }],
      data: dataMovie,
      cast: dataCast,
      recommendations: dataRecommendations,
      loading: false,
    });
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should change state after click to button', () => {
    const setState = jest.fn();
    jest.spyOn(React, 'useState').mockImplementation((state) => [state, setState]);
    renderWithProviders(<MoviePage />);
    const button = screen.getByTitle('button open and close all casts');
    userEvent.click(button);
    expect(setState).toHaveBeenCalled();
  });

  it('should show loader component', () => {
    (useAppSelector as jest.Mock).mockReturnValue({
      lang: 'en',
      genresArray: [{ id: 0, name: 'test' }],
      data: dataMovie,
      loading: true,
    });
    renderWithProviders(<MoviePage />);
    expect(screen.getByTitle('loader')).toBeInTheDocument();
  });

  it('should notify about missing data', () => {
    (useAppSelector as jest.Mock).mockReturnValue({
      lang: 'en',
      genresArray: [{ id: 0, name: 'test' }],
      data: null,
      loading: false,
    });
    renderWithProviders(<MoviePage />);
    expect(screen.getByText(/Do not have data/i)).toBeInTheDocument();
  });

  it('should show genres', () => {
    renderWithProviders(<MoviePage />);
    expect(screen.getByTitle(/genres container/i)).toBeInTheDocument();
  });

  it('should show cast', () => {
    renderWithProviders(<MoviePage />);
    expect(screen.getByText(/John Smith/i)).toBeInTheDocument();
    expect(screen.getByText(/Lead role/i)).toBeInTheDocument();
  });

  it('should show recommendations', () => {
    renderWithProviders(<MoviePage />);
    expect(screen.getByText(/Recommendation Movie 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Recommendation Movie 3/i)).toBeInTheDocument();
  });
});

//  @ts-nocheck
import * as React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useAppSelector } from '../../store/store';
import renderWithProviders from '../../mockedData/test-utils';
import MoviePage from '../../pages/MoviePage/MoviePage';
import dataMovie from '../../mockedData/data-movie.json';
import dataRecommendations from '../../mockedData/data-recommendations.json';
import dataCast from '../../mockedData/data-cast.json';
import dataImages from '../../mockedData/data-images.json';

jest.mock('../../store/store', () => ({
  __esModule: true,
  ...jest.requireActual('../../store/store'),
  useAppSelector: jest.fn(),
}));

const getUseAppSelectorMock = ({
  lang = 'en',
  genresArray = [{ id: 0, name: 'test' }],
  data = dataMovie,
  cast = dataCast,
  recommendations = dataRecommendations,
  images = dataImages,
  loading = false,
}) => ({ lang, genresArray, data, cast, recommendations, images, loading });

describe('MoviePage', () => {
  beforeEach(() => {
    (useAppSelector as jest.Mock).mockReturnValue(getUseAppSelectorMock({}));
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
    (useAppSelector as jest.Mock).mockReturnValue(getUseAppSelectorMock({ loading: true }));
    renderWithProviders(<MoviePage />);
    expect(screen.getByTitle('loader')).toBeInTheDocument();
  });

  it('should notify about missing data', () => {
    (useAppSelector as jest.Mock).mockReturnValue(getUseAppSelectorMock({ data: null }));
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

  it('should show images', () => {
    renderWithProviders(<MoviePage />);
    expect(screen.getAllByTitle(/movie picture/i)[0]).toBeInTheDocument();
  });
});

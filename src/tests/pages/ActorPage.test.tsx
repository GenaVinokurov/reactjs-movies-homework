import React from 'react';
import { screen } from '@testing-library/react';
import { useAppSelector } from '../../store/store';
import ActorPage from '../../pages/ActorPage/ActorPage';
import renderWithProviders from '../../mockedData/test-utils';
import dataActor from '../../mockedData/data-actor.json';
import dataCards from '../../mockedData/data-movies.json';
import dataImages from '../../mockedData/data-images.json';

jest.mock('../../store/store', () => ({
  __esModule: true,
  ...jest.requireActual('../../store/store'),
  useAppSelector: jest.fn(),
}));

describe('Actor page', () => {
  beforeEach(() => {
    (useAppSelector as jest.Mock).mockReturnValue({
      lang: 'en',
      genresArray: [{ id: 0, name: 'super action' }],
      loading: false,
      data: dataActor,
      images: null,
      films: dataCards,
      error: '',
    });
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should show loader component', () => {
    (useAppSelector as jest.Mock).mockReturnValue({
      lang: 'en',
      loading: true,
      genresArray: [{ id: 0, name: 'super action' }],
      data: dataActor,
      images: null,
      films: dataCards,
      error: '',
    });
    renderWithProviders(<ActorPage />);
    const loader = screen.getByTitle('loader');
    expect(loader).toBeInTheDocument();
  });
  it('should show text "Do not have data"', () => {
    (useAppSelector as jest.Mock).mockReturnValue({
      lang: 'en',
      loading: false,
      genresArray: [{ id: 0, name: 'super action' }],
      data: null,
      images: null,
      films: null,
      error: '',
    });
    renderWithProviders(<ActorPage />);
    const text = screen.getByText(/Do not have data/i);
    expect(text).toBeInTheDocument();
  });

  it('should show genres', () => {
    (useAppSelector as jest.Mock).mockReturnValue({
      lang: 'en',
      loading: false,
      genresArray: [{ id: 0, name: 'super action' }],
      data: dataActor,
      images: null,
      films: dataCards,
      error: '',
    });
    renderWithProviders(<ActorPage />);
    expect(screen.queryByText(/super action/i)).toBeInTheDocument();
  });

  it('should do not show genres', () => {
    (useAppSelector as jest.Mock).mockReturnValue({
      lang: 'en',
      loading: false,
      genresArray: [{}],
      data: dataActor,
      images: null,
      films: dataCards,
      error: '',
    });
    renderWithProviders(<ActorPage />);
    expect(screen.queryByText(/super action/i)).not.toBeInTheDocument();
  });

  it('should show images', () => {
    (useAppSelector as jest.Mock).mockReturnValue({
      lang: 'en',
      loading: false,
      genresArray: [{ id: 0, name: 'super action' }],
      data: dataActor,
      images: dataImages,
      films: dataCards,
      error: '',
    });
    renderWithProviders(<ActorPage />);
    expect(screen.getAllByAltText(/actor/i)[0]).toBeInTheDocument();
  });
});

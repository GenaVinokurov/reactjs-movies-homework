//  @ts-nocheck
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

const getUseAppSelectorMock = ({
  lang = 'en',
  genresArray = [{ id: 0, name: 'super action' }],
  loading = false,
  data = dataActor,
  images = dataImages,
  films = dataCards,
  error = '',
}) => ({ lang, genresArray, loading, data, images, films, error });

describe('Actor page', () => {
  beforeEach(() => {
    (useAppSelector as jest.Mock).mockReturnValue(getUseAppSelectorMock({}));
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should show loader component', () => {
    (useAppSelector as jest.Mock).mockReturnValue(getUseAppSelectorMock({ loading: true }));
    renderWithProviders(<ActorPage />);
    const loader = screen.getByTitle('loader');
    expect(loader).toBeInTheDocument();
  });
  it('should show text "Do not have data"', () => {
    (useAppSelector as jest.Mock).mockReturnValue(
      getUseAppSelectorMock({ data: null, images: null, films: null })
    );
    renderWithProviders(<ActorPage />);
    const text = screen.getByText(/Do not have data/i);
    expect(text).toBeInTheDocument();
  });

  it('should show genres', () => {
    renderWithProviders(<ActorPage />);
    expect(screen.queryByText(/super action/i)).toBeInTheDocument();
  });

  it('should do not show genres', () => {
    (useAppSelector as jest.Mock).mockReturnValue(getUseAppSelectorMock({ genresArray: [{}] }));
    renderWithProviders(<ActorPage />);
    expect(screen.queryByText(/super action/i)).not.toBeInTheDocument();
  });

  it('should show images', () => {
    renderWithProviders(<ActorPage />);
    expect(screen.getAllByAltText(/actor/i)[0]).toBeInTheDocument();
  });
});

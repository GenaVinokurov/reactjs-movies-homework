//  @ts-nocheck
import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from '../../pages/Main/Main';
import { useAppSelector, useAppDispatch } from '../../store/store';
import renderWithProviders from '../../mockedData/test-utils';
import dataCards from '../../mockedData/data-movies.json';

jest.mock('../../store/store', () => ({
  __esModule: true,
  ...jest.requireActual('../../store/store'),
  useAppSelector: jest.fn(),
  useAppDispatch: jest.fn(),
}));

describe('Main', () => {
  beforeEach(() => {
    (useAppSelector as jest.Mock).mockReturnValue({
      lang: 'en',
      genresArray: [{ id: 0, name: 'super action' }],
      cards: dataCards,
      sort: 'sort',
      isLoading: false,
    });
    const dispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should show loader component', () => {
    (useAppSelector as jest.Mock).mockReturnValue({
      lang: 'en',
      genresArray: [{ id: 0, name: 'test' }],
      cards: [],
      isLoading: true,
    });
    renderWithProviders(<Main />);
    expect(screen.getByTitle('loader')).toBeInTheDocument();
  });

  it('should show text "Movies not found"', () => {
    (useAppSelector as jest.Mock).mockReturnValue({
      lang: 'en',
      genresArray: [{ id: 0, name: 'test' }],
      cards: [],
      isLoading: false,
    });
    renderWithProviders(<Main />);
    expect(screen.getByText(/Movies not found/i)).toBeInTheDocument();
  });

  it('should update the search params when handleChange is called', () => {
    const setSearchParamsMock = jest.fn();
    jest
      .spyOn(ReactRouterDom, 'useSearchParams')
      .mockReturnValue([{ get: () => 'search' }, setSearchParamsMock]);
    renderWithProviders(<Main />);
    const paginationButton = screen.getByLabelText(/go to page 2/i);
    userEvent.click(paginationButton);
    expect(setSearchParamsMock).toHaveBeenCalledWith({
      search: 'search',
      page: '2',
    });
  });

  it('should update the search params when handleChange is called and we there are not search value', () => {
    const setSearchParamsMock = jest.fn();
    jest
      .spyOn(ReactRouterDom, 'useSearchParams')
      .mockReturnValue([{ get: () => '' }, setSearchParamsMock]);
    renderWithProviders(<Main />);
    const paginationButton = screen.getByLabelText(/go to page 2/i);
    userEvent.click(paginationButton);
    expect(setSearchParamsMock).toHaveBeenCalledWith({
      sort: 'sort',
      page: '2',
    });
  });

  it('pagination', () => {
    renderWithProviders(<Main />);
    expect(screen.getByLabelText('pagination navigation')).toBeInTheDocument();
  });

  it('pagination total pages do not have default value', () => {
    (useAppSelector as jest.Mock).mockReturnValue({
      lang: 'en',
      genresArray: [{ id: 0, name: 'super action' }],
      cards: dataCards,
      sort: 'sort',
      totalPages: 20,
      isLoading: false,
    });
    renderWithProviders(<Main />);
    expect(screen.getByLabelText(/go to page 20/i)).toBeInTheDocument();
  });

  it('should show genres', () => {
    (useAppSelector as jest.Mock).mockReturnValue({
      lang: 'en',
      genresArray: [{ id: 0, name: 'super action' }],
      cards: dataCards,
      sort: 'sort',
      totalPages: 20,
      isLoading: false,
    });
    renderWithProviders(<Main />);
    expect(screen.queryByText(/super action/i)).toBeInTheDocument();
  });

  it('should do not show genres', () => {
    (useAppSelector as jest.Mock).mockReturnValue({
      lang: 'en',
      genresArray: [{}],
      cards: dataCards,
      sort: 'sort',
      totalPages: 20,
      isLoading: false,
    });
    renderWithProviders(<Main />);
    expect(screen.queryByText(/super action/i)).not.toBeInTheDocument();
  });
});

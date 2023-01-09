import React from 'react';
import { screen } from '@testing-library/react';
import ActorPage from './ActorPage';
import renderWithProviders from '../../mockedData/test-utils';

jest.mock('../../store/store', () => ({
  __esModule: true,
  ...jest.requireActual('../../store/store'),
  useAppDispatch: () => jest.fn(),
  // useAppSelector: jest.fn(),
}));

describe('Actor page', () => {
  it('test render actor page with pending data', () => {
    const actorPageState = {
      loading: true,
      data: null,
      images: null,
      films: null,
      error: '',
    };
    renderWithProviders(<ActorPage />, { preloadedState: { actor: actorPageState } });
    const loader = screen.getByTitle('loader');
    expect(loader).toBeInTheDocument();
  });
  it('test actor page without data', () => {
    const actorPageState = {
      loading: false,
      data: null,
      images: null,
      films: null,
      error: '',
    };
    renderWithProviders(<ActorPage />, { preloadedState: { actor: actorPageState } });
    const text = screen.getByText(/Do not have data/i);
    expect(text).toBeInTheDocument();
  });
});

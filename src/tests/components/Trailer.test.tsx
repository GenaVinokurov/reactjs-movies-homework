import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithProviders from '../../mockedData/test-utils';
import { useAppDispatch, useAppSelector } from '../../store/store';
import Trailer from '../../components/Trailer';

jest.mock('../../store/store', () => ({
  __esModule: true,
  ...jest.requireActual('../../store/store'),
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

describe('Trailer', () => {
  beforeEach(() => {
    (useAppSelector as jest.Mock).mockReturnValue({
      lang: 'en',
      key: 0,
      error: '',
      loading: false,
      isModalOpen: true,
    });
  });
  it('should close trailer', () => {
    const dispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);
    renderWithProviders(<Trailer />);
    userEvent.keyboard('{Escape}');
    expect(dispatch).toHaveBeenCalledTimes(2);
  });
  it('should error trailer', () => {
    const dispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);
    (useAppSelector as jest.Mock).mockReturnValue({
      lang: 'en',
      key: 0,
      error: 'error',
      loading: false,
      isModalOpen: true,
    });
    renderWithProviders(<Trailer />);
    expect(screen.getByText('error')).toBeInTheDocument();
  });
  it('should loading trailer', () => {
    const dispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);
    (useAppSelector as jest.Mock).mockReturnValue({
      lang: 'en',
      key: 0,
      error: '',
      loading: true,
      isModalOpen: true,
    });
    renderWithProviders(<Trailer />);
    expect(screen.getByTitle('loader')).toBeInTheDocument();
  });
});

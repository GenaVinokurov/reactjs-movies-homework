import React from 'react';
import { useNavigate } from 'react-router-dom';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithProviders from '../../mockedData/test-utils';
import Search from '../../components/Search/Search';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Search', () => {
  it('should change value', () => {
    renderWithProviders(<Search />);
    const search = screen.getByPlaceholderText(/search/i) as HTMLInputElement;

    expect(search).toBeInTheDocument();
    expect(search).not.toHaveFocus();

    userEvent.type(search, 'Movie');

    expect(search.value).toBe('Movie');
  });

  it('should make navigate after press Enter button', () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    renderWithProviders(<Search />);
    const search = screen.getByPlaceholderText(/search/i) as HTMLInputElement;

    act(() => search.focus());
    userEvent.keyboard('{Enter}');

    expect(navigateMock).toBeCalled();
  });
});

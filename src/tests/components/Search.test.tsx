import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderWithProviders from '../../mockedData/test-utils';
import Search from '../../components/Search/Search';

describe('Search', () => {
  it('change value', () => {
    renderWithProviders(<Search />);
    const search = screen.getByPlaceholderText(/search/i) as HTMLInputElement;
    expect(search).toBeInTheDocument();
    expect(search).not.toHaveFocus();
    userEvent.type(search, 'Movie');
    expect(search.value).toBe('Movie');
  });
});

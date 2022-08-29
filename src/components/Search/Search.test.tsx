import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Search from './Search';

describe('test Search element', () => {
  it('change value', () => {
    render(<Search />);
    const search = screen.getByPlaceholderText(/search/i) as HTMLInputElement;
    expect(search).toBeInTheDocument();
    expect(search).not.toHaveFocus();
    userEvent.type(search, 'Movie');
    expect(search.value).toBe('Movie');
  });
});

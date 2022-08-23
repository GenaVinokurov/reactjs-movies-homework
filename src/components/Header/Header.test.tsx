import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Header from './Header';

describe('test header', () => {
  it('exist title', () => {
    render(<Header />);
    expect(screen.getByText(/Movies/i)).toBeInTheDocument();
  });
  it('search element', () => {
    render(<Header />);
    const search = screen.getByTestId('search') as HTMLInputElement;
    expect(search).toBeInTheDocument();
    expect(search).not.toHaveFocus();
    userEvent.type(search, 'Movie');
    expect(search.value).toBe('Movie');
  });
});

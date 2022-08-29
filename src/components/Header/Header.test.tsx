import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from './Header';

describe('test header', () => {
  it('exist title', () => {
    render(<Header />);
    expect(screen.getByText(/Movies/i)).toBeInTheDocument();
  });
});

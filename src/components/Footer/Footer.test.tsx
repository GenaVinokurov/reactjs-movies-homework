import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Footer from './Footer';

describe('test header', () => {
  it('exist title', () => {
    render(<Footer />);
    expect(screen.getByText(/2022/i)).toBeInTheDocument();
    expect(screen.getByText(/github/i)).toBeInTheDocument();
  });
});

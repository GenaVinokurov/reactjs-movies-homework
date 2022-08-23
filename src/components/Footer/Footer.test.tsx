import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

describe('test header', () => {
  it('exist title', () => {
    render(<Footer />);
    expect(screen.getByText(/2022/i)).toBeInTheDocument();
    expect(screen.getByText(/github/i)).toBeInTheDocument();
  });
});

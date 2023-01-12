import React from 'react';
import { render, screen } from '@testing-library/react';
import Paragraph from '../../components/Paragraph/Paragraph';

describe('Paragraph', () => {
  it('Content exist', () => {
    render(<Paragraph title="title" content="content" />);
    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });
});

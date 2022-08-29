import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

describe('Error Boundary', () => {
  test('Error Boundary', () => {
    const ThrowError = () => {
      throw new Error('Test');
    };
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    expect(screen.getByText('Sorry.. there was an error')).toBeVisible();
  });
});

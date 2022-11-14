import React from 'react';
// import { render, screen } from '@testing-library/react';
import ActorPage from './ActorPage';
import renderWithProviders from '../../mockedData/test-utils';

describe('Actor page', () => {
  it('test render actor page', () => {
    renderWithProviders(<ActorPage />);
  });
});

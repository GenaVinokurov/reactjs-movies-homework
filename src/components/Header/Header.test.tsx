import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';
import Header from './Header';

describe('test header', () => {
  it('exist title', () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(screen.getByText(/Movies/i)).toBeInTheDocument();
  });
});

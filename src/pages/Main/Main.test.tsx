import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';
import Main from './Main';

describe('main tests', () => {
  const store = setupStore();

  it('pagination', () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    expect(screen.getByLabelText('pagination navigation')).toBeInTheDocument();
  });
});

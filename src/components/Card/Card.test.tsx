import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from './Card';
import data from '../../mockedData/data-movies.json';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';

describe('card tests', () => {
  const store = setupStore();
  it('card content', () => {
    render(
      <Provider store={store}>
        <Card {...data[0]} />
      </Provider>
    );
    expect(screen.getByText(/first film/i)).toBeInTheDocument();
  });
});

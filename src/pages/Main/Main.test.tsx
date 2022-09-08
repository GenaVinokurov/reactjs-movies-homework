import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';
import Main from './Main';

describe('main tests', () => {
  const store = setupStore();
  // it('exist all cards', () => {
  //   render(
  //     <Provider store={store}>
  //       <Main />
  //     </Provider>
  //   );
  //   const cards = screen.getAllByTitle('card');
  //   cards.forEach((el) => {
  //     expect(el).toBeInTheDocument();
  //   });
  // });
  it('pagination', () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    expect(screen.getByLabelText('pagination navigation')).toBeInTheDocument();
  });
});

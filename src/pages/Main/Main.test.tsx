import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Main from './Main';

describe('mainTests', () => {
  it('exist all cards', async () => {
    render(<Main />);
    const cards = await screen.findAllByTitle('card');
    cards.forEach((el) => {
      expect(el).toBeInTheDocument();
    });
  });
  it('pagination', () => {
    render(<Main />);
    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });
  it('buttons', async () => {
    render(<Main />);
    const mockFunction = jest.fn();
    const buttons = await screen.findAllByTestId('button-elem');
    buttons.forEach((el) => {
      el.onclick = mockFunction;
      expect(el).toBeInTheDocument();
      userEvent.click(el);
      expect(mockFunction).toBeCalled();
    });
  });
});

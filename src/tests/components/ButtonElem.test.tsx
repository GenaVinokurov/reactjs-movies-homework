import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ButtonElem from '../../components/ButtonElem/ButtonElem';

describe('button test', () => {
  it('button', () => {
    const mockFunction = jest.fn();
    render(<ButtonElem onClick={mockFunction}>test</ButtonElem>);
    const button = screen.getByText('test');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    expect(mockFunction).toBeCalled();
  });
});

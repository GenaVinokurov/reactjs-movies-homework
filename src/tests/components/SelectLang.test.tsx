import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithProviders from '../../mockedData/test-utils';
import { useAppDispatch } from '../../store/store';
import SelectLang from '../../components/SelectLang';

jest.mock('../../store/store', () => ({
  __esModule: true,
  ...jest.requireActual('../../store/store'),
  useAppDispatch: jest.fn(),
}));

describe('SelectLang', () => {
  it('should change language', () => {
    const dispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);
    renderWithProviders(<SelectLang />);

    const select = screen.getByRole(/button/i);
    userEvent.click(select);

    const menuItem = screen.getAllByRole(/option/i);
    userEvent.click(menuItem[1]);

    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});

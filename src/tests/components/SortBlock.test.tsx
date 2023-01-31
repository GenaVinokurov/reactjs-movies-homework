import React from 'react';
import { useNavigate } from 'react-router-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SortBlock from '../../components/SortBlock';
import renderWithProviders from '../../mockedData/test-utils';
import { useAppDispatch } from '../../store/store';

jest.mock('../../store/store', () => ({
  __esModule: true,
  ...jest.requireActual('../../store/store'),
  useAppDispatch: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Sort block', () => {
  it('should change sort', () => {
    const dispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);
    const navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);

    renderWithProviders(<SortBlock />);
    const buttonsCollection = screen.getAllByRole('button');
    const testButton = buttonsCollection[0];
    expect(testButton).toBeInTheDocument();
    userEvent.click(testButton);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledTimes(1);
  });
});

import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithProviders from '../../mockedData/test-utils';
import { useAppDispatch, useAppSelector } from '../../store/store';
import Trailer from '../../components/Trailer';
import TrailerSlice, { actionsTrailer } from '../../store/reducers/Trailer/TrailerSlice';

jest.mock('../../store/store', () => ({
  __esModule: true,
  ...jest.requireActual('../../store/store'),
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

// describe('Trailer', () => {
//   beforeAll(() => {
//     (useAppSelector as jest.Mock).mockReturnValue({
//       trailer: {
//         key: 0,
//         error: '',
//         loading: false,
//         isModalOpen: true,
//       },
//       language: { lang: 'en' },
//     });
//   });

//   it('should close trailer', () => {
//     const dispatch = jest.fn();
//     (useAppDispatch as jest.Mock).mockReturnValue(dispatch);

//     renderWithProviders(<Trailer />);
//     const background = screen.getByTestId('trailer');
//     console.log(background);
//     // userEvent.click(document);
//   });
// });

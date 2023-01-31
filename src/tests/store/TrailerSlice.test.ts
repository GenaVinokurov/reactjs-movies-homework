import TrailerSlice, { actionsTrailer } from '../../store/reducers/Trailer/TrailerSlice';

describe('TrailerSlice', () => {
  it('should open modal', () => {
    const state = {
      isModalOpen: false,
      key: '',
      loading: false,
      error: '',
    };
    expect(TrailerSlice(state, actionsTrailer.switchIsModalOpen(true))).toEqual({
      isModalOpen: true,
      key: '',
      loading: false,
      error: '',
    });
  });
  it('should reset state', () => {
    const state = {
      isModalOpen: false,
      key: 'sssss',
      loading: false,
      error: 'qqqqqq',
    };
    expect(TrailerSlice(state, actionsTrailer.resetState())).toEqual({
      isModalOpen: false,
      key: '',
      loading: false,
      error: '',
    });
  });
});

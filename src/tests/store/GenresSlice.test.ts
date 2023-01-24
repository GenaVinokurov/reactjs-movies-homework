import GenresSlice, { actionsGenres } from '../../store/reducers/Genres/GenresSlice';

describe('GenresSlice', () => {
  const state = {
    genresArray: [],
    isLoading: false,
    error: null,
  };
  it('should set new data in state', () => {
    const actionData = {
      genres: [
        {
          id: 0,
          name: 'test',
        },
      ],
    };
    expect(GenresSlice(state, actionsGenres.setGenresSuccess(actionData))).toEqual({
      genresArray: [
        {
          id: 0,
          name: 'test',
        },
      ],
      isLoading: false,
      error: null,
    });
  });
  it('should change error state', () => {
    expect(GenresSlice(state, actionsGenres.setGenresError('test'))).toEqual({
      genresArray: [],
      isLoading: false,
      error: 'test',
    });
  });
});

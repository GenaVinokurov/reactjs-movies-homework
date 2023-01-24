import CardsMovieSlice, { actionsCardsMovie } from '../../store/reducers/Cards/CardsMovieSlice';

describe('CardsMovieSlice', () => {
  const state = {
    cards: [],
    isLoading: false,
    error: null,
    sort: 'popular',
    totalPages: 1,
  };
  it('should change sort', () => {
    expect(CardsMovieSlice(state, actionsCardsMovie.changeSort('not popular'))).toEqual({
      cards: [],
      isLoading: false,
      error: null,
      sort: 'not popular',
      totalPages: 1,
    });
  });
  it('should set up total pages', () => {
    expect(CardsMovieSlice(state, actionsCardsMovie.changeTotalPages(100))).toEqual({
      cards: [],
      isLoading: false,
      error: null,
      sort: 'popular',
      totalPages: 100,
    });
  });
  it('should set new data in state', () => {
    const actionsData = {
      results: [
        {
          title: 'string',
          vote_average: 0,
          poster_path: 'string',
          genre_ids: [1, 2],
          id: 0,
          actorClass: true,
        },
      ],
      total_pages: 100,
      page: 0,
      total_results: 10,
    };
    expect(CardsMovieSlice(state, actionsCardsMovie.setCardsMovieSuccess(actionsData))).toEqual({
      cards: [
        {
          title: 'string',
          vote_average: 0,
          poster_path: 'string',
          genre_ids: [1, 2],
          id: 0,
          actorClass: true,
        },
      ],
      isLoading: false,
      error: null,
      sort: 'popular',
      totalPages: 100,
    });
  });
  it('should change error state', () => {
    expect(CardsMovieSlice(state, actionsCardsMovie.setCardsMovieError('test'))).toEqual({
      cards: [],
      isLoading: false,
      error: 'test',
      sort: 'popular',
      totalPages: 1,
    });
  });
});

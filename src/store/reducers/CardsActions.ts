import { TypeGenres } from '../../components/types';
import { AppDispatch } from '../store';
import { BASE_URL, API_KEY } from '../../constants';
import { listSlice } from './ListSlice';
import { genresSlice } from './GenresSlice';

export const fetchCardData = (sort: string, page: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(listSlice.actions.dataFetching);
    const response = await fetch(`${BASE_URL}movie/${sort}?api_key=${API_KEY}&page=${page}`);
    const data = await response.json();
    dispatch(listSlice.actions.dataFetchingSuccess(data));
  } catch (error) {
    const { message } = error as Error;
    dispatch(listSlice.actions.dataFetchingError(message));
  }
};
export const fetchGenresData = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(genresSlice.actions.genresFetching);
    const response = await fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`);
    const data = (await response.json()) as TypeGenres;
    dispatch(genresSlice.actions.genresFetchingSuccess(data));
  } catch (error) {
    const { message } = error as Error;
    dispatch(genresSlice.actions.genresFetchingError(message));
  }
};

export const fetchAllDataCards = (sort: string, page: number) => async (dispatch: AppDispatch) =>
  Promise.all([dispatch(fetchCardData(sort, page)), dispatch(fetchGenresData())]);

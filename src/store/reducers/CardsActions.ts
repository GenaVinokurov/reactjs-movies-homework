import { TypeGenres } from '../../components/types';
import { AppDispatch } from '../store';
import { actionsCardsMovie } from './CardsMovieSlice';
import { actionsGenres } from './GenresSlice';

export const fetchCardData = (sort: string, page: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(actionsCardsMovie.setCardsMovieLoading());
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}movie/${sort}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    const data = await response.json();
    dispatch(actionsCardsMovie.setCardsMovieSuccess(data));
  } catch (error) {
    const { message } = error as Error;
    dispatch(actionsCardsMovie.setCardsMovieError(message));
  }
};
export const fetchGenresData = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(actionsGenres.setGenresLoading());
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = (await response.json()) as TypeGenres;
    dispatch(actionsGenres.setGenresSuccess(data));
  } catch (error) {
    const { message } = error as Error;
    dispatch(actionsGenres.setGenresError(message));
  }
};

export const fetchAllDataCards = (sort: string, page: number) => async (dispatch: AppDispatch) =>
  Promise.all([dispatch(fetchCardData(sort, page)), dispatch(fetchGenresData())]);

export const fetchSearchData = (query: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(actionsCardsMovie.setCardsMovieLoading());
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`
    );
    const data = await response.json();
    dispatch(actionsCardsMovie.setCardsMovieSuccess(data));
  } catch (error) {
    const { message } = error as Error;
    dispatch(actionsCardsMovie.setCardsMovieError(message));
  }
};

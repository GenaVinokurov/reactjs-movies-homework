import { AppDispatch } from '../../store';
import { actionsCardsMovie } from './CardsMovieSlice';
import { fetchGenresData } from '../Genres/GenresActions';

export const fetchCardData =
  (sort: string, page: string, lang: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(actionsCardsMovie.setCardsMovieLoading());
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}movie/${sort}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&language=${lang}`
      );
      const data = await response.json();
      dispatch(actionsCardsMovie.setCardsMovieSuccess(data));
    } catch (error) {
      const { message } = error as Error;
      dispatch(actionsCardsMovie.setCardsMovieError(message));
    }
  };

export const fetchAllDataCards =
  (sort: string, page: string, lang: string) => async (dispatch: AppDispatch) =>
    Promise.all([dispatch(fetchCardData(sort, page, lang)), dispatch(fetchGenresData(lang))]);

export const fetchSearchData =
  (query: string, page: string, lang: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(actionsCardsMovie.setCardsMovieLoading());
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=${page}&language=${lang}`
      );
      const data = await response.json();
      dispatch(actionsCardsMovie.setCardsMovieSuccess(data));
    } catch (error) {
      const { message } = error as Error;
      dispatch(actionsCardsMovie.setCardsMovieError(message));
    }
  };

import { TypeGenres } from '../../components/types';
import { AppDispatch } from '../store';
import { actionsCardsMovie } from './CardsMovieSlice';
import { actionsGenres } from './GenresSlice';

interface IVideoKey {
  results: {
    key: string;
  }[];
}

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
export const fetchGenresData = (lang: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(actionsGenres.setGenresLoading());
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=${lang}`
    );
    const data = (await response.json()) as TypeGenres;
    dispatch(actionsGenres.setGenresSuccess(data));
  } catch (error) {
    const { message } = error as Error;
    dispatch(actionsGenres.setGenresError(message));
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

export const fetchVideoLink = (id: number) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = (await response.json()) as IVideoKey;
    dispatch(actionsCardsMovie.setVideoLinkSuccess(data.results[0].key));
  } catch (error) {
    const { message } = error as Error;
    dispatch(actionsCardsMovie.setVideoLinkError(message));
  }
};

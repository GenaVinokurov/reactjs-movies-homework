import { AppDispatch } from '../../store';
import { actionsGenres } from './GenresSlice';
import { TypeGenres } from '../../../components/types';

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

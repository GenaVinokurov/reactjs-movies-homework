import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../../store';
import { TypeActorFilms, TypeActorImagesData } from '../../../components/types';

interface ActorAttributes {
  id: number;
  lang: string;
}

export const fetchActorData = createAsyncThunk('actor/fetchData', async (arg: ActorAttributes) => {
  const { id, lang } = arg;
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}person/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=${lang}`
  );
  const data = await response.json();
  return data;
});

export const fetchActorImages = createAsyncThunk('actor/fetchImages', async (id: number) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}person/${id}/images?api_key=${process.env.REACT_APP_API_KEY}`
  );
  const data = (await response.json()) as TypeActorImagesData;
  return data.profiles;
});

export const fetchActorFilms = createAsyncThunk(
  'actor/fetchFilms',
  async (arg: ActorAttributes) => {
    const { id, lang } = arg;
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}person/${id}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}&language=${lang}`
    );
    const data = (await response.json()) as TypeActorFilms;
    return data.cast;
  }
);

export const fetchAllDataActor = (id: number, lang: string) => async (dispatch: AppDispatch) => {
  const argObj = { id, lang };
  return Promise.all([
    dispatch(fetchActorData(argObj)),
    dispatch(fetchActorImages(id)),
    dispatch(fetchActorFilms(argObj)),
  ]);
};

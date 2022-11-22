import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import { TypeMovieCast, TypeMovieImages, TypeMovieRecommendations } from '../../components/types';

interface MovieAttributes {
  id: number;
  lang: string;
}

export const fetchMovieData = createAsyncThunk('movie/fetchData', async (arg: MovieAttributes) => {
  const { id, lang } = arg;
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=${lang}`
  );
  const data = await response.json();
  return data;
});

export const fetchMovieImages = createAsyncThunk('movie/images', async (arg: MovieAttributes) => {
  const { id, lang } = arg;
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}movie/${id}/images?api_key=${process.env.REACT_APP_API_KEY}&language=${lang}`
  );
  const data = (await response.json()) as TypeMovieImages;
  return data.backdrops;
});

export const fetchMovieRecommendations = createAsyncThunk(
  'movie/recommendations',
  async (arg: MovieAttributes) => {
    const { id, lang } = arg;
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=${lang}`
    );
    const data = (await response.json()) as TypeMovieRecommendations;
    return data.results;
  }
);

export const fetchMovieCast = createAsyncThunk('movie/cast', async (arg: MovieAttributes) => {
  const { id, lang } = arg;
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=${lang}`
  );
  const data = (await response.json()) as TypeMovieCast;
  return data.cast;
});

export const fetchAllDataMovie = (id: number, lang: string) => async (dispatch: AppDispatch) => {
  const argObj = { id, lang };
  return Promise.all([
    dispatch(fetchMovieData(argObj)),
    dispatch(fetchMovieImages(argObj)),
    dispatch(fetchMovieRecommendations(argObj)),
    dispatch(fetchMovieCast(argObj)),
  ]);
};

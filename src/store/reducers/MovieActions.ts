import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import { TypeMovieCast, TypeMovieImages, TypeMovieRecommendations } from '../../components/types';

export const fetchMovieData = createAsyncThunk('movie/fetchData', async (id: number) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
  );
  const data = await response.json();
  return data;
});

export const fetchMovieImages = createAsyncThunk('movie/images', async (id: number) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}movie/${id}/images?api_key=${process.env.REACT_APP_API_KEY}`
  );
  const data = (await response.json()) as TypeMovieImages;
  return data.backdrops;
});

export const fetchMovieRecommendations = createAsyncThunk(
  'movie/recommendations',
  async (id: number) => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = (await response.json()) as TypeMovieRecommendations;
    return data.results;
  }
);

export const fetchMovieCast = createAsyncThunk('movie/cast', async (id: number) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`
  );
  const data = (await response.json()) as TypeMovieCast;
  return data.cast;
});

export const fetchAllDataMovie = (id: number) => async (dispatch: AppDispatch) =>
  Promise.all([
    dispatch(fetchMovieData(id)),
    dispatch(fetchMovieImages(id)),
    dispatch(fetchMovieRecommendations(id)),
    dispatch(fetchMovieCast(id)),
  ]);

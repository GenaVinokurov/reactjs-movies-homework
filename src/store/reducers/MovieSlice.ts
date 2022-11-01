import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeMoviePage, TypeMovieCard, TypeMovieImagesData } from '../../components/types';
import { fetchMovieData, fetchMovieImages, fetchMovieRecommendations } from './MovieActions';

interface MovieState {
  data: TypeMoviePage | null;
  images: TypeMovieImagesData[] | null;
  recommendations: TypeMovieCard[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  data: null,
  images: null,
  recommendations: null,
  loading: true,
  error: null,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovieData.fulfilled.type]: (state, action: PayloadAction<TypeMoviePage>) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchMovieData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchMovieData.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    [fetchMovieImages.fulfilled.type]: (state, action: PayloadAction<TypeMovieImagesData[]>) => {
      state.images = action.payload;
    },
    [fetchMovieImages.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchMovieImages.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    [fetchMovieRecommendations.fulfilled.type]: (state, action: PayloadAction<TypeMovieCard[]>) => {
      state.recommendations = action.payload;
    },
    [fetchMovieRecommendations.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchMovieRecommendations.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: actionsMovie } = movieSlice;
export default movieSlice.reducer;

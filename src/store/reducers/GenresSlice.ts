import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeGenres } from '../../components/types';

interface GenresState {
  genresArray: { id: number; name: string }[];
  isLoading: boolean;
  error: string;
}
const initialState: GenresState = {
  genresArray: [],
  isLoading: false,
  error: '',
};

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    genresFetching(state) {
      state.isLoading = true;
    },
    genresFetchingSuccess(state, action: PayloadAction<TypeGenres>) {
      state.isLoading = false;
      state.error = '';
      state.genresArray = action.payload.genres;
    },
    genresFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default genresSlice.reducer;

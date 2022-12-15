import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeGenres, TypeArrayGenres } from '../../../components/types';

interface GenresState {
  genresArray: TypeArrayGenres;
  isLoading: boolean;
  error: string | null;
}
const initialState: GenresState = {
  genresArray: [],
  isLoading: false,
  error: null,
};

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    setGenresLoading(state) {
      state.isLoading = true;
    },
    setGenresSuccess(state, action: PayloadAction<TypeGenres>) {
      state.isLoading = false;
      state.error = null;
      state.genresArray = action.payload.genres;
    },
    setGenresError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: actionsGenres } = genresSlice;
export default genresSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeGetMovie, TypeMovieCard } from '../../components/types';

interface ListState {
  cards: TypeMovieCard[];
  isLoading: boolean;
  error: string;
  sort: string;
  page: number;
  totalPages: number;
}
const initialState: ListState = {
  cards: [],
  isLoading: false,
  error: '',
  sort: 'popular',
  page: 1,
  totalPages: 1,
};

export const listSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    dataFetching(state) {
      state.isLoading = true;
    },
    dataFetchingSuccess(state, action: PayloadAction<TypeGetMovie>) {
      state.isLoading = false;
      state.error = '';
      state.cards = action.payload.results;
      state.totalPages = action.payload?.total_pages;
    },
    dataFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    changeSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    changePage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    changeTotalPages(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
  },
});

export default listSlice.reducer;

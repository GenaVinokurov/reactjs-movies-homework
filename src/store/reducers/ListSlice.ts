import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeMovieCard } from '../../components/types';

interface ListState {
  data: TypeMovieCard[];
  sort: string;
  page: number;
  totalPages: number;
}
const initialState: ListState = {
  data: [],
  sort: 'popular',
  page: 1,
  totalPages: 1,
};

export const listSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    changeData(state, action: PayloadAction<TypeMovieCard[]>) {
      state.data = action.payload;
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

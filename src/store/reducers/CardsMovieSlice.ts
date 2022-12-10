import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeGetMovie, TypeMovieCard } from '../../components/types';

interface CardsMovieState {
  cards: TypeMovieCard[];
  isLoading: boolean;
  error: string | null;
  sort: string;
  page: number;
  totalPages: number;
  isModalOpen: boolean;
  videoKey: string;
  errorVideo: string;
}
const initialState: CardsMovieState = {
  cards: [],
  isLoading: false,
  error: null,
  sort: 'popular',
  page: 1,
  totalPages: 1,
  isModalOpen: false,
  videoKey: '',
  errorVideo: '',
};

export const cardsMovieSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setCardsMovieLoading(state) {
      state.isLoading = true;
    },
    setCardsMovieSuccess(state, action: PayloadAction<TypeGetMovie>) {
      state.cards = action.payload.results;
      state.totalPages = action.payload?.total_pages;
      state.isLoading = false;
      state.error = null;
    },
    setCardsMovieError(state, action: PayloadAction<string>) {
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
    switchIsModalOpen(state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload;
    },
    setVideoLinkSuccess(state, action: PayloadAction<string>) {
      state.videoKey = action.payload;
    },
    setVideoLinkError(state, action: PayloadAction<string>) {
      state.errorVideo = action.payload;
    },
  },
});

export const { actions: actionsCardsMovie } = cardsMovieSlice;
export default cardsMovieSlice.reducer;

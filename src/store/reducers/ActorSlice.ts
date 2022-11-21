import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeActor, TypeActorImages, TypeMovieCard } from '../../components/types';
import { fetchActorData, fetchActorFilms, fetchActorImages } from './ActorActions';

interface ActorState {
  data: TypeActor | null;
  images: TypeActorImages[] | null;
  films: TypeMovieCard[] | null;
  loading: boolean;
  error: string;
}

const initialState: ActorState = {
  data: null,
  images: null,
  films: null,
  loading: false,
  error: '',
};

export const actorSlice = createSlice({
  name: 'actor',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchActorData.fulfilled.type]: (state, action: PayloadAction<TypeActor>) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchActorData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchActorData.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    [fetchActorImages.fulfilled.type]: (state, action: PayloadAction<TypeActorImages[]>) => {
      state.images = action.payload;
      state.loading = false;
    },
    [fetchActorImages.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchActorImages.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    [fetchActorFilms.fulfilled.type]: (state, action: PayloadAction<TypeMovieCard[]>) => {
      state.films = action.payload;
      state.loading = false;
    },
    [fetchActorFilms.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchActorFilms.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: actionsActor } = actorSlice;
export default actorSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTrailer } from './TrailerActions';

interface TrailerState {
  isModalOpen: boolean;
  key: string;
  loading: boolean;
  error: string;
}

const initialState: TrailerState = {
  isModalOpen: false,
  key: '',
  loading: false,
  error: '',
};

export const TrailerSlice = createSlice({
  name: 'trailer',
  initialState,
  reducers: {
    switchIsModalOpen(state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload;
    },
    resetState(state) {
      state.key = '';
      state.error = '';
    },
  },
  extraReducers: {
    [fetchTrailer.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.key = action.payload;
      state.loading = false;
    },
    [fetchTrailer.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    [fetchTrailer.pending.type]: (state) => {
      state.loading = true;
    },
  },
});

export const { actions: actionsTrailer } = TrailerSlice;
export default TrailerSlice.reducer;

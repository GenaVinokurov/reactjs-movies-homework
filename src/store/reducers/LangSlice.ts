import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LangState {
  lang: string;
  isLoading: boolean;
  error: string;
}
const initialState: LangState = {
  lang: 'En',
  isLoading: false,
  error: '',
};

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLang(state, action: PayloadAction<string>) {
      state.lang = action.payload;
    },
  },
});

export default langSlice.reducer;

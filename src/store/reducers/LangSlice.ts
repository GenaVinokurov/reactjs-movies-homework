import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
  lang: string;
}
const initialState: LanguageState = {
  lang: 'En',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLang(state, action: PayloadAction<string>) {
      state.lang = action.payload;
    },
  },
});

export const { actions: actionsLanguage } = languageSlice;
export default languageSlice.reducer;

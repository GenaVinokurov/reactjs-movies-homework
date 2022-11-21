import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createSelectorHook, useDispatch, TypedUseSelectorHook } from 'react-redux';
import languageReducer from './reducers/LangSlice';
import cardsMovieReducer from './reducers/CardsMovieSlice';
import genresReducer from './reducers/GenresSlice';
import movieReducer from './reducers/MovieSlice';
import actorReducer from './reducers/ActorSlice';

export const rootReducer = combineReducers({
  language: languageReducer,
  cardsMovie: cardsMovieReducer,
  genres: genresReducer,
  movie: movieReducer,
  actor: actorReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootStore = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStore> = createSelectorHook();

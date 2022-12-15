import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createSelectorHook, useDispatch, TypedUseSelectorHook } from 'react-redux';
import languageReducer from './reducers/Language/LangSlice';
import cardsMovieReducer from './reducers/Cards/CardsMovieSlice';
import genresReducer from './reducers/Genres/GenresSlice';
import movieReducer from './reducers/Movie/MovieSlice';
import actorReducer from './reducers/Actor/ActorSlice';
import trailerReducer from './reducers/Trailer/TrailerSlice';

export const rootReducer = combineReducers({
  language: languageReducer,
  cardsMovie: cardsMovieReducer,
  genres: genresReducer,
  movie: movieReducer,
  actor: actorReducer,
  trailer: trailerReducer,
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

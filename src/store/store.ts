import { combineReducers, configureStore } from '@reduxjs/toolkit';
import langReducer from './reducers/LangSlice';
import listReducer from './reducers/ListSlice';
import genreReducer from './reducers/GenresSlice';

const rootReducer = combineReducers({
  langReducer,
  listReducer,
  genreReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootStore = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

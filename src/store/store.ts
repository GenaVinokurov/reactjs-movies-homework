import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ApiService from './reducers/ApiService';
import langReducer from './reducers/LangSlice';
import listReducer from './reducers/ListSlice';

const rootReducer = combineReducers({
  langReducer,
  listReducer,
  [ApiService.reducerPath]: ApiService.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ApiService.middleware),
  });
};

export type RootStore = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

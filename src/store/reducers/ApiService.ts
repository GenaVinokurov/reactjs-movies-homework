import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { TypeGetMovie } from '../../components/types';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c7f65fd9ae5692cf794b7c9d892b808a';
const ApiService = createApi({
  reducerPath: 'apiService',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getMovies: build.query<TypeGetMovie, [string, number]>({
      query: ([sort, page]) => ({
        url: `movie/${sort}`,
        params: {
          api_key: API_KEY,
          page,
        },
      }),
    }),
  }),
});

export default ApiService;

import { createAsyncThunk } from '@reduxjs/toolkit';

interface Data {
  results: {
    key: string;
  }[];
}

export const fetchTrailer = createAsyncThunk('trailer/fetchTrailer', async (id: number) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
  );
  const data = (await response.json()) as Data;
  return data.results[0].key;
});

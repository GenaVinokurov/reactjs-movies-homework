import { TypeArrayGenres } from './components/types';

export const getTimeFromMins = (mins: number): string => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return `${hours}:${minutes}`;
};

export const convertGenresToString = (genre_ids: number[], genresArray: TypeArrayGenres) => {
  return genre_ids
    .map((genreId) => {
      const genresName = genresArray.find((el) => el.id === genreId)?.name;
      return genresName ? `${genresName} ` : '';
    })
    .join('');
};

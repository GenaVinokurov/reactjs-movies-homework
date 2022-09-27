export type ColorType =
  | 'primary'
  | 'inherit'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | undefined;

export type TypeButton = {
  buttonClassName?: string;
  children: React.ReactNode;
  colorType?: ColorType;
  variant?: 'text' | 'outlined' | 'contained' | undefined;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  id?: string;
};
export type TypeArrayGenres = {
  id: number;
  name: string;
}[];
export type TypeGenres = {
  genres: TypeArrayGenres;
};

export type TypeMovieCard = {
  title: string;
  vote_average: number;
  poster_path: string;
  genre_ids: number[];
  id: number;
  actorClass?: boolean;
};

export type TypeDataMovie = {
  original_title: string;
  overview: string;
  release_date: string;
  revenue: number;
  runtime: string;
  poster_path: string;
  genres: TypeArrayGenres;
};

export type TypeGetMovie = {
  page: number;
  results: TypeMovieCard[];
  total_results: number;
  total_pages: number;
};

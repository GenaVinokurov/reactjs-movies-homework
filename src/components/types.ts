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
  title?: string;
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

export type TypeGetMovie = {
  page: number;
  results: TypeMovieCard[];
  total_results: number;
  total_pages: number;
};

export type TypeMoviePage = {
  title: string;
  overview: string | null;
  vote_average: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number | null;
  id: number;
  genres: TypeArrayGenres;
};

export type TypeMovieImagesData = {
  file_path: string;
};

export type TypeMovieImages = {
  backdrops: TypeMovieImagesData;
  posters: TypeMovieImagesData;
};

export type TypeMovieRecommendations = {
  results: TypeMovieCard[];
};

export type TypeMovieCastData = {
  id?: number;
  name: string;
  character: string;
  profile_path: string;
};

export type TypeMovieCast = {
  cast: TypeMovieCastData;
};

export type TypeActor = {
  profile_path: string;
  name: string;
  birthday: string;
  place_of_birth: string;
  biography: string;
};

export type TypeActorImages = {
  file_path: string;
};

export type TypeActorImagesData = {
  id: number;
  profiles: TypeActorImages[];
};

export type TypeActorFilms = {
  cast: TypeMovieCard[];
};

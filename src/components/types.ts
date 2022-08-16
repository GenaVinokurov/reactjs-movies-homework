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

export type TypeMovieCard = {
  title: string;
  vote_average: number;
  poster_path: string;
  genre: string;
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
  genres: { id: number; name: string }[];
};

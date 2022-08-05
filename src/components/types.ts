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
  buttonClassName: string;
  children: React.ReactNode;
  colorType?: ColorType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  id?: string;
};

export type TypeMovieCard = {
  title: string;
  vote_average: number;
  poster_path: string;
  genre: string;
  id: number;
};

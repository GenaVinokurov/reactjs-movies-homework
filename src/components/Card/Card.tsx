import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { actionsTrailer } from '../../store/reducers/Trailer/TrailerSlice';
import { fetchTrailer } from '../../store/reducers/Trailer/TrailerActions';
import { useAppDispatch } from '../../store/store';
import style from './Card.module.scss';

export interface ICardProps {
  title: string;
  vote_average: number;
  poster_path: string;
  genres_string: string;
  id: number;
}

function Card(props: ICardProps) {
  const { title, vote_average, poster_path, genres_string, id } = props;
  const dispatch = useAppDispatch();
  const { switchIsModalOpen } = actionsTrailer;

  const openModal = () => {
    dispatch(switchIsModalOpen(true));
    dispatch(fetchTrailer(id));
  };

  return (
    <div className={style.container} title="card">
      <span className={style.rating}>{vote_average}</span>
      <div
        style={{ backgroundImage: ` URL(https://image.tmdb.org/t/p/original${poster_path})` }}
        className={style.img}
      >
        <div className={style.substrate}>
          <button onClick={openModal} type="button" className={style.link__video}>
            <PlayCircleIcon
              sx={{ width: '100px', height: '100px', zIndex: 2, color: 'success.light' }}
            />
          </button>
        </div>
      </div>
      <Link to={`/movie/${id}`}>
        <Typography variant="h5" component="p" className={style.text}>
          {title}
        </Typography>
      </Link>
      <Typography component="span" className={style.text} title="genres">
        {genres_string}
      </Typography>
    </div>
  );
}

export default Card;

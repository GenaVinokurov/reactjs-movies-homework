import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import classNames from 'classnames';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { TypeMovieCard } from '../types';
import style from './Card.module.scss';
import { useAppSelector } from '../../store/store';

function Card(movieData: TypeMovieCard) {
  const { title, vote_average, poster_path, genre_ids, actorClass, id } = movieData;
  const { genresArray } = useAppSelector((state) => state.genres);
  const containerClasses = classNames(style.container, { [style.actor__class]: actorClass });
  const imgClasses = classNames(style.img, { [style.actor__img]: actorClass });

  return (
    <div className={containerClasses} title="card">
      <span className={style.rating}>{vote_average}</span>
      <div
        style={{ backgroundImage: ` URL(https://image.tmdb.org/t/p/original${poster_path})` }}
        className={imgClasses}
      >
        <div className={style.substrate}>
          <a href="*" className={style.link__video}>
            <PlayCircleIcon
              sx={{ width: '100px', height: '100px', zIndex: 2, color: 'success.light' }}
            />
          </a>
        </div>
      </div>
      <Link to={`/movie/${id}`}>
        <Typography variant="h5" component="p" className={style.text}>
          {title}
        </Typography>
      </Link>
      <Typography component="span" className={style.text}>
        {genre_ids.map((genreId) => `${genresArray.find((el) => el.id === genreId)?.name} ` || '')}
      </Typography>
    </div>
  );
}

export default Card;

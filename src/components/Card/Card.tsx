import { Typography } from '@mui/material';
import React from 'react';
import classNames from 'classnames';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { TypeMovieCard } from '../types';
import style from './Card.module.scss';
import { useAppSelector } from '../../hooks/redux';

function Card(movieData: TypeMovieCard) {
  const { title, vote_average, poster_path, genre_ids, actorClass } = movieData;
  const { genresArray } = useAppSelector((state) => state.genreReducer);
  const containerClasses = classNames(style.container, { [style.actor__class]: actorClass });
  const imgClasses = classNames(style.img, { [style.actor__img]: actorClass });
  // console.log(genre_ids, genres);

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
      <Typography variant="h5" component="p" className={style.text}>
        {title}
      </Typography>
      <Typography component="span" className={style.text}>
        {genresArray.map((el) => {
          return genre_ids.map((id) => {
            return id === el.id ? `${el.name} ` : null;
          });
        })}
      </Typography>
    </div>
  );
}

export default Card;

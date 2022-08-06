import { Typography } from '@mui/material';
import React from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { TypeMovieCard } from '../types';
import style from './Card.module.scss';

function Card(movieData: TypeMovieCard) {
  const { title, vote_average, poster_path, genre } = movieData;
  return (
    <div className={style.container}>
      <span className={style.rating}>{vote_average}</span>
      <div style={{ backgroundImage: ` URL(${poster_path})` }} className={style.img}>
        <div className={style.substrate}>
          <a href="*" className={style.link__video}>
            <PlayCircleIcon
              sx={{ width: '100px', height: '100px', zIndex: 2, color: 'success.light' }}
            />
          </a>
        </div>
      </div>
      <Typography variant="h5" component="p">
        {title}
      </Typography>
      <Typography component="span">{genre}</Typography>
    </div>
  );
}

export default Card;

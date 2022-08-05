import { Typography } from '@mui/material';
import React from 'react';
import { TypeMovieCard } from '../types';
import style from './Card.module.scss';

function Card(movieData: TypeMovieCard) {
  const { title, vote_average, poster_path, genre } = movieData;
  return (
    <div className={style.container}>
      <span className={style.rating}>{vote_average}</span>
      <img src={poster_path} alt="pic" className={style.img} />
      <Typography variant="h5" component="p">
        {title}
      </Typography>
      <Typography component="span">{genre}</Typography>
    </div>
  );
}

export default Card;

import React from 'react';
import { Typography } from '@mui/material';
import { TypeMovieCastData } from '../types';
import style from './CardActor.module.scss';

function CardActor(actorData: TypeMovieCastData) {
  const { profile_path, name, character } = actorData;

  return (
    <div className={style.container}>
      <div
        style={{ backgroundImage: ` URL(https://image.tmdb.org/t/p/original${profile_path})` }}
        className={style.img}
      />
      <Typography variant="h5" component="p" className={style.text}>
        {name}
      </Typography>
      <Typography component="span" className={style.text}>
        {character}
      </Typography>
    </div>
  );
}

export default CardActor;

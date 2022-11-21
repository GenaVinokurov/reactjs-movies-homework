import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { TypeMovieCastData } from '../types';
import style from './CardActor.module.scss';

function CardActor({ profile_path, name, character, id }: TypeMovieCastData) {
  return (
    <div className={style.container}>
      <div
        style={{ backgroundImage: ` URL(https://image.tmdb.org/t/p/original${profile_path})` }}
        className={style.img}
      />
      <Link to={`../actor/${id}`}>
        <Typography variant="h5" component="p" className={style.text}>
          {name}
        </Typography>
      </Link>

      <Typography component="span" className={style.text}>
        {character}
      </Typography>
    </div>
  );
}

export default CardActor;

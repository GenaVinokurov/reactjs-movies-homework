import React from 'react';
import { Typography } from '@mui/material';
import style from './ActorPage.module.scss';
import dataActor from '../../mockedData/data-actor.json';
import dataMoves from '../../mockedData/data-movies.json';
import Card from '../../components/Card';

function ActorPage() {
  const { poster_path, name, birthday, place_of_birth, biography } = dataActor;
  return (
    <div className={style.container}>
      <div className={style.main}>
        <img src={poster_path} alt="poster" className={style.photo} />
        <div className={style.information}>
          <Typography variant="h4" component="p">
            {name}
          </Typography>
          <div className={style.text__wrapper}>
            <Typography variant="subtitle2" component="span">
              Birthday:
            </Typography>
            <Typography variant="subtitle1" component="span">
              {birthday}
            </Typography>
          </div>
          <div className={style.text__wrapper}>
            <Typography variant="subtitle2" component="span">
              Place of birth:
            </Typography>
            <Typography variant="subtitle1" component="span">
              {place_of_birth}
            </Typography>
          </div>
          <div className={style.text__wrapper}>
            <Typography variant="subtitle2" component="span">
              Biography:
            </Typography>
            <Typography variant="subtitle1" component="span" className={style.text__biography}>
              {biography}
            </Typography>
          </div>
          <div className={style.text__wrapper}>
            <Typography variant="subtitle2" component="span">
              Photos:
            </Typography>
            <div className={style.photos__container}>
              <img src={poster_path} alt="another" className={style.photo} />
              <img src={poster_path} alt="another" className={style.photo} />
              <img src={poster_path} alt="another" className={style.photo} />
              <img src={poster_path} alt="another" className={style.photo} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.collection}>
        <Typography variant="h3" component="p" sx={{ mb: '45px' }}>
          KNOWN BY
        </Typography>
        <div className={style.collection__wrapper}>
          {dataMoves &&
            dataMoves.map((movie) => {
              return <Card key={movie.id} {...movie} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default ActorPage;

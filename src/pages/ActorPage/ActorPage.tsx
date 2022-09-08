import React from 'react';
import { Typography } from '@mui/material';
import style from './ActorPage.module.scss';
import dataActor from '../../mockedData/data-actor.json';
// import dataMovies from '../../mockedData/data-movies.json';
// import Card from '../../components/Card';
import Paragraph from '../../components/Paragraph';

function ActorPage() {
  const { poster_path, name, birthday, place_of_birth, biography } = dataActor;
  return (
    <div className={style.container}>
      <div className={style.main}>
        <img src={poster_path} alt="poster" className={style.photo} />
        <div className={style.information}>
          <Typography variant="h4" component="p" data-testid="name">
            {name}
          </Typography>
          <Paragraph title="Birthday:" content={birthday} />
          <Paragraph title="Place of birth:" content={place_of_birth} />
          <Paragraph title="Biography:" content={biography} />
          <div>
            <Typography variant="h6" component="p" sx={{ mb: '10px' }}>
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
        <Typography variant="h3" component="p" sx={{ mb: '15px' }}>
          KNOWN BY
        </Typography>
        {/* <div className={style.collection__wrapper}>
          {dataMovies?.map((movie, i) => {
            return i < 10 ? <Card key={movie.id} {...movie} /> : null;
          })}
        </div> */}
      </div>
    </div>
  );
}

export default ActorPage;

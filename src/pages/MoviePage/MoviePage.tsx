import React, { useState } from 'react';
import { Chip, Typography } from '@mui/material';
import classNames from 'classnames';
import style from './MoviePage.module.scss';
import dataMovies from '../../mockedData/data-movies.json';
import dataMovie from '../../mockedData/data-movie.json';
import dataImages from '../../mockedData/data-images.json';
import Card from '../../components/Card';
import Paragraph from '../../components/Paragraph';
import { TypeDataMovie } from '../../components/types';
import ButtonElem from '../../components/ButtonElem';

function MoviePage() {
  const { original_title, poster_path, overview, release_date, revenue, runtime, genres } =
    dataMovie as TypeDataMovie;
  const [isOpenActors, setIsOpenActors] = useState(false);
  const actorsClassNames = classNames(style.actors__wrapper, {
    [style.actors__active]: isOpenActors,
  });

  const isOpenActorsCollection = () => {
    setIsOpenActors(() => !isOpenActors);
  };

  return (
    <div className={style.container}>
      <div className={style.main}>
        <img src={poster_path} alt="poster" className={style.photo} data-testid="img" />
        <div className={style.information}>
          <div>
            <Typography variant="subtitle2" component="span">
              Title:
            </Typography>
            <Typography variant="h4" component="p">
              {original_title}
            </Typography>
          </div>
          <Paragraph title="Overview:" content={overview} />
          <Paragraph title="Release date:" content={release_date} />
          <Paragraph title="Revenue:" content={`$ ${revenue}`} />
          <Paragraph title="Duration:" content={runtime} />
          <div className={style.genre__wrapper}>
            {genres?.map((genre) => {
              return <Chip key={genre.id} label={genre.name} color="success" />;
            })}
          </div>
          <div className={style.actors__collection}>
            <div className={style.actors__head}>
              <Typography variant="subtitle2" component="span">
                Top Billed Cast
              </Typography>
              <ButtonElem
                onClick={isOpenActorsCollection}
                buttonClassName={style.actors__btn}
                variant="contained"
              >
                {isOpenActors ? 'Hide' : 'Show all'}
              </ButtonElem>
            </div>
            {/* <div className={actorsClassNames}>
              {dataMovies &&
                dataMovies.map((movie) => {
                  return <Card key={movie.id} actorClass {...movie} />;
                })}
            </div> */}
          </div>
          <div className={style.text__wrapper}>
            <Typography variant="h6" component="p" sx={{ mb: '10px' }}>
              Images
            </Typography>
            <div className={style.images__container}>
              {dataImages &&
                dataImages.map((img) => {
                  return (
                    <div
                      className={style.image}
                      key={img.id}
                      style={{ backgroundImage: ` URL(${img.backdrops.file_path})` }}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className={style.collection}>
        <Typography variant="h3" component="p" sx={{ mb: '15px' }}>
          Recommendations
        </Typography>
        {/* <div className={style.collection__wrapper}>
          {dataMovies &&
            dataMovies.map((movie, i) => {
              return i < 5 ? <Card key={movie.id} {...movie} /> : null;
            })}
        </div> */}
      </div>
    </div>
  );
}

export default MoviePage;

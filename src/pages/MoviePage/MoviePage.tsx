import React, { useEffect, useState } from 'react';
import { Chip, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
// import classNames from 'classnames';
import Card from '../../components/Card';
import Paragraph from '../../components/Paragraph';
import ButtonElem from '../../components/ButtonElem';
import { TypeMoviePage } from '../../components/types';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchAllDataMovie } from '../../store/reducers/MovieActions';
import style from './MoviePage.module.scss';
import { fetchGenresData } from '../../store/reducers/CardsActions';

function MoviePage() {
  const [isOpenActors, setIsOpenActors] = useState(false);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  // const actorsClassNames = classNames(style.actors__wrapper, {
  //   [style.actors__active]: isOpenActors,
  // });
  const isOpenActorsCollection = () => {
    setIsOpenActors(() => !isOpenActors);
  };

  const { data, images, recommendations, loading } = useAppSelector((state) => state.movie) || {};
  const { genresArray } = useAppSelector((state) => state.genres);

  useEffect(() => {
    dispatch(fetchAllDataMovie(Number(id)));
    if (genresArray.length === 0) dispatch(fetchGenresData());
  }, [id, genresArray.length, dispatch]);

  if (!data || loading) return <div>Loading...</div>;

  const { poster_path, title, overview, release_date, revenue, runtime, genres } =
    data as TypeMoviePage;

  const getTimeFromMins = (mins: number): string => {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return `${hours}:${minutes}`;
  };

  return (
    <div className={style.container}>
      <div className={style.main}>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt="poster"
          className={style.photo}
        />
        <div className={style.information}>
          <div>
            <Typography variant="subtitle2" component="span">
              Title:
            </Typography>
            <Typography variant="h4" component="p">
              {title}
            </Typography>
          </div>
          {overview && <Paragraph title="Overview:" content={overview} />}
          <Paragraph title="Release date:" content={release_date} />
          <Paragraph title="Revenue:" content={`$ ${revenue}`} />
          {runtime && <Paragraph title="Duration:" content={getTimeFromMins(runtime)} />}
          <div className={style.genre__wrapper}>
            {genres.map((genre) => {
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
              {images?.map((img, i) => {
                return i < 8 ? (
                  <div
                    className={style.image}
                    key={img.file_path}
                    style={{
                      backgroundImage: ` URL(https://image.tmdb.org/t/p/original${img.file_path})`,
                    }}
                  />
                ) : null;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={style.collection}>
        <Typography variant="h3" component="p" sx={{ mb: '15px' }}>
          Recommendations
        </Typography>
        <div className={style.collection__wrapper}>
          {recommendations?.map((movie, i) => {
            return i < 5 ? <Card key={movie.id} {...movie} /> : null;
          })}
        </div>
      </div>
    </div>
  );
}

export default MoviePage;

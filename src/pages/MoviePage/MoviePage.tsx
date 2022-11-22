import React, { useEffect, useState } from 'react';
import { Chip, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import Card from '../../components/Card';
import Paragraph from '../../components/Paragraph';
import ButtonElem from '../../components/ButtonElem';
import Loader from '../../components/Loader';
import CardActor from '../../components/CardActor';
import { TypeMoviePage, TypeMovieCard } from '../../components/types';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchAllDataMovie } from '../../store/reducers/MovieActions';
import { getTimeFromMins } from '../../helpers';
import style from './MoviePage.module.scss';
import { MAX_IMAGES, MAX_RECOMMENDATIONS } from '../../constants';
import { fetchGenresData } from '../../store/reducers/CardsActions';

function MoviePage() {
  const [isOpenActors, setIsOpenActors] = useState(false);
  const dispatch = useAppDispatch();
  const { id: movieId } = useParams();
  const actorsClassNames = classNames(style.actors__wrapper, {
    [style.actors__active]: isOpenActors,
  });
  const isOpenActorsCollection = () => {
    setIsOpenActors(() => !isOpenActors);
  };
  const { genresArray } = useAppSelector((state) => state.genres);
  const { data, images, recommendations, cast, loading } =
    useAppSelector((state) => state.movie) || {};
  const { lang } = useAppSelector((state) => state.language);

  useEffect(() => {
    dispatch(fetchGenresData(lang));
    dispatch(fetchAllDataMovie(Number(movieId), lang));
  }, [movieId, dispatch, lang]);

  if (loading) return <Loader />;
  if (!data) return <div>Do not have data</div>;

  const { poster_path, title, overview, release_date, revenue, runtime, genres } =
    data as TypeMoviePage;

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
            <div className={actorsClassNames}>
              {cast?.map(({ id, profile_path, name, character }) => {
                return (
                  <CardActor
                    key={id}
                    profile_path={profile_path}
                    name={name}
                    character={character}
                    id={id}
                  />
                );
              })}
            </div>
          </div>
          <div className={style.text__wrapper}>
            <Typography variant="h6" component="p" sx={{ mb: '10px' }}>
              Images
            </Typography>
            <div className={style.images__container}>
              {images?.slice(0, MAX_IMAGES).map((img) => {
                return (
                  <div
                    className={style.image}
                    key={img.file_path}
                    style={{
                      backgroundImage: ` URL(https://image.tmdb.org/t/p/original${img.file_path})`,
                    }}
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
        <div className={style.collection__wrapper}>
          {recommendations
            ?.slice(0, MAX_RECOMMENDATIONS)
            .map(
              ({
                title: cardTitle,
                vote_average,
                poster_path: path,
                id,
                genre_ids,
              }: TypeMovieCard) => {
                const genresResult = genre_ids
                  .map((genreId) => `${genresArray.find((el) => el.id === genreId)?.name} ` || '')
                  .join('');
                return (
                  <Card
                    key={id}
                    genres_string={genresResult}
                    title={cardTitle}
                    vote_average={vote_average}
                    poster_path={path}
                    id={id}
                  />
                );
              }
            )}
        </div>
      </div>
    </div>
  );
}

export default MoviePage;

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { Typography } from '@mui/material';
import style from './ActorPage.module.scss';
import Card from '../../components/Card';
import Paragraph from '../../components/Paragraph';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchAllDataActor } from '../../store/reducers/Actor/ActorActions';
import { fetchGenresData } from '../../store/reducers/Genres/GenresActions';
import Loader from '../../components/Loader/Loader';
import { MAX_ACTOR_FILMS, MAX_ACTOR_IMAGES } from '../../constants';
import { TypeMovieCard } from '../../components/types';
import { convertGenresToString } from '../../helpers';

function ActorPage() {
  const dispatch = useAppDispatch();
  const { id: actorId } = useParams();
  const { data, images, films, loading } = useAppSelector((state) => state.actor);
  const { genresArray } = useAppSelector((state) => state.genres);
  const { lang } = useAppSelector((state) => state.language);
  const intl = useIntl();

  useEffect(() => {
    dispatch(fetchGenresData(lang));
    dispatch(fetchAllDataActor(Number(actorId), lang));
  }, [actorId, dispatch, lang]);

  if (loading) return <Loader />;
  if (!data) return <div>Do not have data</div>;

  const { profile_path, name, birthday, place_of_birth, biography } = data;

  return (
    <div className={style.container}>
      <div className={style.main}>
        <img
          src={`https://image.tmdb.org/t/p/original${profile_path}`}
          alt="poster"
          className={style.photo}
        />
        <div className={style.information}>
          <Typography variant="h4" component="p" data-testid="name">
            {name}
          </Typography>
          <Paragraph title={intl.formatMessage({ id: 'actor-birthday' })} content={birthday} />
          <Paragraph title={intl.formatMessage({ id: 'actor-place' })} content={place_of_birth} />
          <Paragraph title={intl.formatMessage({ id: 'actor-biography' })} content={biography} />
          <div>
            <Typography variant="h5" component="p" sx={{ mb: '10px' }}>
              {intl.formatMessage({ id: 'actor-photos' })}
            </Typography>
            <div className={style.photos__container}>
              {images?.slice(0, MAX_ACTOR_IMAGES).map((img) => (
                <img
                  src={`https://image.tmdb.org/t/p/original${img.file_path}`}
                  alt="actor"
                  className={style.photo}
                  key={img.file_path}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={style.collection}>
        <Typography variant="h3" component="p" sx={{ mb: '15px' }}>
          {intl.formatMessage({ id: 'actor-known' })}
        </Typography>
        <div className={style.collection__wrapper}>
          {films
            ?.slice(0, MAX_ACTOR_FILMS)
            .map(({ title, vote_average, poster_path, id, genre_ids }: TypeMovieCard) => {
              const genres = convertGenresToString(genre_ids, genresArray);
              return (
                <Card
                  key={id}
                  genres_string={genres}
                  title={title}
                  vote_average={vote_average}
                  poster_path={poster_path}
                  id={id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ActorPage;

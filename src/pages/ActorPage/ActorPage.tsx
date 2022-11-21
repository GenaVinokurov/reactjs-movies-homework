import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import style from './ActorPage.module.scss';
import Card from '../../components/Card';
import Paragraph from '../../components/Paragraph';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchAllDataActor } from '../../store/reducers/ActorActions';
import { fetchGenresData } from '../../store/reducers/CardsActions';
import Loader from '../../components/Loader/Loader';
import { MAX_ACTOR_FILMS, MAX_ACTOR_IMAGES } from '../../constants';
import { TypeMovieCard } from '../../components/types';

function ActorPage() {
  const dispatch = useAppDispatch();
  const { id: actorId } = useParams();
  const { data, images, films, loading } = useAppSelector((state) => state.actor);
  const { genresArray } = useAppSelector((state) => state.genres);

  useEffect(() => {
    dispatch(fetchGenresData());
    dispatch(fetchAllDataActor(Number(actorId)));
  }, [actorId, dispatch]);

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
          <Paragraph title="Birthday:" content={birthday} />
          <Paragraph title="Place of birth:" content={place_of_birth} />
          <Paragraph title="Biography:" content={biography} />
          <div>
            <Typography variant="h6" component="p" sx={{ mb: '10px' }}>
              Photos:
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
          KNOWN BY
        </Typography>
        <div className={style.collection__wrapper}>
          {films
            ?.slice(0, MAX_ACTOR_FILMS)
            .map(({ title, vote_average, poster_path, id, genre_ids }: TypeMovieCard) => {
              const genres = genre_ids
                .map((genreId) => `${genresArray.find((el) => el.id === genreId)?.name} ` || '')
                .join('');
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

import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '@mui/material';
import Card from '../../components/Card';
import SortBlock from '../../components/SortBlock';
import Loader from '../../components/Loader';
import { TypeMovieCard } from '../../components/types';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { actionsCardsMovie } from '../../store/reducers/CardsMovieSlice';
import {
  fetchAllDataCards,
  fetchGenresData,
  fetchSearchData,
} from '../../store/reducers/CardsActions';
import { TOTAL_PAGES_LIMITER } from '../../constants';
import style from './Main.module.scss';
import MovieVideo from '../../components/MovieVideo';

function Main() {
  const { cards, sort, page, totalPages, isLoading, isModalOpen } = useAppSelector(
    (state) => state.cardsMovie
  );
  const { genresArray } = useAppSelector((state) => state.genres);
  const { lang } = useAppSelector((state) => state.language);
  const { changePage, switchIsModalOpen } = actionsCardsMovie;
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const postQuery = searchParams.get('q');

  useEffect(() => {
    dispatch(fetchGenresData(lang));
    if (postQuery) dispatch(fetchSearchData(postQuery, lang));
    else dispatch(fetchAllDataCards(sort, page, lang));
  }, [dispatch, page, sort, postQuery, lang]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(changePage(value));
  };
  const handleOpenModal = () => {
    dispatch(switchIsModalOpen(!isModalOpen));
  };

  return (
    <main className={style.container}>
      <SortBlock />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {cards.length === 0 && <p className={style.empty}> Movies not found</p>}
          <div className={style.cards__container}>
            {cards.map(({ title, vote_average, poster_path, id, genre_ids }: TypeMovieCard) => {
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
        </>
      )}

      <div className={style.pagination__wrapper}>
        <Pagination
          count={totalPages < TOTAL_PAGES_LIMITER ? totalPages : TOTAL_PAGES_LIMITER}
          onChange={handleChange}
          color="primary"
          hideNextButton
          hidePrevButton
        />
      </div>
      <MovieVideo open={isModalOpen} onClose={handleOpenModal} />
    </main>
  );
}

export default Main;

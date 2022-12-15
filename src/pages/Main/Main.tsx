import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '@mui/material';
import Card from '../../components/Card';
import SortBlock from '../../components/SortBlock';
import Loader from '../../components/Loader';
import { TypeMovieCard } from '../../components/types';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  fetchAllDataCards,
  fetchGenresData,
  fetchSearchData,
} from '../../store/reducers/Cards/CardsActions';
import { TOTAL_PAGES_LIMITER } from '../../constants';
import style from './Main.module.scss';

function Main() {
  const { cards, sort, totalPages, isLoading } = useAppSelector((state) => state.cardsMovie);
  const { genresArray } = useAppSelector((state) => state.genres);
  const { lang } = useAppSelector((state) => state.language);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const pageQuery = searchParams.get('page') || '1';

  useEffect(() => {
    dispatch(fetchGenresData(lang));
    if (searchQuery) {
      dispatch(fetchSearchData(searchQuery, pageQuery, lang));
    } else dispatch(fetchAllDataCards(sort, pageQuery, lang));
  }, [dispatch, pageQuery, sort, searchQuery, lang]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams({
      ...(searchQuery ? { search: searchQuery } : { sort }),
      page: value.toString(),
    });
  };

  return (
    <main className={style.container}>
      {!searchQuery && <SortBlock />}
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
          page={Number(pageQuery)}
          color="primary"
          hideNextButton
          hidePrevButton
        />
      </div>
    </main>
  );
}

export default Main;

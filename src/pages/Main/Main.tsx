import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '@mui/material';
import Card from '../../components/Card';
import SortBlock from '../../components/SortBlock';
import Loading from '../../components/Loading';
import { TypeMovieCard } from '../../components/types';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { actionsCardsMovie } from '../../store/reducers/CardsMovieSlice';
import { fetchAllDataCards, fetchSearchData } from '../../store/reducers/CardsActions';
import { TOTAL_PAGES_LIMITER } from '../../constants';
import style from './Main.module.scss';

function Main() {
  const { cards, sort, page, totalPages, isLoading } = useAppSelector((state) => state.cardsMovie);
  const { changePage } = actionsCardsMovie;
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const postQuery = searchParams.get('q') || null;

  useEffect(() => {
    if (postQuery !== null) dispatch(fetchSearchData(postQuery));
    else dispatch(fetchAllDataCards(sort, page));
  }, [dispatch, page, sort, postQuery]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(changePage(value));
  };

  if (isLoading) return <Loading />;

  return (
    <main className={style.container}>
      <SortBlock />
      {cards.length === 0 && <p className={style.empty}> Movies not found</p>}
      <div className={style.cards__container}>
        {cards.map((movie: TypeMovieCard) => {
          return <Card key={movie.id} {...movie} />;
        })}
      </div>
      <div className={style.pagination__wrapper}>
        <Pagination
          count={totalPages < TOTAL_PAGES_LIMITER ? totalPages : TOTAL_PAGES_LIMITER}
          onChange={handleChange}
          color="primary"
          hideNextButton
          hidePrevButton
        />
      </div>
    </main>
  );
}

export default Main;

import React, { useEffect } from 'react';
import { Pagination } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/store';
import Card from '../../components/Card';
import SortBlock from '../../components/SortBlock';
import style from './Main.module.scss';
import { TypeMovieCard } from '../../components/types';
import { actionsCardsMovie } from '../../store/reducers/CardsMovieSlice';
import { fetchAllDataCards } from '../../store/reducers/CardsActions';
import { TOTAL_PAGES_LIMITER } from '../../constants';

function Main() {
  const { cards, sort, page, totalPages, isLoading } = useAppSelector((state) => state.cardsMovie);
  const { changePage } = actionsCardsMovie;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllDataCards(sort, page));
  }, [dispatch, page, sort]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(changePage(value));
  };
  return (
    <main className={style.container}>
      <SortBlock />
      {cards.length === 0 && <p className={style.empty}> Movies not found</p>}
      <div className={style.cards__container}>
        {isLoading && <p className={style.empty}>Loading...</p>}
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

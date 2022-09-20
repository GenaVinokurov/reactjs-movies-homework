import React, { useEffect } from 'react';
import { Pagination } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Card from '../../components/Card';
import SortBlock from '../../components/SortBlock';
import style from './Main.module.scss';
import { TypeMovieCard } from '../../components/types';
import { listSlice } from '../../store/reducers/ListSlice';
import { fetchAllDataCards } from '../../store/reducers/CardsActions';

function Main() {
  const { cards, sort, page, totalPages, isLoading } = useAppSelector((state) => state.listReducer);
  const { changePage } = listSlice.actions;
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
      <div className={style.cards__container}>
        {isLoading && 'Loading...'}
        {cards.map((movie: TypeMovieCard) => {
          return <Card key={movie.id} {...movie} />;
        })}
      </div>
      <div className={style.pagination__wrapper}>
        <Pagination
          count={totalPages}
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

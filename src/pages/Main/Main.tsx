import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import Card from '../../components/Card';
import SortBlock from '../../components/SortBlock';
import style from './Main.module.scss';
import dataMovies from '../../mockedData/data-movies.json';
import { TypeMovieCard } from '../../components/types';

function Main() {
  const [data, setData] = useState<TypeMovieCard[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    setData(dataMovies);
    setLoading(false);
  }, []);

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentMoviesList = data.slice(indexOfFirst, indexOfLast);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <main className={style.container}>
      <SortBlock />
      <div className={style.cards__container}>
        {currentMoviesList &&
          currentMoviesList.map((movie) => {
            return <Card key={movie.id} {...movie} />;
          })}
      </div>
      <div className={style.pagination__wrapper}>
        <Pagination
          count={Math.ceil(data.length / perPage)}
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

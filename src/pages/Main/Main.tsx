import React, { useEffect } from 'react';
import { Pagination } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Card from '../../components/Card';
import SortBlock from '../../components/SortBlock';
import style from './Main.module.scss';
// import dataMovies from '../../mockedData/data-movies.json';
// import { TypeMovieCard } from '../../components/types';
import ApiService from '../../store/reducers/ApiService';
import { TypeMovieCard } from '../../components/types';
import { listSlice } from '../../store/reducers/ListSlice';

function Main() {
  const { sort, page, totalPages } = useAppSelector((state) => state.listReducer);
  const { changePage, changeTotalPages } = listSlice.actions;
  const dispatch = useAppDispatch();
  const { data, isLoading } = ApiService.useGetMoviesQuery([sort, page]);
  // const [data, setData] = useState<TypeMovieCard[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (data?.total_pages) dispatch(changeTotalPages(data.total_pages));
  }, [data, changeTotalPages, dispatch]);

  // const indexOfLast = currentPage * PERPAGE;
  // const indexOfFirst = indexOfLast - PERPAGE;
  // const currentMoviesList = data.slice(indexOfFirst, indexOfLast);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(changePage(value));
  };
  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }
  return (
    <main className={style.container}>
      <SortBlock />
      <div className={style.cards__container}>
        {isLoading && 'Loading...'}
        {data?.results.map((movie: TypeMovieCard) => {
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

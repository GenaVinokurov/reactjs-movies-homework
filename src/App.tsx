import React, { useEffect } from 'react';
import { Container } from '@mui/system';
import './App.scss';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import { useAppDispatch } from './hooks/redux';
import { fetchGenresData } from './store/reducers/CardsActions';
// import ActorPage from './pages/ActorPage';
// import MoviePage from './pages/MoviePage';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGenresData);
  }, [dispatch]);
  return (
    <div className="app">
      <Header />
      <Container sx={{ mt: '1rem' }} maxWidth="xl">
        <Main />
        {/* <ActorPage /> */}
        {/* <MoviePage /> */}
      </Container>
      <Footer />
    </div>
  );
}

export default App;

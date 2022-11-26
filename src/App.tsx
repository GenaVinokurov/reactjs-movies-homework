import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/system';
import './App.scss';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import ActorPage from './pages/ActorPage';
import MoviePage from './pages/MoviePage';
import PageNotFound from './pages/PageNotFound';
import LocalizationProvider from './localization/LocalizationProvider';

function App() {
  return (
    <LocalizationProvider>
      <div className="app">
        <Header />
        <Container sx={{ mt: '1rem' }} maxWidth="xl" style={{ display: 'block' }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/search" element={<Main />} />
            <Route path="/actor/:id" element={<ActorPage />} />
            <Route path="/movie/:id" element={<MoviePage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </LocalizationProvider>
  );
}

export default App;

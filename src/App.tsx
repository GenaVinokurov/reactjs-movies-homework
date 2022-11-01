import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/system';
import './App.scss';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import ActorPage from './pages/ActorPage';
import MoviePage from './pages/MoviePage';

function App() {
  return (
    <div className="app">
      <Header />
      <Container sx={{ mt: '1rem' }} maxWidth="xl">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/actor" element={<ActorPage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { Container } from '@mui/system';
import './App.scss';
// import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
// import ActorPage from './pages/ActorPage';
import MoviePage from './pages/MoviePage';

function App() {
  return (
    <div className="app" data-testid="app">
      <Header />
      <Container sx={{ mt: '1rem' }} maxWidth="xl">
        {/* <Main /> */}
        {/* <ActorPage /> */}
        <MoviePage />
      </Container>
      <Footer />
    </div>
  );
}

export default App;

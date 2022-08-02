import React from 'react';
import { Container } from '@mui/system';
import './App.scss';
import Main from './pages/Main';
import Header from './components/Header';

function App() {
  return (
    <div className="app" data-testid="app">
      <Header />
      <Container sx={{ mt: '1rem' }}>
        <Main />
      </Container>
    </div>
  );
}

export default App;

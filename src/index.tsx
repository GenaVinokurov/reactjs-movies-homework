import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
import { setupStore } from './store/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const theme = createTheme({
  palette: {
    primary: {
      main: '#283593',
    },
    secondary: {
      main: '#ffeb3b',
    },
  },
});
const store = setupStore();
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import App from 'components/App/App';
import './index.css';

const theme = {
  colors: {
    backgroundColor: '#307ec6',
    containerBackgroundColor: '#c0d8ed',
    imageBackgroundColor: '#eceef0',
    secondaryTextColor: 'white',
    containerBorderRadius: '20px',
    elementBorderRadius: '5px',
    boxShadow: '3px 5px 10px 3px rgba(0, 0, 0, 0.30)',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

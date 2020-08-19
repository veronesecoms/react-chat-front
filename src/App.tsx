import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import LoginWrapper from './pages/login-wrapper/LoginWrapper';
import './App.css';
import theme from './resources/material-theme-provider';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LoginWrapper />
      </ThemeProvider>
    </>
  );
};

export default App;

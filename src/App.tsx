import {ThemeProvider, CssBaseline} from '@material-ui/core';
import React from 'react';
import LoginWrapper from './pages/login-wrapper/LoginWrapper';
import './App.css';
import theme from './resources/material-theme-provider';
import {SnackbarProvider} from 'notistack';
import Home from './pages/home/Home';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider autoHideDuration={3500} maxSnack={3}>
          <Home />
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
};

export default App;

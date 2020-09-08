import {ThemeProvider} from '@material-ui/core';
import React from 'react';
import LoginWrapper from './pages/login-wrapper/LoginWrapper';
import './App.css';
import theme from './resources/material-theme-provider';
import {SnackbarProvider} from 'notistack';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SnackbarProvider autoHideDuration={3500} maxSnack={3}>
          <LoginWrapper />
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
};

export default App;

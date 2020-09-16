import { ThemeProvider, CssBaseline } from "@material-ui/core";
import React from "react";
import LoginWrapper from "./pages/login-wrapper/LoginWrapper";
import "./App.css";
import history from "./utils/history";
import theme from "./resources/material-theme-provider";
import { SnackbarProvider } from "notistack";
import Home from "./pages/home/Home";
import { Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <>
      <Router history={history}>
      <SnackbarProvider autoHideDuration={3500} maxSnack={3}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <AppRouter />
        </ThemeProvider>
      </SnackbarProvider>
      </Router>
    </>
  );
};

export default App;

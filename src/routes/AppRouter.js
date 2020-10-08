import React from 'react';
import { Router, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import LoginWrapper from '../pages/login-wrapper/LoginWrapper';
import history from '../utils/history';
import PrivateRoute from './PrivateRoute';
import PrivateRouteLogged from './PrivateRouteLogged';

const AppRouter = (props) => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PrivateRoute path="/home" component={Home} />
          <PrivateRouteLogged path="/" component={LoginWrapper} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;

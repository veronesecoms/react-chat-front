import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRouteLogged = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/home',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRouteLogged;

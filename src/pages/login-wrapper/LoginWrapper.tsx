import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import BannerLeft from './banner-left/BannerLeft';
import BannerRightLogin from './banner-right-login/BannerRightLogin'
import BannerRightRegister from './banner-right-register/BannerRightRegister';
import { Wrapper, FullContainerHeight, GridBanners } from './LoginWrapperComponentStyles';

const LoginWrapper = () => {

  return (
    <Router>
      <Wrapper>
        <CssBaseline />
        <FullContainerHeight maxWidth="md">
          <GridBanners container>
            <BannerLeft />
            <Switch>
              <Route exact path="/" component={BannerRightLogin} />
              <Route path="/register" component={BannerRightRegister} />
            </Switch>
          </GridBanners>
        </FullContainerHeight>
      </Wrapper>
    </Router>
  );
};

export default LoginWrapper;

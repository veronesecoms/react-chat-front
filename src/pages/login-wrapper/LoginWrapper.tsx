import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BannerLeft from "./banner-left/BannerLeft";
import BannerRightLogin from "./banner-right-login/BannerRightLogin";
import BannerRightRegister from "./banner-right-register/BannerRightRegister";
import {
  Wrapper,
  FullContainerHeight,
  GridBanners,
} from "./LoginWrapperComponentStyles";
import BannerRightConfirmEmail from "./banner-right-confirm-email/BannerRightConfirmEmail";
import BannerRightRecoveryPassword from "./banner-right-recovery-password/BannerRightRecoveryPassword";
import BannerRightConfirmRecoveryPassword from "./banner-right-confirm-recovery-password/BannerRightConfirmRecoveryPassword";

const LoginWrapper = () => {
  const routes = [
    { path: "/login", component: BannerRightLogin },
    { path: "/register", component: BannerRightRegister },
    { path: "/confirmEmail/:token", component: BannerRightConfirmEmail },
    { path: "/recoveryPassword", component: BannerRightRecoveryPassword },
    {
      path: "/confirmRecoveryPassword/:token",
      component: BannerRightConfirmRecoveryPassword,
    },
  ];

  return (
    <Wrapper>
      <FullContainerHeight maxWidth="md">
        <GridBanners container>
          <BannerLeft />
            <Switch>
              {routes.map((route) => (
                <Route
                  exact
                  key={route.path}
                  path={route.path}
                  component={route.component}
                />
              ))}
            </Switch>
        </GridBanners>
      </FullContainerHeight>
    </Wrapper>
  );
};

export default LoginWrapper;

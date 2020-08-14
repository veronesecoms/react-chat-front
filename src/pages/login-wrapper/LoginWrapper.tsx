import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import BannerLeft from './banner-left/BannerLeft';
import BannerRight from './banner-right/BannerRight'
import { Wrapper, FullContainerHeight, GridBanners } from './LoginWrapperComponentStyles';

const LoginWrapper = () => {

  return (
    <Wrapper>
      <CssBaseline />
      <FullContainerHeight maxWidth="md">
        <GridBanners container>
          <BannerLeft />
          <BannerRight />
        </GridBanners>
      </FullContainerHeight>
    </Wrapper>
  );
};

export default LoginWrapper;

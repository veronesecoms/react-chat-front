import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { TypingAnimation } from '../../../utils/animations/typing';
import { HalfCardLeft, HalfCardTitle, SvgCellPhone, DotTitle } from './BannerLeftStyledComponents';

const BannerLeft = () => {

  useEffect(() => {
    setTimeout(function() {
      TypingAnimation("Chat chat chat! :)", "titleTyping",  100);
    }, 1200)
  }, []);

  return (
    <HalfCardLeft>
      <Grid justify="center" container direction="row">
        <HalfCardTitle id="titleTyping" />
        <DotTitle>|</DotTitle>
      </Grid>
      <SvgCellPhone />
    </HalfCardLeft>
  );
};

export default BannerLeft;

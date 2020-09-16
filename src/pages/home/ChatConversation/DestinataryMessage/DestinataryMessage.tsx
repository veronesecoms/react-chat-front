import {Avatar, Grid} from '@material-ui/core';
import React from 'react';
import {
  DestinataryName,
  MessageContainer,
  MessageTime,
} from './DestinataryMessageStyles';

const DestinataryMessage = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={1}
        item
        md={12}>
        <Grid
          direction="column"
          container
          wrap="nowrap"
          alignItems="center"
          item
          md={1}>
          <Grid item>
            <Avatar src="https://i.pinimg.com/236x/bc/9a/8f/bc9a8f53ab34d2aa343002cf7952657c.jpg" />
          </Grid>
          <Grid item>
            <MessageTime>09:30</MessageTime>
          </Grid>
        </Grid>
        <Grid item>
          <MessageContainer>
            <DestinataryName>Ban</DestinataryName>
            Lorem ipsum dneafna n sei q láaaaaa itanhaem só mlk loko
          </MessageContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default DestinataryMessage;

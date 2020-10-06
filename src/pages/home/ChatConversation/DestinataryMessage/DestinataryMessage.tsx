import { Avatar, Grid } from '@material-ui/core';
import React from 'react';
import {
  DestinataryName,
  MessageContainer,
  MessageTime,
} from './DestinataryMessageStyles';

const DestinataryMessage = ({ message }) => {
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={1}
        item
        md={12}
      >
        <Grid
          direction="column"
          container
          wrap="nowrap"
          alignItems="center"
          item
          xs={2}
          md={1}
          sm={1}
        >
          <Grid item>
            <Avatar src={message.picture} />
          </Grid>
          <Grid item>
            <MessageTime>
              {new Date(message.createdAt).toLocaleTimeString('pt-BR', {
                hour: 'numeric',
                minute: 'numeric',
              })}
            </MessageTime>
          </Grid>
        </Grid>
        <Grid item xs={10} md="auto">
          <MessageContainer>
            <DestinataryName>{message.first_name}</DestinataryName>
            {message.body}
          </MessageContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default DestinataryMessage;

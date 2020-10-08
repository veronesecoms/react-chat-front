import { Avatar, Grid } from '@material-ui/core';
import React from 'react';
import { useEmailDestinatary } from '../../../../contexts/EmailDestinataryContext';
import {
  DestinataryName,
  MessageContainer,
  MessageTime,
} from './DestinataryMessageStyles';

const DestinataryMessage = ({ message }) => {
  const { pictureDestinatary } = useEmailDestinatary();
  return (
    <>
      <Grid container direction="row" alignItems="center" spacing={1} item>
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
            <Avatar src={pictureDestinatary} />
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
        <Grid item xs="auto" md="auto">
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

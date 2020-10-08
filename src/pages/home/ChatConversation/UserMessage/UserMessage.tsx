import { Grid } from '@material-ui/core';
import React from 'react';
import { HoursMessageSended, MessageContainer } from './UserMessageStyles';

const UserMessage = ({ message }) => {
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
          spacing={1}
          justify="center"
          alignItems="flex-end"
        >
          <Grid item>
            <MessageContainer>
              <HoursMessageSended>
                {new Date(message.createdAt).toLocaleTimeString('pt-BR', {
                  hour: 'numeric',
                  minute: 'numeric',
                })}
              </HoursMessageSended>
              {message.body}
            </MessageContainer>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default UserMessage;

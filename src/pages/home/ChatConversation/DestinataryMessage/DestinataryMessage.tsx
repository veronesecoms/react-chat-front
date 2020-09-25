import { Avatar, Grid } from "@material-ui/core";
import React from "react";
import { IMessage } from "../../ChatPanel/ChatPanel";
import {
  DestinataryName,
  MessageContainer,
  MessageTime,
} from "./DestinataryMessageStyles";

type MessageProps = {
  message: IMessage;
};

const DestinataryMessage = ({ message }: MessageProps) => {
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
          md={1}
        >
          <Grid item>
            <Avatar src={message.picture} />
          </Grid>
          <Grid item>
            <MessageTime>
              {new Date(message.createdAt).toLocaleTimeString("pt-BR", {
                hour: "numeric",
                minute: "numeric",
              })}
            </MessageTime>
          </Grid>
        </Grid>
        <Grid item>
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

import React, { useEffect, useState } from "react";
import { Grid, IconButton } from "@material-ui/core";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import {
  ChatContainer,
  ConversationWrapper,
  GridChatConversation,
  GridIconOptions,
} from "./ChatConversationStyles";
import DestinataryMessage from "./DestinataryMessage/DestinataryMessage";
import UserMessage from "./UserMessage/UserMessage";
import SendMessageInput from "./SendMessageInput/SendMessageInput";
import { useMessages } from "../../../contexts/MessagesContext";
import socketIOClient from "socket.io-client";

const ChatConversation = () => {
  const {messages} = useMessages()
  const [loggedUserEmail] = useState(localStorage.getItem('email'));

  useEffect(() => {
    const socket = socketIOClient("http://localhost:3100");
    socket.on("FromAPI", data => {
      console.log(data);
    });
    socket.emit('something', {obj: 'oi'})
  }, []);

  return (
    <GridChatConversation item md={8}>
      <ConversationWrapper>
        <Grid direction="row" container>
          <GridIconOptions container justify="flex-end" item md={12}>
            <IconButton color="secondary" aria-label="delete">
              <SettingsOutlinedIcon />
            </IconButton>
          </GridIconOptions>
          <ChatContainer>
            {messages && messages.map(message => (
              message.email === loggedUserEmail ? (
                <UserMessage message={message} key={message.id} />
              ) : (
                <DestinataryMessage message={message} key={message.id} />
              )
            ))}
          </ChatContainer>
          <SendMessageInput />
        </Grid>
      </ConversationWrapper>
    </GridChatConversation>
  );
};

export default ChatConversation;

import React from "react";
import { Container, Grid, IconButton } from "@material-ui/core";
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

const ChatConversation = () => {
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
            <DestinataryMessage />
            <UserMessage />
          </ChatContainer>
          <SendMessageInput />
        </Grid>
      </ConversationWrapper>
    </GridChatConversation>
  );
};

export default ChatConversation;

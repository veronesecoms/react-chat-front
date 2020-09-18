import React from "react";
import {
  ChatPanelWrapper,
  UserNameAndLastMessageTextWrapper,
  ListItemUserChat,
  InlineWrapper,
  TypographyDate,
} from "./ChatPanelStyles";
import { List, Typography, ListItemAvatar, Avatar } from "@material-ui/core";
import { useQuery } from "react-query";
import { getSummaryMessages } from "../../../services/messages/messages.service";
import SkeletonChatPanel from "./SkeletonChatPanel/SkeletonChatPanel";

export interface IMessagesSummary {
  id: number;
  body: string;
  first_name: string;
  email: string;
  picture: string;
  createdAt: Date;
}

const ChatPanel = () => {
  const { isLoading, data: messages } = useQuery(
    "getSummaryMessages",
    getSummaryMessages
  );

  return (
    <ChatPanelWrapper>
      <List>
        {isLoading ? (
          <SkeletonChatPanel />
        ) : (
          <>
            {messages &&
              messages.map((message) => (
                <ListItemUserChat key={message.id} button component="a" alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar src={message.picture} />
                  </ListItemAvatar>
                  <UserNameAndLastMessageTextWrapper
                    primary={
                      <InlineWrapper>
                        <Typography>{message.first_name}</Typography>
                        <TypographyDate>
                          {new Date(message.createdAt).toLocaleString("pt-BR")}
                        </TypographyDate>
                      </InlineWrapper>
                    }
                    secondary={
                      <Typography
                        noWrap={true}
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        {message.body}
                      </Typography>
                    }
                  />
                </ListItemUserChat>
              ))}
          </>
        )}
      </List>
    </ChatPanelWrapper>
  );
};

export default ChatPanel;

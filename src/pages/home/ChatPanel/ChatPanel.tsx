import React, { useEffect, useState } from "react";
import {
  ChatPanelWrapper,
  UserNameAndLastMessageTextWrapper,
  ListItemUserChat,
  InlineWrapper,
  TypographyDate,
} from "./ChatPanelStyles";
import { List, Typography, ListItemAvatar, Avatar } from "@material-ui/core";
import { useQuery } from "react-query";
import {
  getSummaryMessages,
  getUserMessages,
} from "../../../services/messages/messages.service";
import SkeletonChatPanel from "./SkeletonChatPanel/SkeletonChatPanel";
import { useMessages } from "../../../contexts/MessagesContext";

export interface IMessagesSummary {
  id: number;
  body: string;
  first_name: string;
  email: string;
  picture: string;
  createdAt: Date;
}

export interface IMessage {
  id: number;
  body: string;
  to_user_id: number;
  from_user_id: number;
  createdAt: Date;
  email: string;
  picture: string;
  first_name: string;
}

const ChatPanel = () => {
  const { setMessages } = useMessages();
  const [userEmailSelected, setUserEmailSelected] = useState<string | null>(
    null
  );
  useQuery(
    ["getMessagesFromUser", userEmailSelected],
    getUserMessages,
    {
      enabled: userEmailSelected !== null,
      onSuccess: (dataMessages: IMessage[]) => {
        setMessages(dataMessages);
      },
    }
  );
  const { isLoading, data: summaryMessages } = useQuery(
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
            {summaryMessages &&
              summaryMessages.map((message) => (
                <ListItemUserChat
                  key={message.id}
                  onClick={() => setUserEmailSelected(message.email)}
                  button
                  component="a"
                  alignItems="flex-start"
                >
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

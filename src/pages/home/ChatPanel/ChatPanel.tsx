import React from 'react';
import {
  ChatPanelWrapper,
  UserNameAndLastMessageTextWrapper,
  ListItemUserChat,
  InlineWrapper,
  TypographyDate,
  MessageList,
} from './ChatPanelStyles';
import { Typography, ListItemAvatar, Avatar } from '@material-ui/core';
import { useQuery } from 'react-query';
import { getSummaryMessages } from '../../../services/messages/messages.service';
import SkeletonChatPanel from './SkeletonChatPanel/SkeletonChatPanel';
import { useEmailDestinatary } from '../../../contexts/EmailDestinataryContext';

const ChatPanel = () => {
  const {
    setEmailDestinatary,
    emailDestinatary,
    setNameDestinatary,
  } = useEmailDestinatary();
  const { isLoading, data: summaryMessages } = useQuery(
    'getSummaryMessages',
    getSummaryMessages
  );

  return (
    <ChatPanelWrapper>
      <MessageList>
        {isLoading ? (
          <SkeletonChatPanel />
        ) : (
          <>
            {summaryMessages &&
              summaryMessages.map((message) => (
                <ListItemUserChat
                  selected={emailDestinatary === message.email ? true : false}
                  key={message.id}
                  onClick={() => {
                    setEmailDestinatary(message.email);
                    setNameDestinatary(message.first_name);
                  }}
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
                          {new Date(message.createdAt).toLocaleString('pt-BR')}
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
      </MessageList>
    </ChatPanelWrapper>
  );
};

export default ChatPanel;

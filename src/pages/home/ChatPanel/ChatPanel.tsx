import React from 'react';
import {
  ChatPanelWrapper,
  UserNameAndLastMessageTextWrapper,
  ListItemUserChat,
  InlineWrapper,
  TypographyDate,
} from './ChatPanelStyles';
import {List, Typography, ListItemAvatar, Avatar} from '@material-ui/core';

const ChatPanel = () => {
  return (
    <ChatPanelWrapper>
      <List>
        <ListItemUserChat button component="a" alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src="https://i.pinimg.com/236x/bc/9a/8f/bc9a8f53ab34d2aa343002cf7952657c.jpg" />
          </ListItemAvatar>
          <UserNameAndLastMessageTextWrapper
            primary={
              <InlineWrapper>
                <Typography>Ban</Typography>
                <TypographyDate>09/09/2020</TypographyDate>
              </InlineWrapper>
            }
            secondary={
              <Typography component="span" variant="body2" color="textPrimary">
                Maybe we should go to king island
              </Typography>
            }
          />
        </ListItemUserChat>

        <ListItemUserChat button component="a" alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src="https://i.pinimg.com/originals/47/d4/41/47d441829098c2df1cefbcf63a05324b.jpg" />
          </ListItemAvatar>
          <UserNameAndLastMessageTextWrapper
            primary={
              <InlineWrapper>
                <Typography>Meliodas</Typography>
                <TypographyDate>08/09/2020</TypographyDate>
              </InlineWrapper>
            }
            secondary={
              <Typography component="span" variant="body2" color="textPrimary">
                Wish I could come, but I'm out of town this…
              </Typography>
            }
          />
        </ListItemUserChat>
      </List>
    </ChatPanelWrapper>
  );
};

export default ChatPanel;

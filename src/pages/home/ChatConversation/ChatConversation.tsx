import React, { useEffect, useState } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import {
  ChatContainer,
  ConversationWrapper,
  GridChatConversation,
  GridIconOptions,
} from './ChatConversationStyles';
import DestinataryMessage from './DestinataryMessage/DestinataryMessage';
import UserMessage from './UserMessage/UserMessage';
import SendMessageInput from './SendMessageInput/SendMessageInput';
import { useEmailDestinatary } from '../../../contexts/EmailDestinataryContext';
import socketIOClient from 'socket.io-client';
import { useMutation, useQuery } from 'react-query';
import { getUserMessages } from '../../../services/messages/messages.service';
import IMessage from '../../../interfaces/message.interface';
import { useMessages } from '../../../contexts/MessagesContext';
import baseUrlApi from '../../../baseUrlApi';
import { createRoom, getRoomId } from '../../../services/rooms/rooms.service';
import { AxiosError } from 'axios';
import { IRequestResponse } from '../../../interfaces/request-response.interface';
import { useSocket } from '../../../contexts/SocketContext';

const ChatConversation = () => {
  const { messages, setMessages } = useMessages();
  const { emailDestinatary } = useEmailDestinatary();
  const [loggedUserEmail] = useState<string | null>(
    localStorage.getItem('email')
  );
  const { socket, setSocket, setRoomId } = useSocket();

  useEffect(() => {
    setSocket(socketIOClient(baseUrlApi));
  }, []);

  useQuery(['getMessagesFromUser', emailDestinatary], getUserMessages, {
    enabled: emailDestinatary !== null,
    onSuccess: (dataMessages: IMessage[]) => {
      setMessages(dataMessages);
    },
  });

  useQuery(['getRoomId', emailDestinatary], getRoomId, {
    enabled: emailDestinatary !== null,
    refetchOnWindowFocus: false,
    onSuccess: (roomId: number | null) => {
      if (!roomId) {
        mutateCreateRoom(emailDestinatary);
      } else {
        joinRoom(roomId);
      }
    },
  });

  const [mutateCreateRoom] = useMutation<
    number,
    AxiosError<IRequestResponse>,
    string | null
  >(createRoom, {
    onSuccess: (roomId: number) => {
      joinRoom(roomId);
    },
  });

  const joinRoom = (idRoom: number) => {
    setRoomId(idRoom);
    socket.on('room_message', (data) => {
      console.log(data);
    });
    socket.emit('join_room', idRoom);
  };

  return (
    <GridChatConversation item md={8}>
      <ConversationWrapper>
        <Grid direction="row" container>
          <GridIconOptions container justify="flex-end" item md={12}>
            {emailDestinatary}
            <IconButton color="secondary" aria-label="delete">
              <SettingsOutlinedIcon />
            </IconButton>
          </GridIconOptions>
          <ChatContainer>
            <>
              {messages &&
                messages.map((message) =>
                  message.email === loggedUserEmail ? (
                    <UserMessage message={message} key={message.id} />
                  ) : (
                    <DestinataryMessage message={message} key={message.id} />
                  )
                )}
            </>
          </ChatContainer>
          <SendMessageInput />
        </Grid>
      </ConversationWrapper>
    </GridChatConversation>
  );
};

export default ChatConversation;

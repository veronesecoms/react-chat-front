/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import {
  ChatContainer,
  ConversationWrapper,
  GridChatConversation,
  GridIconOptions,
  EmailDestinataryText,
  GridChatHeader,
} from './ChatConversationStyles';
import DestinataryMessage from './DestinataryMessage/DestinataryMessage';
import UserMessage from './UserMessage/UserMessage';
import SendMessageInput from './SendMessageInput/SendMessageInput';
import { useEmailDestinatary } from '../../../contexts/EmailDestinataryContext';
import socketIOClient from 'socket.io-client';
import { queryCache, useMutation, useQuery } from 'react-query';
import { getUserMessages } from '../../../services/messages/messages.service';
import IMessage from '../../../interfaces/message.interface';
import { useMessages } from '../../../contexts/MessagesContext';
import baseUrlApi from '../../../baseUrlApi';
import { createRoom, getRoomId } from '../../../services/rooms/rooms.service';
import { AxiosError } from 'axios';
import { IRequestResponse } from '../../../interfaces/request-response.interface';
import { useSocket } from '../../../contexts/SocketContext';

const ChatConversation = () => {
  const divContainerRef = useRef<HTMLDivElement>(null);
  const { messages, setMessages } = useMessages();
  const [newMessage, setNewMessage] = useState('');
  const { emailDestinatary, nameDestinatary } = useEmailDestinatary();
  const [loggedUserEmail] = useState<string | null>(
    localStorage.getItem('email')
  );
  const { socket, setSocket, setRoomId } = useSocket();

  useEffect(() => {
    setSocket(socketIOClient(baseUrlApi));
  }, []);

  useEffect(() => {
    scrollChatToBottom();
  }, [messages]);

  const scrollChatToBottom = () => {
    const chatContainerDiv = document.getElementById('container-chat')!;
    if (chatContainerDiv) {
      chatContainerDiv.scrollTop = chatContainerDiv.scrollHeight;
    }
  };

  useQuery(['getMessagesFromUser', emailDestinatary], getUserMessages, {
    enabled: emailDestinatary !== null,
    refetchOnWindowFocus: false,
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
        listenToRoomMessages();
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
      listenToRoomMessages();
    },
  });

  const joinRoom = (idRoom: number) => {
    setRoomId(idRoom);
    socket.emit('join_room', idRoom);
  };

  const listenToRoomMessages = () => {
    socket.on('room_message', (data) => {
      addMessageToChat(data);
      refreshChatPanel();
    });
  };

  useEffect(() => {
    if (newMessage !== '') {
      setMessages([
        ...messages,
        {
          id: Date.now(),
          email: emailDestinatary,
          first_name: nameDestinatary,
          body: newMessage,
          createdAt: Date.now(),
        },
      ]);
    }
  }, [newMessage]);

  const addMessageToChat = (messageData) => {
    setNewMessage(messageData);
  };

  const refreshChatPanel = () => {
    queryCache.invalidateQueries('getSummaryMessages');
  };

  return (
    <>
      {messages && (
        <GridChatConversation item xs={12} sm={12} md={8}>
          <ConversationWrapper>
            {emailDestinatary && (
              <Grid item xs={12} direction="row" container alignItems="center">
                <GridChatHeader
                  justify="space-between"
                  item
                  xs={12}
                  sm={12}
                  container
                  md={12}
                >
                  <Grid item xs>
                    <EmailDestinataryText>
                      {emailDestinatary}
                    </EmailDestinataryText>
                  </Grid>
                  <GridIconOptions item>
                    <IconButton color="secondary" aria-label="delete">
                      <SettingsOutlinedIcon />
                    </IconButton>
                  </GridIconOptions>
                </GridChatHeader>
                <ChatContainer id="container-chat" ref={divContainerRef}>
                  <>
                    {messages &&
                      messages.map((message) =>
                        message.email === loggedUserEmail ? (
                          <UserMessage message={message} key={message.id} />
                        ) : (
                          <DestinataryMessage
                            message={message}
                            key={message.id}
                          />
                        )
                      )}
                  </>
                </ChatContainer>
                <SendMessageInput />
              </Grid>
            )}
          </ConversationWrapper>
        </GridChatConversation>
      )}
    </>
  );
};

export default ChatConversation;

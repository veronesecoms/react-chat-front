import React, { useState } from 'react';
import MessageInput from '../../../../components/shared-styled-components/message-input';
import {
  GridContainerMessage,
  IconButtonWrapper,
  GridInput,
} from './SendMessageInputStyles';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { useSocket } from '../../../../contexts/SocketContext';
import { queryCache, useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { IRequestResponse } from '../../../../interfaces/request-response.interface';
import IMessage from '../../../../interfaces/message.interface';
import { createMessage } from '../../../../services/messages/messages.service';
import { useEmailDestinatary } from '../../../../contexts/EmailDestinataryContext';
import { useMessages } from '../../../../contexts/MessagesContext';

export interface IMessageSave {
  token: string;
  emailDestinatary: string;
  message: string;
}

const SendMessageInput = () => {
  const { messages } = useMessages();
  const { socket, roomId } = useSocket();
  const { emailDestinatary } = useEmailDestinatary();
  const [message, setMessage] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (message) {
      emitMessageWithSocket();
      saveMessageOnServer();
    }
    setMessage('');
  };
  const [mutateSaveMessage] = useMutation<
    IMessage,
    AxiosError<IRequestResponse>,
    IMessageSave
  >(createMessage, {
    onSuccess: () => {
      queryCache.invalidateQueries('getSummaryMessages');
    },
  });

  const emitMessageWithSocket = () => {
    const messageWithRoomId = { roomId: roomId, message: message };
    socket.emit('message', messageWithRoomId);
    addMessageToChat(messageWithRoomId);
  };

  const saveMessageOnServer = () => {
    mutateSaveMessage({
      token: localStorage.getItem('token')!,
      emailDestinatary: emailDestinatary,
      message: message,
    });
  };

  const addMessageToChat = (messageData) => {
    const messageToBeAdded = {
      ...messageData,
      id: Date.now(),
      createdAt: Date.now(),
      email: localStorage.getItem('email'),
      body: messageData.message,
    };
    const messagesInContext = [...messages, messageToBeAdded];
    queryCache.setQueryData(
      ['getMessagesFromUser', emailDestinatary],
      messagesInContext
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <GridContainerMessage alignItems="center" container direction="row">
          <GridInput item md={12}>
            <MessageInput
              label="Digite uma mensagem"
              variant="filled"
              value={message}
              size="small"
              fullWidth={true}
              onChange={(e) => setMessage(e.target.value)}
            />
            <IconButtonWrapper
              type="submit"
              color="secondary"
              aria-label="delete"
            >
              <SendRoundedIcon />
            </IconButtonWrapper>
          </GridInput>
        </GridContainerMessage>
      </form>
    </>
  );
};

export default SendMessageInput;

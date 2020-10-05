import React, { useState } from 'react';
import MessageInput from '../../../../components/shared-styled-components/message-input';
import {
  GridContainerMessage,
  IconButtonWrapper,
  GridInput,
} from './SendMessageInputStyles';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { useSocket } from '../../../../contexts/SocketContext';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { IRequestResponse } from '../../../../interfaces/request-response.interface';
import IMessage from '../../../../interfaces/message.interface';
import { createMessage } from '../../../../services/messages/messages.service';
import { useEmailDestinatary } from '../../../../contexts/EmailDestinataryContext';

export interface IMessageSave {
  token: string;
  emailDestinatary: string;
  message: string;
}

const SendMessageInput = () => {
  const { socket, roomId } = useSocket();
  const { emailDestinatary } = useEmailDestinatary();
  const [message, setMessage] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    emitMessageWithSocket();
    saveMessageOnServer();
  };
  const [mutateSaveMessage] = useMutation<
    IMessage,
    AxiosError<IRequestResponse>,
    IMessageSave
  >(createMessage, {
    onSuccess: (message: IMessage) => {
      console.log(message);
    },
  });

  const emitMessageWithSocket = () => {
    socket.emit('message', { roomId: roomId, message: message });
  };

  const saveMessageOnServer = () => {
    mutateSaveMessage({
      token: localStorage.getItem('token')!,
      emailDestinatary: emailDestinatary,
      message: message,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <GridContainerMessage alignItems="center" container direction="row">
          <GridInput item md={12}>
            <MessageInput
              label="Digite uma mensagem"
              variant="filled"
              size="small"
              fullWidth={true}
              onChange={(e) => setMessage(e.target.value)}
            />
            <IconButtonWrapper color="secondary" aria-label="delete">
              <SendRoundedIcon />
            </IconButtonWrapper>
          </GridInput>
        </GridContainerMessage>
      </form>
    </>
  );
};

export default SendMessageInput;

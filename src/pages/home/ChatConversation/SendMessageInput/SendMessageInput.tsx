import React, { useState } from 'react';
import MessageInput from '../../../../components/shared-styled-components/message-input';
import {
  GridContainerMessage,
  IconButtonWrapper,
  GridInput,
} from './SendMessageInputStyles';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { useSocket } from '../../../../contexts/SocketContext';

const SendMessageInput = () => {
  const { socket, roomId } = useSocket();
  const [message, setMessage] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit('message', { roomId: roomId, message: message });
    console.log('emitiu menssagem pro servidor');
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

import React from 'react';
import MessageInput from '../../../../components/styled/message-input';
import { GridContainerMessage, IconButtonWrapper, GridInput } from './SendMessageInputStyles';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const SendMessageInput = () => {
  return (
    <>
      <GridContainerMessage alignItems="center" container direction="row">
        <GridInput item md={12}>
          <MessageInput label="Digite uma mensagem" variant="filled" size="small" fullWidth="true" />
          <IconButtonWrapper color="secondary" aria-label="delete">
            <SendRoundedIcon />
          </IconButtonWrapper>
        </GridInput>
      </GridContainerMessage>
    </>
  )
}

export default SendMessageInput;

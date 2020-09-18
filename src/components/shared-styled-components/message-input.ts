import {TextField} from '@material-ui/core';
import styled from 'styled-components';

const MessageInput = styled(TextField)`
  && {
    .MuiFilledInput-root {
      background-color: #fafafa;
      color: black;
      opacity: 95%;
    }
    .MuiInputLabel-filled {
      color: gray;
      opacity: 80%;
    }
    .MuiFilledInput-underline:before {
      border-bottom: none;
    }
    .MuiFilledInput-underline:after {
      border-bottom: none;
    }
  }
`;

export default MessageInput;

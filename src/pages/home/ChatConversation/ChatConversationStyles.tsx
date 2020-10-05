import styled from 'styled-components';
import { Container, Grid, Typography } from '@material-ui/core';

const ConversationWrapper = styled.div`
  height: 80vh;
  background-color: #5c4f82;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  position: relative;
`;

const GridChatConversation = styled(Grid)``;

const EmailDestinataryText = styled(Typography)`
  color: #fafafa;
  opacity: 90%;
  padding: 15px;
`;

const GridChatHeader = styled(Grid)`
  height: 55px;
  border-bottom: 6px solid #542673;
  background-color: #5c4f82;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

const GridIconOptions = styled(Grid)`
  position: sticky;
`;

const TestTypography = styled.h1`
  line-break: anywhere;
`;

const ChatContainer = styled(Container)`
  height: 60vh;
  padding: 15px;
  overflow: auto;
  max-height: 60vh;
  overflow-x: hidden;
`;

export {
  ConversationWrapper,
  GridChatConversation,
  GridIconOptions,
  TestTypography,
  ChatContainer,
  EmailDestinataryText,
  GridChatHeader,
};

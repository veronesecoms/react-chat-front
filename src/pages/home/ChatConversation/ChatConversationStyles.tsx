import styled from "styled-components";
import { Container, Grid } from "@material-ui/core";

const ConversationWrapper = styled.div`
  height: 80vh;
  background-color: #5c4f82;
  border-radius: 15px;
  position: relative;
`;

const GridChatConversation = styled(Grid)``;

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
};

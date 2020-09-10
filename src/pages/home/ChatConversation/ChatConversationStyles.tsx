import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const ConversationWrapper = styled.div`
  width: 100%;
  height: 75vh;
  background-color: #5c4f82;
  border-radius: 15px;
`

const GridChatConversation = styled(Grid)`
  float: right;
  width: 100%;
`

const GridIconOptions = styled(Grid)`
  position: sticky;
`

const TestTypography = styled.h1`
  line-break: anywhere;
`

export { ConversationWrapper, GridChatConversation, GridIconOptions, TestTypography };

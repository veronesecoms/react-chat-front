import { Grid } from '@material-ui/core';
import styled from 'styled-components';

const MessageContainer = styled.div`
  background: linear-gradient(to right, #d3cce3, #e9e4f0);
  padding: 15px;
  color: #232020;
  border-radius: 5px;
  border-bottom-right-radius: 0;
  margin: 5px;
}
`;

const HoursMessageSended = styled.p`
  color: #5a5a5a;
  opacity: 85%;
  text-align: right;
  margin: 0;
  padding: 0;
`;

const GridContainer = styled(Grid)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export { MessageContainer, HoursMessageSended, GridContainer };

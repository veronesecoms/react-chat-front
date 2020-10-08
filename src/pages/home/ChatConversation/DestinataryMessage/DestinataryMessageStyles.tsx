import styled from 'styled-components';

const MessageContainer = styled.div`
  background-color: #542673;
  padding: 15px;
  border-radius: 5px;
  border-bottom-left-radius: 0px;
  color: #fafafa;
  opacity: 85%;
`;

const MessageTime = styled.p`
  color: #fafafa;
  padding: 0;
  margin: 0;
  font-size: 13px;
  padding-top: 3px;
  opacity: 85%;
`;

const DestinataryName = styled.p`
  color: #fafafa;
  margin: 0;
  padding: 0;
  opacity: 60%;
`;

export { MessageContainer, MessageTime, DestinataryName };

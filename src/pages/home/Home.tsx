import React from 'react';
import Header from './header/Header';
import { HomeWrapper, HomeContainer, GridChatPanel } from './HomeStyles';
import { Grid } from '@material-ui/core';
import ChatPanel from './ChatPanel/ChatPanel';
import ChatConversation from './ChatConversation/ChatConversation';
import EmailDestinataryProvider from '../../contexts/EmailDestinataryContext';
import SearchUser from './SearchUser/SearchUser';
import MessagesProvider from '../../contexts/MessagesContext';
import SocketProvider from '../../contexts/SocketContext';

const Home = () => {
  return (
    <>
      <Header></Header>
      <HomeWrapper>
        <HomeContainer maxWidth="lg">
          <Grid wrap="wrap" spacing={1} container>
            <EmailDestinataryProvider>
              <MessagesProvider>
                <Grid
                  wrap="nowrap"
                  spacing={3}
                  item
                  md={4}
                  container
                  direction="column"
                >
                  <SearchUser />
                  <GridChatPanel item md={12}>
                    <ChatPanel />
                  </GridChatPanel>
                </Grid>
                <SocketProvider>
                  <ChatConversation />
                </SocketProvider>
              </MessagesProvider>
            </EmailDestinataryProvider>
          </Grid>
        </HomeContainer>
      </HomeWrapper>
    </>
  );
};

export default Home;

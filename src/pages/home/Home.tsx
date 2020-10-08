import React from 'react';
import { HomeWrapper, HomeContainer, GridChatPanel } from './HomeStyles';
import { Grid } from '@material-ui/core';
import ChatPanel from './ChatPanel/ChatPanel';
import ChatConversation from './ChatConversation/ChatConversation';
import EmailDestinataryProvider from '../../contexts/EmailDestinataryContext';
import SearchUser from './SearchUser/SearchUser';
import MessagesProvider from '../../contexts/MessagesContext';
import SocketProvider from '../../contexts/SocketContext';
import Header from './Header/Header';

const Home = () => {
  return (
    <>
      <Header></Header>
      <HomeWrapper>
        <HomeContainer maxWidth="lg">
          <Grid wrap="wrap" spacing={1} container>
            <EmailDestinataryProvider>
              <MessagesProvider>
                <Grid item xs={12} sm={12} md={4}>
                  <SearchUser />
                  <GridChatPanel xs={12} item md={12}>
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

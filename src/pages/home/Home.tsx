import React from "react";
import Header from "./header/Header";
import {
  HomeWrapper,
  HomeContainer,
  GridChatPanel,
} from "./HomeStyles";
import { Grid } from "@material-ui/core";
import ChatPanel from "./ChatPanel/ChatPanel";
import ChatConversation from "./ChatConversation/ChatConversation";
import MessageProvider from "../../contexts/MessagesContext";
import SearchUser from "./SearchUser/SearchUser";

export interface ISearchUser {
  email: string
}

const Home = () => {

  return (
    <>
      <Header></Header>
      <HomeWrapper>
        <HomeContainer maxWidth="lg">
          <Grid wrap="wrap" spacing={1} container>
            <MessageProvider>
              <Grid wrap="nowrap" item md={4} container direction="column">
                <SearchUser/>
                <GridChatPanel item md={12}>
                  <ChatPanel />
                </GridChatPanel>
              </Grid>
              <ChatConversation />
            </MessageProvider>
          </Grid>
        </HomeContainer>
      </HomeWrapper>
    </>
  );
};

export default Home;

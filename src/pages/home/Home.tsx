import React from 'react';
import Header from './header/Header';
import {
  HomeWrapper,
  SearchInputIcon,
  HomeContainer,
  GridSearchInput,
  GridChatPanel,
} from './HomeStyles';
import SearchInput from '../../components/styled/search-input';
import {
  InputAdornment,
  Grid,
  IconButton,
  Typography,
  Container,
} from '@material-ui/core';
import ChatPanel from './ChatPanel/ChatPanel';
import ChatConversation from './ChatConversation/ChatConversation';

const Home = () => {
  return (
    <>
      <Header></Header>
      <HomeWrapper>
        <HomeContainer maxWidth="xl">
          <GridSearchInput item md={4}>
            <SearchInput
              fullWidth={true}
              helperText="ex: renatim@hotmail.com.br"
              label="Procurar usuário"
              variant="filled"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchInputIcon />
                  </InputAdornment>
                ),
              }}
            />
          </GridSearchInput>
          <ChatConversation />
          <GridChatPanel item md={4}>
            <ChatPanel />
          </GridChatPanel>
        </HomeContainer>
      </HomeWrapper>
    </>
  );
};

export default Home;

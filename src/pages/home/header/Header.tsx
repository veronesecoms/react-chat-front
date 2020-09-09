import React from 'react'
import { HeaderBase, ChatIcon, BannerText } from './HeaderStyles';
import { Grid, Container } from '@material-ui/core';

const Header = () => {
  return (
    <HeaderBase>
      <Container maxWidth="xl">
        <Grid container alignItems="center" justify="space-between" direction="row">
          <Grid container alignItems="center" item md={3}>
            <ChatIcon />
            <BannerText>
              React Chat
            </BannerText>
          </Grid>
          <Grid item>
            foto aqui
          </Grid>
        </Grid>
      </Container>
    </HeaderBase>
  )
}

export default Header;

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import { Link } from "react-router-dom";
import { HalfCardRight, TitleRegister, LoginButton, GraySeparator, TextLink, LoginLockIcon, TextAligner } from './BannerRightLoginStyledComponents'

const BannerRightLogin = () => {
  return (
    <HalfCardRight>

      <TitleRegister>
        Já possuo uma conta
      </TitleRegister>

      <LoginLockIcon />

      <Grid spacing={3} container direction="row">

        <Grid item md={12}>
          <TextField fullWidth label="Email" variant="filled" />
        </Grid>

        <Grid item md={12}>
          <TextField fullWidth label="Senha" variant="filled" />
        </Grid>

        <Grid item md={12}>
          <LoginButton fullWidth variant="contained" color="primary">
            Entrar
          </LoginButton>
        </Grid>

        <Grid item md={12}>
          <TextAligner>
            <Link to="/register">
              <TextLink>Criar uma conta</TextLink>
            </Link>
            <GraySeparator> |</GraySeparator>
            <TextLink>Perdi minha senha</TextLink>
          </TextAligner>
        </Grid>
      </Grid>

    </HalfCardRight>
  )
}

export default BannerRightLogin

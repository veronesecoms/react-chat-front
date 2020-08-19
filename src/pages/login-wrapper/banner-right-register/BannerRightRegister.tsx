import React from 'react'
import { HalfCardRight, TitleRegister } from '../banner-right-login/BannerRightLoginStyledComponents';
import { RegisterFaceIcon, RegisterButton, BackButton } from './BannerRightRegisterStyledComponents';
import { Grid, TextField } from '@material-ui/core';
import { Link } from "react-router-dom";

const BannerRightRegister = () => {
  return (
    <HalfCardRight>
      <TitleRegister>
        Criação de conta
      </TitleRegister>

      <RegisterFaceIcon />

      <Grid spacing={3} container direction="row">

        <Grid item md={12}>
          <TextField fullWidth label="Email" variant="filled" />
        </Grid>

        <Grid item md={12}>
          <TextField fullWidth label="Senha" variant="filled" />
        </Grid>

        <Grid item md={12}>
          <TextField fullWidth label="Confirmação de senha" variant="filled" />
        </Grid>

        <Grid item md={8}>
          <RegisterButton fullWidth variant="contained" color="primary">
            Criar conta
          </RegisterButton>
        </Grid>

        <Grid item md={4}>
          <BackButton component={Link} to="/" fullWidth>
            Voltar login
          </BackButton>
        </Grid>

      </Grid>

    </HalfCardRight>
  )
}

export default BannerRightRegister;

/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from "@material-ui/core";
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AxiosResponse, AxiosError } from 'axios';
import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ITokenConfirmationEmailParam } from "../../../interfaces/token-confirmation-email-param.interface";
import { confirmEmailUser } from "../../../services/users/user.service";
import {
  VerifiedEmailIcon,
  HalfCardRightConfirmEmail,
  GrayParagraphy,
  EmailConfirmationContainer,
  ErrorVerifiedEmailIcon
} from "./BannerRightConfirmEmailStyledComponents";

const BannerRightConfirmEmail = () => {
  const history = useHistory();
  const [{ token }] = useState<ITokenConfirmationEmailParam>(useParams());
  const [mutateConfirmEmail, {isLoading, isError, error}] = useMutation<AxiosResponse, AxiosError, string>(confirmEmailUser, {
    onSuccess: () => {
      redirectToLogin();
    },
  });

  useEffect(() => {
    confirmEmail();
  }, []);

  const redirectToLogin = () => {
    setTimeout(function(){
      history.push('/');
    }, 3000);
  };

  const confirmEmail = async () => {
    await mutateConfirmEmail(token);
  };

  return (
    <HalfCardRightConfirmEmail>
      <EmailConfirmationContainer>
        {isLoading === true ? (
          <CircularProgress />
        ) : (
          <></>
        )}
        {!isLoading && !isError && (
          <div>
            <Grid item xs={12}>
              <VerifiedEmailIcon />
            </Grid>
            <Grid item xs={12}>
              <GrayParagraphy>
                Obrigado por confirmar sua conta no React Chat.
              </GrayParagraphy>
              <GrayParagraphy>
                Você será redirecionado para a tela de login em breve.
              </GrayParagraphy>
            </Grid>
          </div>
        )}
        {!isLoading && isError && (
          <div>
            <Grid item xs={12}>
              <ErrorVerifiedEmailIcon />
            </Grid>
            <Grid item xs={12}>
              <GrayParagraphy>
                Ops, temos um problema
              </GrayParagraphy>
              <GrayParagraphy>
                {error?.response?.data.message}
              </GrayParagraphy>
            </Grid>
            <Grid item xs={12}>
            <Link to="/">
              <Button type="button" fullWidth={true} variant="outlined" color="primary">
                Voltar para login
              </Button>
            </Link>
            </Grid>
          </div>
        )}
      </EmailConfirmationContainer>
    </HalfCardRightConfirmEmail>
  );
};

export default BannerRightConfirmEmail;

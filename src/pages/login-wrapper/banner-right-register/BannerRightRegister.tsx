import { Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  HalfCardRight,
  TitleRegister,
} from '../banner-right-login/BannerRightLoginStyledComponents';
import {
  RegisterFaceIcon,
  RegisterButton,
  BackButton,
} from './BannerRightRegisterStyledComponents';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { IRegisterUser } from '../../../interfaces/register-user.interface';
import { registerUser } from '../../../services/users/user.service';
import { useMutation } from 'react-query';
import { AxiosResponse, AxiosError } from 'axios';
import { useHistory } from 'react-router';
import ButtonLoadingSvgAnimated from '../../../components/shared-styled-components/button-loading-svg-animated';
import { useSnackbar, ProviderContext } from 'notistack';
import { IRequestResponse } from '../../../interfaces/request-response.interface';
import SoftInputField from '../../../components/shared-styled-components/soft-textfield';

const BannerRightRegister = () => {
  const history = useHistory();
  const snackBar: ProviderContext = useSnackbar();
  const [mutateRegisterUser, { isLoading }] = useMutation<
    AxiosResponse<IRequestResponse>,
    AxiosError<IRequestResponse>,
    IRegisterUser
  >(registerUser, {
    onSuccess: (response: AxiosResponse<IRequestResponse>) => {
      snackBar.enqueueSnackbar(response.data.message, { variant: 'success' });
      redirectToLogin();
    },
    onError: (error: AxiosError<IRequestResponse>) => {
      snackBar.enqueueSnackbar(error.response?.data.message, {
        variant: 'error',
      });
    },
  });
  const redirectToLogin = () => {
    history.push('/');
  };
  const schema = Yup.object().shape({
    first_name: Yup.string().required('Necessário informar seu nome'),
    second_name: Yup.string().required('Necessário informar seu sobrenome'),
    email: Yup.string()
      .email('Email não possui formato válido')
      .required('Necessário informar o email'),
    password: Yup.string().required('Necessário informar a senha!'),
    password_confirmation: Yup.string()
      .required('Necessário informar a confirmação da senha')
      .oneOf(
        [Yup.ref('password')],
        'Confirmação de senha deve ser igual a senha.'
      ),
  });

  const formik = useFormik({
    initialValues: {
      first_name: '',
      second_name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
    validationSchema: schema,
    onSubmit: (user: IRegisterUser) => {
      mutateRegisterUser(user);
    },
  });

  return (
    <HalfCardRight>
      <TitleRegister>Criação de conta</TitleRegister>

      <RegisterFaceIcon />

      <form id="register-form" onSubmit={formik.handleSubmit} noValidate>
        <Grid spacing={3} container direction="row">
          <Grid item xs={12} md={12}>
            <SoftInputField
              value={formik.values.first_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={
                formik.touched.first_name ? formik.errors.first_name : ''
              }
              error={
                formik.touched.first_name && Boolean(formik.errors.first_name)
              }
              id="register-user-first-name"
              name="first_name"
              fullWidth
              label="Nome"
              variant="filled"
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <SoftInputField
              value={formik.values.second_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={
                formik.touched.second_name ? formik.errors.second_name : ''
              }
              error={
                formik.touched.second_name && Boolean(formik.errors.second_name)
              }
              id="register-user-second-name"
              name="second_name"
              fullWidth
              label="Sobrenome"
              variant="filled"
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <SoftInputField
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.email ? formik.errors.email : ''}
              error={formik.touched.email && Boolean(formik.errors.email)}
              id="register-user-email"
              name="email"
              fullWidth
              label="Email"
              variant="filled"
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <SoftInputField
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.password ? formik.errors.password : ''}
              error={formik.touched.password && Boolean(formik.errors.password)}
              id="register-user-password"
              name="password"
              type="password"
              fullWidth
              label="Senha"
              variant="filled"
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <SoftInputField
              value={formik.values.password_confirmation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={
                formik.touched.password_confirmation
                  ? formik.errors.password_confirmation
                  : ''
              }
              error={
                formik.touched.password_confirmation &&
                Boolean(formik.errors.password_confirmation)
              }
              id="register-user-confirmation-password"
              name="password_confirmation"
              type="password"
              fullWidth
              label="Confirmação de senha"
              variant="filled"
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <RegisterButton
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
              id="register-button"
              color="secondary"
            >
              {isLoading ? (
                <>
                  <ButtonLoadingSvgAnimated size={20} />
                  Carregando...
                </>
              ) : (
                'Criar conta'
              )}
            </RegisterButton>
          </Grid>

          <Grid item xs={12} md={4}>
            <BackButton variant="outlined" component={Link} to="/" fullWidth>
              Voltar
            </BackButton>
          </Grid>
        </Grid>
      </form>
    </HalfCardRight>
  );
};

export default BannerRightRegister;

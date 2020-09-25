import {Grid} from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';
import {
  HalfCardRight,
  TitleRegister,
} from '../banner-right-login/BannerRightLoginStyledComponents';
import {
  RegisterButton,
  BackButton,
} from '../../login-wrapper/banner-right-register/BannerRightRegisterStyledComponents';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {useMutation} from 'react-query';
import {AxiosResponse, AxiosError} from 'axios';
import {useHistory} from 'react-router';
import ButtonLoadingSvgAnimated from '../../../components/shared-styled-components/button-loading-svg-animated';
import { useSnackbar, ProviderContext } from 'notistack';
import { IRequestResponse } from '../../../interfaces/request-response.interface';
import { sendEmailRecoveryPassword } from '../../../services/users/user.service';
import { IRecoveryPasswordEmail } from '../../../interfaces/recovery-password-user.interface';
import EmailIcon from './BannerRightRegisterRecoveryPasswordStyles';
import SoftInputField from '../../../components/shared-styled-components/soft-textfield';

const BannerRightRecoveryPassword = () => {
  const history = useHistory();
  const snackBar: ProviderContext = useSnackbar();
  const [mutateSendEmailRecoveryPassword, {isLoading}] = useMutation<
    AxiosResponse<IRequestResponse>,
    AxiosError<IRequestResponse>,
    string
  >(sendEmailRecoveryPassword, {
    onSuccess: (response: AxiosResponse<IRequestResponse>) => {
      snackBar.enqueueSnackbar(response.data.message, {variant: 'success'})
      redirectToLogin();
    },
    onError: (error: AxiosError<IRequestResponse>) => {
      snackBar.enqueueSnackbar(error.response?.data.message, {variant: 'error'});
    }
  });
  const redirectToLogin = () => {
    setTimeout(function () {
      history.push('/');
    }, 2000);
  };
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Email não possui formato válido')
      .required('Necessário informar o email'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: schema,
    onSubmit: (formData: IRecoveryPasswordEmail) => {
      mutateSendEmailRecoveryPassword(formData.email);
    },
  });

  return (
    <HalfCardRight>
      <TitleRegister>Recuperação de senha</TitleRegister>

      <EmailIcon />

      <form onSubmit={formik.handleSubmit} noValidate>
        <Grid spacing={3} container direction="row">
          <Grid item md={12}>
            <SoftInputField
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={
                formik.touched.email ? formik.errors.email : ''
              }
              error={
                formik.touched.email && Boolean(formik.errors.email)
              }
              id="recovery-user-email"
              name="email"
              fullWidth
              label="Email"
              variant="filled"
            />
          </Grid>

          <Grid item md={8}>
            <RegisterButton
              type="submit"
              fullWidth
              id="send-email-button"
              variant="contained"
              disabled={isLoading}
              color="primary">
              {isLoading ? (
                <>
                  <ButtonLoadingSvgAnimated size={20} />
                  Carregando...
                </>
              ) : (
                'Receber instruções'
              )}
            </RegisterButton>
          </Grid>

          <Grid item md={4}>
            <BackButton variant="outlined" component={Link} to="/login" fullWidth>
              Voltar
            </BackButton>
          </Grid>
        </Grid>
      </form>
    </HalfCardRight>
  );
};

export default BannerRightRecoveryPassword;

import Grid from "@material-ui/core/Grid";
import React from "react";
import { Link } from "react-router-dom";
import {
  HalfCardRight,
  TitleRegister,
  LoginButton,
  GraySeparator,
  TextLink,
  LoginLockIcon,
  TextAligner,
} from "./BannerRightLoginStyledComponents";
import history from "../../../utils/history";
import { useMutation } from "react-query";
import { AxiosResponse, AxiosError } from "axios";
import { IRequestResponse } from "../../../interfaces/request-response.interface";
import { login } from "../../../services/users/user.service";
import * as Yup from "yup";
import { useFormik } from "formik";
import ButtonLoadingSvgAnimated from "../../../components/styled/button-loading-svg-animated";
import { ProviderContext, useSnackbar } from "notistack";
import SoftInputField from "../../../components/styled/soft-textfield";

export interface ILoginUser {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  data: ILoginResponseData;
}

export interface ILoginResponseData {
  email: string;
  first_name: string;
  picture: string;
}

const BannerRightLogin = () => {
  const snackBar: ProviderContext = useSnackbar();
  const [mutateLoginUser, { isLoading }] = useMutation<
    AxiosResponse<ILoginResponse>,
    AxiosError<IRequestResponse>,
    ILoginUser
  >(login, {
    onSuccess: (response: AxiosResponse<ILoginResponse>) => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", response.data.data.email);
      localStorage.setItem("first_name", response.data.data.first_name);
      localStorage.setItem("picture", response.data.data.picture);
      redirectToHome();
    },
    onError: (error: AxiosError<IRequestResponse>) => {
      snackBar.enqueueSnackbar(error.response?.data.message, {
        variant: "error",
      });
    },
  });

  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Necessário informar o email")
      .email("Email não possui formato válido"),
    password: Yup.string().required("Necessário informar a senha!"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (user: ILoginUser) => {
      mutateLoginUser(user);
    },
  });

  const redirectToHome = () => {
    history.push("/home");
  };

  return (
    <HalfCardRight>
      <Grid item md={12}>
        <TitleRegister>Já possuo uma conta</TitleRegister>
      </Grid>

      <LoginLockIcon />

      <form onSubmit={formik.handleSubmit} noValidate>
        <Grid spacing={3} container direction="row">
          <Grid item md={12}>
            <SoftInputField
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.email ? formik.errors.email : ""}
              error={formik.touched.email && Boolean(formik.errors.email)}
              fullWidth
              id="login-user-email"
              name="email"
              label="Email"
              variant="filled"
            />
          </Grid>

          <Grid item md={12}>
            <SoftInputField
              value={formik.values.password}
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.password ? formik.errors.password : ""}
              error={formik.touched.password && Boolean(formik.errors.password)}
              name="password"
              id="login-user-password"
              fullWidth
              label="Senha"
              variant="filled"
            />
          </Grid>

          <Grid item md={12}>
            <LoginButton
              type="submit"
              disabled={isLoading}
              fullWidth
              variant="contained"
              color="primary"
            >
              {isLoading ? (
                <>
                  <ButtonLoadingSvgAnimated size={20} />
                  Carregando...
                </>
              ) : (
                "Entrar"
              )}
            </LoginButton>
          </Grid>

          <Grid item md={12}>
            <TextAligner>
              <Link to="/register">
                <TextLink>Criar uma conta</TextLink>
              </Link>
              <GraySeparator> |</GraySeparator>
              <Link to="/recoveryPassword">
                <TextLink>Esqueci a senha</TextLink>
              </Link>
            </TextAligner>
          </Grid>
        </Grid>
      </form>
    </HalfCardRight>
  );
};

export default BannerRightLogin;

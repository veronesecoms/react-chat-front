import { IConfirmRecoveryPassword } from './../../interfaces/confirm-recovery-password-user.interface';
import { IRegisterUser } from './../../interfaces/register-user.interface';
import api from '../api';
import { AxiosResponse } from 'axios';
import { IRequestResponse } from '../../interfaces/request-response.interface';

const confirmEmailUser = async (token: string): Promise<AxiosResponse<IRequestResponse>> => {
  return await api.patch('/users/confirmEmail/' + token)
}

const registerUser = async (user: IRegisterUser): Promise<AxiosResponse<IRequestResponse>> => {
  return await api.post('/users', user)
}

const sendEmailRecoveryPassword = async (email: string): Promise<AxiosResponse<IRequestResponse>> => {
  return await api.put('/users/emailRecoveryPassword/' + email);
}

const sendEmailConfirmRecoveryPassword = async (changePasswordData: IConfirmRecoveryPassword): Promise<AxiosResponse<IRequestResponse>> => {
  return await api.put('/users/confirmEmailRecovery/' + changePasswordData.token, changePasswordData);
}

export { confirmEmailUser, registerUser, sendEmailRecoveryPassword, sendEmailConfirmRecoveryPassword }

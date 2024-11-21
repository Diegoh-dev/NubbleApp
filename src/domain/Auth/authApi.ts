// import {api} from '@api';
import {AxiosRequestConfig} from 'axios';

// import {api} from '../../api/apiConfig';
import {api} from '../../api/apiInstance';
import {UserAPI} from '../user';

import {
  AuthCredentialsAPI,
  FieldIsAvailableAPI,
  ForgotPassawordParam,
  SingUpDataAPI,
} from './authTypes';

const REFRESH_TOKEN_URL = 'auth/refresh-token';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentialsAPI> {
  const response = await api.post<AuthCredentialsAPI>('auth/login', {
    email,
    password,
  });
  return response.data;
}

async function signOut(): Promise<string> {
  const reponse = await api.get<string>('auth/profile/logout');
  return reponse.data;
}

async function signUp(data: SingUpDataAPI): Promise<UserAPI> {
  const response = await api.post('auth/register', data);
  return response.data;
}

async function isUsernameAvailable(params: {
  username: string;
}): Promise<FieldIsAvailableAPI> {
  const response = await api.get<FieldIsAvailableAPI>(
    'auth/validate-username',
    {
      params,
    },
  );

  return response.data;
}

async function isEmailAvailable(params: {
  email: string;
}): Promise<FieldIsAvailableAPI> {
  const response = await api.get('auth/validate-email', {
    params,
  });

  return response.data;
}

async function forgotPassword(
  params: ForgotPassawordParam,
): Promise<{message: string}> {
  // passando como PARAMETRO os dados de email
  // const response = await api.post<{message: string}>('forgot-password',null,{
  //   params,
  // });

  // PASSANDO COMO BODY
  const response = await api.post<{message: string}>(
    'auth/forgot-password',
    params,
  );
  return response.data;
}

async function refreshToken(token: string): Promise<AuthCredentialsAPI> {
  const response = await api.post<AuthCredentialsAPI>(REFRESH_TOKEN_URL, {
    refreshToken: token,
  });
  return response.data;
}

//VERIFICAR SE A URL QUE ESTÁ DANDO ERRO 401 É A ROTA DE refresh-token
function isRefreshTokenRequest(request: AxiosRequestConfig): boolean {
  const url = request.url;
  return url === REFRESH_TOKEN_URL;
}

export const AuthApi = {
  signIn,
  signOut,
  signUp,
  isUsernameAvailable,
  isEmailAvailable,
  forgotPassword,
  refreshToken,
  isRefreshTokenRequest,
};

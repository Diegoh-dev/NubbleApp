import {api} from '@api';

import {authAdapter} from './authAdapter';
import {AuthApi} from './authApi';
import {AuthCredentials, SingUpData} from './authTypes';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  try {
    const authCredentialsAPI = await AuthApi.signIn(email, password);

    return authAdapter.toAuthCredentials(authCredentialsAPI);
  } catch (error) {
    throw new Error('email ou senha inválido');
  }
}

async function signOut(): Promise<string> {
  const message = await AuthApi.signOut();

  return message;
}

async function signUp(singUpData: SingUpData): Promise<void> {
  await AuthApi.signUp(singUpData);
}

function updateToken(token: string) {
  //https://axios-http.com/docs/config_defaults
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken() {
  api.defaults.headers.common.Authorization = null;
}

export const authService = {
  signIn,
  signOut,
  signUp,
  updateToken,
  removeToken,
};

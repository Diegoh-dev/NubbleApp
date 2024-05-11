import {api} from '@api';

import {AuthCredentialsAPI} from './authTypes';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentialsAPI> {
  const response = await api.post<AuthCredentialsAPI>('login', {
    email,
    password,
  });
  return response.data;
}

async function signOut(): Promise<string> {
  const reponse = await api.get<string>('profile/logout');
  return reponse.data;
}

export const AuthApi = {
  signIn,
  signOut,
};

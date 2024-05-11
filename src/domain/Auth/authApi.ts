import {api} from '@api';

import {AuthAPI} from './authTypes';

async function signIn(email: string, password: string): Promise<AuthAPI> {
  const response = await api.get('login', {
    data: {
      email,
      password,
    },
  });

  return response.data;
}

async function signOut(): Promise<string> {
  const reponse = await api.get('profile/logout');

  return reponse.data;
}

export const AuthApi = {
  signIn,
  signOut,
};

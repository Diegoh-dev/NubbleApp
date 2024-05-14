import {api} from '@api';

import { UserAPI } from '../user';

import {AuthCredentialsAPI, SingUpDataAPI} from './authTypes';

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

async function signUp(data:SingUpDataAPI):Promise<UserAPI> {
  const response = await api.post('register',data);
  return response.data;
}

export const AuthApi = {
  signIn,
  signOut,
  signUp,
};

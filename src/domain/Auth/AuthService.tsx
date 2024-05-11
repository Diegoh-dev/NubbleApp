import {authAdapter} from './authAdapter';
import {AuthApi} from './authApi';
import {AuthTypes} from './authTypes';

async function getAuth(email: string, password: string): Promise<AuthTypes> {
  const response = await AuthApi.signIn(email, password);

  return authAdapter.toAuthTypes(response);
}

async function signOut(): Promise<string> {
  const response = await AuthApi.signOut();

  return response;
}

export const authService = {
  getAuth,
  signOut,
};

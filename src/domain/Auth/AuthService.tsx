import {authAdapter} from './authAdapter';
import {AuthApi} from './authApi';
import {AuthCredentials} from './authTypes';

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

export const authService = {
  signIn,
  signOut,
};

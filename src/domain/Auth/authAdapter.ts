import { userAdapter } from '../user/userAdapter';

import { AuthCredentials, AuthCredentialsAPI } from './authTypes';


function toAuthCredentials(authCredentialsAPI: AuthCredentialsAPI): AuthCredentials {
  return {
    token:authCredentialsAPI.auth.token,
    tokenExpiresAt:authCredentialsAPI.auth.expire_at,
    refreshToken:authCredentialsAPI.auth.refreshToken,
    user:userAdapter.toUser(authCredentialsAPI.user),
  };
}

export const authAdapter = {
  toAuthCredentials,
};

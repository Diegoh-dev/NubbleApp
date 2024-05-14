import {User, UserAPI} from '../user';

export interface AuthCredentials {
  token: string; //'MQ.t175y7-GayXpH6sPpf5l4lTruBRz73f38QCg_qD2ZKF9m4CqndlCS-2j0-bN';
  user: User;
}

export interface AuthCredentialsAPI {
  auth: {
    type: string; //'bearer';
    token: string; //'MQ.t175y7-GayXpH6sPpf5l4lTruBRz73f38QCg_qD2ZKF9m4CqndlCS-2j0-bN';
  };
  user: UserAPI;
}

export interface SignInData {
  username?: string;
  email?: string;
  password: string;
}

export interface SingUpDataAPI {
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  password: string;
}

export interface SingUpData {
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  password: string;
}

import {AuthCredentials} from '@domain';

export interface AuthCredentialsService {
  authCredentials: AuthCredentials | null;
  userId:number | null;
  saveCrendentials: (ac: AuthCredentials) => Promise<void>;
  removeCrendentials: () => Promise<void>;
  isLoading: boolean;
}

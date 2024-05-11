import {AuthCredentials} from '@domain';

export interface AuthCredentialsService {
  authCredentials: AuthCredentials | null;
  saveCrendentials: (ac: AuthCredentials) => Promise<void>;
  removeCrendentials: () => Promise<void>;
  isLoading: boolean;
}

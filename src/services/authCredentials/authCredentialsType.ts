import {AuthCredentials} from '@domain';

export interface AuthCredentialsService {
  authCredentials: AuthCredentials | null;
  saveCrendentials: (ac: AuthCredentials) => Promise<void>;
  remove: () => Promise<void>;
  isLoading: boolean;
}

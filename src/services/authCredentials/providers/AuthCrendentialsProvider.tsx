import React, {PropsWithChildren, useState} from 'react';
import {createContext} from 'react';

import {AuthCredentials} from '@domain';
// import {useStoreWithEqualityFn} from 'zustand/traditional';

import {AuthCredentialsService} from '../authCredentialsType';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  saveCrendentials: async () => {},
  isLoading: true,
  removeCrendentials: async () => {},
});

export function AuthCredentialsProvider({children}: PropsWithChildren<{}>) {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function saveCrendentials(ac: AuthCredentials): Promise<void> {
    //TODO:Persist
    setAuthCredentials(ac);
  }

  async function removeCrendentials(): Promise<void> {
    setAuthCredentials(null);
  }

  return (
    <AuthCredentialsContext.Provider
      value={{
        authCredentials,
        isLoading,
        saveCrendentials,
        removeCrendentials,
      }}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}

import React, {PropsWithChildren, useEffect, useState} from 'react';
import {createContext} from 'react';

import {AuthCredentials, authService} from '@domain';
// import {useStoreWithEqualityFn} from 'zustand/traditional';

import {authCredentialsStorage} from '../authCredencialsStorage';
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

  useEffect(() => {
    startAuthCredentials();
  }, []);

  async function startAuthCredentials() {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000, ''));
      //Pegar os dados so usuário logado no storage do celular
      const getCredentials = await authCredentialsStorage.get();

      if (getCredentials) {
        // atualiza o token de autenticação;
        authService.updateToken(getCredentials.token);
        //seta os dados do usuário logado no state de authCredentials
        setAuthCredentials(getCredentials);
      }
    } catch (error) {
      //TODO: handle error
    } finally {
      setIsLoading(false);
    }
  }

  async function saveCrendentials(ac: AuthCredentials): Promise<void> {
    //TODO:Persist
    authService.updateToken(ac.token);
    authCredentialsStorage.set(ac);
    setAuthCredentials(ac);
  }

  async function removeCrendentials(): Promise<void> {
    authService.removeToken();
    authCredentialsStorage.remove();
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

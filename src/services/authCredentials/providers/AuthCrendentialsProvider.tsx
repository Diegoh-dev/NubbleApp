import React, {PropsWithChildren, useEffect, useState} from 'react';
import {createContext} from 'react';

// import {useStoreWithEqualityFn} from 'zustand/traditional';

// import {registerInterceptor} from '@api';
// import {AuthCredentials, authService} from '@domain';

import {registerInterceptor} from '../../../api/apiConfig';
import {apiUtils} from '../../../api/apiUtils';
// import {authService} from '../../../domain/Auth/AuthService';
import {AuthCredentials} from '../../../domain/Auth/authTypes';
import {authCredentialsStorage} from '../authCredencialsStorage';
import {AuthCredentialsService} from '../authCredentialsType';
// import {AuthCredentialsService} from '../authCredentialsType';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  userId: null,
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

  useEffect(() => {
    //INTERCEPTAR SOLICITAÇÕES OU RESPOSTAS ANTES QUE ELAS SEJAM PROCESSADAS POR THENOU CATCH
    const interceptor = registerInterceptor({
      authCredentials,
      saveCrendentials,
      removeCrendentials,
    });

    return interceptor;
  }, [authCredentials]);

  async function startAuthCredentials() {
    try {
      // await new Promise(resolve => setTimeout(resolve, 2000, ''));
      //Pegar os dados so usuário logado no storage do celular
      const getCredentials = await authCredentialsStorage.get();

      if (getCredentials) {
        // atualiza o token de autenticação;
        // authService.updateToken(getCredentials.token);
        apiUtils.updateToken(getCredentials.token);
        //seta os dados do usuário logado no state de authCredentials
        setAuthCredentials(getCredentials);
      }
    } catch (error) {
      //TODO: handle error
      console.log({error});
    } finally {
      setIsLoading(false);
    }
  }

  async function saveCrendentials(ac: AuthCredentials): Promise<void> {
    //TODO:Persist
    // authService.updateToken(ac.token);
    apiUtils.updateToken(ac.token);
    authCredentialsStorage.set(ac);
    setAuthCredentials(ac);
  }

  async function removeCrendentials(): Promise<void> {
    // authService.removeToken();
    apiUtils.removeToken();
    authCredentialsStorage.remove();
    setAuthCredentials(null);
  }

  const userId = authCredentials?.user.id || null;

  return (
    <AuthCredentialsContext.Provider
      value={{
        authCredentials,
        isLoading,
        saveCrendentials,
        removeCrendentials,
        userId,
      }}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}

import React, {PropsWithChildren, useEffect, useState} from 'react';
import {createContext} from 'react';

import {api} from '@api';
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

  useEffect(() => {
    // 1 param => função que será executada quando der sucesso, faixa de status 200
    // 2 param => função que serpa executada quando der um erro.
    const interceptor = api.interceptors.response.use(
      response => response,
      async responseError => {
        if (responseError.response.status === 401) {
          if (!authCredentials?.refreshToken) {
            removeCrendentials();

            //A promisse será rejeitada será passada para o APP, se tentar fazer alguma requisição
            return Promise.reject(responseError);
          }
          //salva os parametros da requisição que falhou para refazer a requisição novamente
          // responseError.config => Tem todos os parametros da requisição;
          const failedRequest = responseError.config;

          // faz a requisição de refreshToke
          const newAuthCredentials =
            await authService.authenticateByRefreshToken(
              authCredentials?.refreshToken,
            );

          // SALVO OS NOVOS DADOS DE CREDENCIAIS
          saveCrendentials(newAuthCredentials);

          // PASSO O NOVO TOKEN PARA O CABEÇALHO DA REQUISIÇÃO.
          failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;

          //REFAZER A REQUISIÇÃO QUE FALHOU;
          return api(failedRequest);
        }

        // remove listener when component unmount
        return () => api.interceptors.response.eject(interceptor);
      },
    );
  }, [authCredentials?.refreshToken]);

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

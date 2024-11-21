//  import { AuthCredentials, authService } from '@domain';
// import axios from 'axios';

import {authService} from '../domain/Auth/AuthService';
import {AuthCredentials} from '../domain/Auth/authTypes';

import {api} from './apiInstance';
// import {authUtils} from '../domain/Auth/authUtils';

// export const BASE_URL = 'http://172.27.64.1:3333/';
// export const api = axios.create({
//   baseURL: BASE_URL,
//   //o header está sendo passado como default ma função updateToken
// });

type InterceptorProps = {
  authCredentials: AuthCredentials | null;
  saveCrendentials: (ac: AuthCredentials) => Promise<void>;
  removeCrendentials: () => Promise<void>;
};

export function registerInterceptor({
  authCredentials,
  removeCrendentials,
  saveCrendentials,
}: InterceptorProps) {
  // 1 param => função que será executada quando der sucesso, faixa de status 200
  // 2 param => função que serpa executada quando der um erro.
  const interceptor = api.interceptors.response.use(
    response => response,
    async responseError => {
      if (responseError.response.status === 401) {
        //salva os parametros da requisição que falhou para refazer a requisição novamente
        // responseError.config => Tem todos os parametros da requisição;
        const failedRequest = responseError.config;

        const hasNotRefreshToken = !authCredentials?.refreshToken;
        //Verifica que a url de erro é da to refresh token(para evitar loops)
        const isRefreshTokenRequest =
          authService.isRefreshTokenRequest(failedRequest);
        // authUtils.isRefreshTokenRequest(failedRequest);
        if (hasNotRefreshToken || isRefreshTokenRequest || failedRequest.sent) {
          removeCrendentials();

          //A promisse será rejeitada será passada para o APP, se tentar fazer alguma requisição
          return Promise.reject(responseError);
        }

        //UM MARCADOR PARA SABER SE A REQUISIÇÃO JÁ FOI ENVIADA. SE JÁ TIVER, RETORNA A PROMISE REJEITADA
        failedRequest.sent = true;

        // faz a requisição de refreshToke
        const newAuthCredentials = await authService.authenticateByRefreshToken(
          authCredentials?.refreshToken,
        );
        // const newAuthCredentials = await authUtils.authenticateByRefreshToken(
        //   authCredentials?.refreshToken,
        // );

        // SALVO OS NOVOS DADOS DE CREDENCIAIS
        saveCrendentials(newAuthCredentials);

        // PASSO O NOVO TOKEN PARA O CABEÇALHO DA REQUISIÇÃO.
        failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;

        //REFAZER A REQUISIÇÃO QUE FALHOU;
        return api(failedRequest);
      }

      return Promise.reject(responseError);
    },
  );
  // remove listener when component unmount
  return () => api.interceptors.response.eject(interceptor);
}

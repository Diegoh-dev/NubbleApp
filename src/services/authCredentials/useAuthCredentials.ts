import {useContext} from 'react';

// import {create} from 'zustand';
// import {persist} from 'zustand/middleware';

// import {storage} from '../storage';

import {AuthCredentialsService} from './authCredentialsType';
import {AuthCredentialsContext} from './providers/AuthCrendentialsProvider';

export function useAuthCrendentials(): AuthCredentialsService {
  // return useAuthCredentialsZustand();

  const context = useContext(AuthCredentialsContext);
  if (!context) {
    throw new Error(
      'AuthCredencials should be within a AuthCredentialsProvider',
    );
  }
  return context;
}

// IMPLEMENTAÇÃO COM zustand USANDO PERSIST E ASYNC STORAGE

// const useAuthCredentialsZustand = create<AuthCredentialsService>()(
//   persist(
//     set => ({
//       authCredentials: null,
//       saveCrendentials: async ac => set({authCredentials: ac}),
//       removeCrendentials: async () => set({authCredentials: null}),
//       isLoading: false,
//     }),
//     {
//       name: '@Auth',
//       storage: storage, //usando a mesma interface que o zustend espera receber
//     },
//   ),
// );

// Pergunta
//quando utilizamos o persist do zustand, por de baixos dos panos ele trabalha em conjunto com o set?
//tipo fica observando o valor do state mudar e automaticamente fazendo o setItem no storage e tal...

//resposta
// Sim, por baixo dos panos é exatamente isso que ele faz. É basicamente uma forma pra você não precisar fazer manualmente.
// A gente fornece a lib que vai fazer o armazenamento no storage e o Zustand a chama quando há alguma atualização no dado.

import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../storage';

import {AuthCredentialsService} from './authCredentialsType';

export function useAuthCrendentials(): AuthCredentialsService {
  return useAuthCredentialsZustand();
}

const useAuthCredentialsZustand = create<AuthCredentialsService>()(
  persist(
    set => ({
      authCredentials: null,
      saveCrendentials: async ac => set({authCredentials: ac}),
      removeCrendentials: async () => set({authCredentials: null}),
      isLoading: false,
    }),
    {
      name: '@Auth',
      storage: storage, //usando a mesma interface que o zustend espera receber
    },
  ),
);

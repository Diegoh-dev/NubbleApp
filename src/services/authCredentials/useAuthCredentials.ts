import {create} from 'zustand';

import {AuthCredentialsService} from './authCredentialsType';

export function useAuthCrendentials(): AuthCredentialsService {
  return useAuthCredentialsZustand();
}

const useAuthCredentialsZustand = create<AuthCredentialsService>(set => ({
  authCredentials: null,
  saveCrendentials: async ac => set({authCredentials: ac}),
  removeCrendentials: async () => set({authCredentials: null}),
  isLoading: false,
}));

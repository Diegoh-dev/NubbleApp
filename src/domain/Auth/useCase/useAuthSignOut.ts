import {useMutation} from '@tanstack/react-query';

import {authService} from '../AuthService';

export async function useAuthSingOut() {
  const mutation = useMutation<string, unknown, void>({
    mutationFn: () => authService.signOut(),
    retry: false,
  });

  return {
    isLoading: mutation.isLoading,
    SingOut: () => mutation.mutate(),
  };
}

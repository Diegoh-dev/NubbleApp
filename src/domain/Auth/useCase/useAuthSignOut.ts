import {useAuthCrendentials} from '@services';
import {useMutation} from '@tanstack/react-query';

import {authService} from '../AuthService';

export function useAuthSingOut() {
  const {removeCrendentials} = useAuthCrendentials();
  const mutation = useMutation<string, unknown, void>({
    mutationFn: () => authService.signOut(),
    retry: false,
    onSuccess: () => {
      authService.removeToken();
      removeCrendentials();
    },
  });

  return {
    isLoading: mutation.isLoading,
    SingOut: () => mutation.mutate(),
  };
}

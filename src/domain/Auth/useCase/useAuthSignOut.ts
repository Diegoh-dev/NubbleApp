import {useAuthCrendentials, useSearchHistoryService} from '@services';
import {useMutation} from '@tanstack/react-query';

import {authService} from '../AuthService';

export function useAuthSingOut() {
  const {removeCrendentials} = useAuthCrendentials();
  const {clearUserList} = useSearchHistoryService();
  const mutation = useMutation<string, unknown, void>({
    mutationFn: () => authService.signOut(),
    retry: false,
    onSettled:() => {
      //onSettled => é chamado mesmo que a promisse tenha sido resolvida ou não;
      removeCrendentials();
      clearUserList();
    },
  });

  return {
    isLoading: mutation.isLoading,
    SingOut: () => mutation.mutate(),
  };
}

import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import { useDebounce } from '@hooks';

import {authService} from '../AuthService';

interface Params {
  username: string;
  enabled:boolean;
}
export function useAuthIsUsernameIsVailable({username,enabled}: Params) {

    const debouncedUserName = useDebounce(username,1500);

  const {data, isFetching} = useQuery({
    queryKey: [QueryKeys.IsUsernameAvailable, debouncedUserName],
    queryFn: () => authService.isUsernameAvailable(debouncedUserName),
    staleTime: 20000,
    enabled: enabled && debouncedUserName.length > 0,
  });

  // para mostrar para o usuário que ainda está fazendo a validação(carregamento) dos dados no debounce

  const isDebouncing = debouncedUserName !== username;

  return {
    isUnavailable:data === false,
    isFetching: isFetching || isDebouncing,
  };
}

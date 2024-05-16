import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import { useDebounce } from '@hooks';

import {authService} from '../AuthService';

interface Params {
  username: string;
}
export function useAuthIsUsernameIsVailable({username}: Params) {

    const debouncedUserName = useDebounce(username,1500);

  const {data, isFetching} = useQuery({
    queryKey: [QueryKeys.IsUsernameAvailable, debouncedUserName],
    staleTime: 20000,
    queryFn: () => authService.isUsernameAvailable(debouncedUserName),
  });

  return {
    isVailable: !!data,
    isFetching,
  };
}

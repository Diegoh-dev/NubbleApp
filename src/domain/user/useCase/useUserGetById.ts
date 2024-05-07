import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {userService} from '../userService';

export function useUserGetById(id: number) {
  const {data, isLoading, isError} = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.getList(id),
    staleTime: 1000 * 30, //30 segundos
    // cacheTime: 1000 * 30
  });

  return {
    user: data,
    isLoading,
    isError,
  };
}

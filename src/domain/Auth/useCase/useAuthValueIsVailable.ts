import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {useDebounce} from '@hooks';

import {authService} from '../AuthService';

interface Params<T extends {length: number}>{
  value: T;
  enabled: boolean;
  queryKey:QueryKeys
  isAvailableFunc: (value:T) =>  Promise<boolean>;
}


 function useAuthIsValueIsVailable<T extends {length: number}>({
  value,
  queryKey,
  isAvailableFunc,
  enabled,
}: Params<T>) {
  const debouncedValue = useDebounce(value, 1500);

  const {data, isFetching} = useQuery({
    queryKey: [queryKey, debouncedValue],
    queryFn: () => isAvailableFunc(debouncedValue),
    staleTime: 20000,
    enabled: enabled && debouncedValue.length > 0,
  });

  // para mostrar para o usuário que ainda está fazendo a validação(carregamento) dos dados no debounce

  const isDebouncing = debouncedValue !== value;

  return {
    isUnavailable: data === false,
    isFetching: isFetching || isDebouncing,
  };
}

export function useAuthIsUsernameIsVailable({username, enabled}: {username:string,enabled:boolean}) {

  return useAuthIsValueIsVailable({
    value: username,
    enabled,
    isAvailableFunc: authService.isUsernameAvailable,
    queryKey: QueryKeys.IsUsernameAvailable,
  });

}


export function useAuthIsEmailIsVailable({email, enabled}: {email:string,enabled:boolean}) {

  return useAuthIsValueIsVailable({
    value: email,
    enabled,
    isAvailableFunc: authService.isEmailAvailable,
    queryKey: QueryKeys.IsEmailAvailable,
  });
}
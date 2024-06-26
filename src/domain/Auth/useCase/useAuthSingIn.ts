import {MutationOptions} from '@infra';
import {useAuthCrendentials} from '@services';
import {useMutation} from '@tanstack/react-query';

import {authService} from '../AuthService';
import {AuthCredentials} from '../authTypes';
/*
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown,
*/

interface Variables {
  email: string;
  password: string;
}
export function useAuthSingIn(option?: MutationOptions<AuthCredentials>) {
  const {saveCrendentials} = useAuthCrendentials();
  const mutation = useMutation<AuthCredentials, Error, Variables>({
    mutationFn: ({email, password}) => authService.signIn(email, password),
    retry: false, // Quando falhar a requisição não tentar fazer novamente
    onError: error => {
      if (option?.onError) {
        option.onError(error.message);
      }
    },
    onSuccess: authCredentials => {
      // authService.updateToken(authCredentials.token);
      if (option?.onSuccess) {
        option.onSuccess(authCredentials);
      }
      saveCrendentials(authCredentials);
    },
  });

  return {
    isLoading: mutation.isLoading,
    SignIn: (variables: Variables) => mutation.mutate(variables),
    isSuccess:mutation.isSuccess,
    isError:mutation.isError,
  };
}

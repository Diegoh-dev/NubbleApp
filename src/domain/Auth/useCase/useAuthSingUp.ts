import {MutationOptions} from '@infra';
import {useMutation} from '@tanstack/react-query';

import {authService} from '../AuthService';
import {SingUpData} from '../authTypes';

export function useAuthSingUp(option?: MutationOptions<void>) {
  const mutation = useMutation<void, Error, SingUpData>({
    mutationFn: singUpData => authService.signUp(singUpData),
    retry:false,
    onSuccess: () => {
      if (option?.onSuccess) {
        option.onSuccess();
      }
    },
    onError: error => {
      if (option?.onError) {
        option.onError(error.message);
      }
    },
  });

  function signUp(variables: SingUpData) {
    mutation.mutate(variables);
  }

  return {
    isLoading: mutation.isLoading,
    signUp,
  };
}
